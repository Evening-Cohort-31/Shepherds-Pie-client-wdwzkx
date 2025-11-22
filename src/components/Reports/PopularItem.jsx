import { useLocation } from "react-router-dom";
import "./MostPopularPizzas.css"

export const PopularItemsDetails = () => {
  const location = useLocation();
  const { data, title } = location.state || {
    data: [],
    title: "Report Breakdown",
  };

  return (
    <div className="breakdown-page">
      <h1 className="bp-title">{title}</h1>

      <table className="bp-table">
        <thead>
          <tr>
            <th className="bp-column">Category</th>
            <th className="bp-column">Count</th>
            <th className="bp-column">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const total = data.reduce((sum, item) => sum + item.value, 0);
            const percentage = ((item.value / total) * 100).toFixed(1);
            return (
              <tr key={index}>
                <td>{item.label || item.name }</td>
                <td>{item.value}</td>
                <td>{percentage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
