import "./MostPopularPizzas.css";
import { useState, useEffect } from "react";
import { getReports, getToppingsReports } from "../../services/reportService";
import { SalesReportsChart } from "./PieChart";

const getTopItems = (itemsArray, propertyName, limit) => {
  const counts = itemsArray.reduce((acc, item) => {
    const value = item[propertyName];
    if (value) {
      const key = String(value);
      acc[key] = (acc[key] || 0) + 1;
    }
    return acc;
  }, {});

  return Object.entries(counts)
    .map(([id, count]) => ({
      [propertyName]: id,
      value: count,
    }))
    .sort((a, b) => b.value - a.value)

    .slice(0, limit);
};

const countAllProperties = (ordersArray, propertiesToCount) => {
  const allCounts = {};

  // Initialize the count object for each property specified in the array
  propertiesToCount.forEach((prop) => {
    allCounts[prop] = {};
  });

  // Iterate over the orders array only ONCE
  ordersArray.forEach((order) => {
    // Iterate over the list of properties we want to count
    propertiesToCount.forEach((propName) => {
      const propertyValue = order[propName];

      if (propertyValue) {
        // Access the specific property's count object (e.g., allCounts['sauceId'])
        const currentCountObject = allCounts[propName];

        // Update the count for that specific value (e.g., '1', '2', '3')
        currentCountObject[propertyValue] =
          (currentCountObject[propertyValue] || 0) + 1;
      }
    });
  });

  return allCounts;
};

const formatForPieChart = (counts, labelPrefix, nameMap = {}) => {
  if (!counts) return [];

  return Object.entries(counts)
    .map(([id, count]) => ({
      label: nameMap[id] || `${labelPrefix} ${id}`,
      value: count,
    }))
    .sort((a, b) => b.value - a.value);
};

const sauceName = {
  1: "Marinara",
  2: "Arrabiata",
  3: "Garlic White",
  4: "Diavolo",
  5: "None",
};

const cheeseNames = {
  1: "Mozzerella",
  2: "Buffalo Mozzerella",
  3: "Four Cheese",
  4: "Ricotta",
  5: "Vegan",
  6: "None",
};

const sizeOptions = {
  1: "Small",
  2: "Medium",
  3: "Large",
};

const toppingOptions = {
  1: "Sausage",
  2: "Pepperoni",
  3: "Mushroom",
  4: "Onion",
  5: "Green Pepper",
  6: "Black Olives",
  7: "Basil",
  8: "Extra Cheese",
};

export const SalesReports = () => {
  const [reports, setReports] = useState({});
  const keysToAnalyze = ["sauceId", "cheeseId", "sizeId", "orderId"];

  useEffect(() => {
    const fetchOrdersAndGenerateReports = async () => {
      try {
        const ordersArray = await getReports();
        const toppingsArray = await getToppingsReports();
        const generateReports = countAllProperties(ordersArray, keysToAnalyze);
        const topThreeToppings = getTopItems(toppingsArray, "toppingId", 3);

        setReports({
          ...generateReports,
          topToppings: topThreeToppings,
        });
      } catch (error) {
        console.error("Failed to fetch all orders or generate reports.", error);
      }
    };

    fetchOrdersAndGenerateReports();

  }, []);

  const saucePieChartData = formatForPieChart(
    reports.sauceId,
    "Sauce",
    sauceName
  );
  const cheesePieData = formatForPieChart(
    reports.cheeseId,
    "Cheese",
    cheeseNames
  );

  const sizePieData = formatForPieChart(reports.sizeId, "Size", sizeOptions);

  const topThreeWithNames = (reports.topToppings || []).map((item) => ({
    ...item,
    name: toppingOptions[item.toppingId] || `Unknown Topping ${item.toppingId}`,
  }));

  if (Object.keys(reports).length === 0) {
    return <div>Loading Sales Reports... </div>;
  }
  return (
    <div className="allCharts">
      <div className="chart-container">
        <h2 className="chart-title">Sauces Popularity</h2>
        <SalesReportsChart
          chartData={saucePieChartData}
          chartId="saucePieChart"
          titleText="Sauce Choice Percentage"
          className="pieChart"
        />
      </div>

      <div className="chart-container">
        <h2 className="chart-title">Cheese Popularity</h2>
        <SalesReportsChart
          chartData={cheesePieData}
          chartId="cheesePieChart"
          titleText="Cheese Choice Percentages"
          className="pieChart"
        />
      </div>

      <div className="chart-container">
        <h2 className="chart-title">Size Options</h2>
        <SalesReportsChart
          chartData={sizePieData}
          chartId="sizePieChart"
          titleText="Size Choice Percentages"
          className="pieChart"
        />
      </div>

      <div className="chart-container">
        <h2 className="chart-title">Most Popular Toppings</h2>
        <ul className="toppings-list">
          {topThreeWithNames.map((toppingObject, index) => {
            return (
              <li className="toppings-table"key={index}>
                {toppingObject.name} ({toppingObject.value} orders)
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};