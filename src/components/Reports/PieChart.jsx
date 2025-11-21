import Chart from 'chart.js/auto' 
import { useEffect, useRef } from "react"; 


// Destructure the props that are passed into the component
export const SalesReportsChart = ({ chartData, chartId, titleText }) => {
  
  // Use a ref to target the canvas element in the DOM
  const canvasRef = useRef(null);
  
  // Use a ref to store the Chart.js instance outside of the state/render cycle
  const chartInstanceRef = useRef(null);

  // useEffect hook to handle chart creation and cleanup
  useEffect(() => {
    // 1. Ensure the canvas element is available
    const ctx = canvasRef.current.getContext('2d');
    
    // Check if data is valid and has counts
    if (!chartData || chartData.length === 0) {
      // Clean up any existing chart if data is missing
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
      return;
    }

    // Extract labels and counts from the structured data array (topItemsArray)
    const labels = chartData.map(item => item.label);
    const dataCounts = chartData.map(item => item.value);

    // Calculate the total count
    const totalCount = dataCounts.reduce((sum, count) => sum + count, 0);

    // 2. Destroy the previous chart instance before creating a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // 3. Create the new Chart.js instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: dataCounts,
            backgroundColor: [
              // Use a more extensive color palette
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
            ],
            borderColor: "#fff",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: `${titleText} Total: ${totalCount} Items`,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const count = context.parsed;
                const percentage = ((count / totalCount) * 100).toFixed(1);
                return `${context.label}: ${count} (${percentage}%)`;
              },
            },
          },
        },
      },
    });

    // 4. Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chartData, titleText]); // Rerun effect when chartData or titleText changes

  // 5. Render the canvas element using the ref
  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <canvas id={chartId} ref={canvasRef}></canvas>
    </div>
  );
};