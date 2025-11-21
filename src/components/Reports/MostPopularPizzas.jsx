import "./MostPopularPizzas.css";
import { useState, useEffect } from "react";
import {
  getReports,
  getCheeseReports,
  getSaucesReports,
  getToppingsReports,
  getSizesReports,
} from "../../services/reportService";
import { SalesReportsChart } from "./PieChart";

export const SalesReports = () => {
  const [reports, setReports] = useState([]);
  const keysToAnalyze = ["sauceId", "cheeseId", "sizeId", "orderId"];

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

  useEffect(() => {
    const fetchOrdersAndGenerateReports = async () => {
      try {
        const ordersArray = await getReports();

        const generateReports = countAllProperties(ordersArray, keysToAnalyze);

        setReports(generateReports);
      } catch (error) {
        console.error("Failed to fetch all orders or generate reports.", error);
      }
    };

    fetchOrdersAndGenerateReports();
  }, []);

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

  return (
    <div className="sales-reports">
      <h2>Sauces Popularity</h2>
      <SalesReportsChart
        chartData={saucePieChartData}
        chartId="saucePieChart"
        titleText="Overall Sauce Choices"
      />

      <h2>Cheese Popularity</h2>
      <SalesReportsChart
        chartData={cheesePieData}
        chartId="cheesePieChart"
        titleText="Overall Cheese Choices"
      />
    </div>
  );
};

