import { Chart } from "chart.js"

export const renderPieChart = (topItemsArray, chartId, titleText) => {
    const labels = topItemsArray.map(item => item.name)
    const dataCounts = topItemsArray.map(item => item.count)

    // Calculate the total for percentage display in the title
    const totalCount = dataCounts.reduce((sum, count) => sum + count, 0)

    // Get the canvas element
    const ctx = document.getElementById(chartId);

    if (window.myChartInstance) {
        window.myChartInstance.destroy();
    }

    window.myChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: dataCounts,
                backgroundColor: [
                // Assign a color palette for the slices
                'rgba(255, 99, 132, 0.8)', 
                'rgba(54, 162, 235, 0.8)', 
                'rgba(255, 206, 86, 0.8)', 
                'rgba(75, 192, 192, 0.8)',
            ],
            // Add a border for better separation
            borderColor: '#fff',
            borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `${titleText} Total Count: ${totalCount}`
                },
                tooltip: {
                    // Show count and percentage on hover
                    callback: {
                        label: (context) => {
                            const count = context.parsed;
                            const percentage = (count / totalCount * 100).toFixed(1);
                            return `${context.label}: ${count} (${percentage}%)`
                        }
                    }
                }
            }
        }
    })
}