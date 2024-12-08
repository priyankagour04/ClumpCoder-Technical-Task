import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const LineGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Total Revenue",
        data: [10, 30, 20, 40, 30, 20, 60, 50],
        borderColor: "#2986f9",
        backgroundColor: "rgba(41, 134, 249, 0.2)",
        fill: true,
      },
      {
        label: "Total Sales",
        data: [30, 40, 30, 50, 50, 40, 70, 90],
        borderColor: "#e82994",
        backgroundColor: "rgba(232, 27, 116, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide default legend since we're creating a custom one
      },
    },
  };

  return (
    <div className="bg-white shadow-lg px-6 py-4">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        {/* Custom Legend */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full bg-blue-700"></span>
            <span className="text-blue-700 font-bold">Total Revenue</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full bg-pink-500"></span>
            <span className="text-pink-500 font-bold">Total Sales</span>
          </div>
        </div>

        {/* Day, Week, Month Card */}
        <div className="flex space-x-2 border rounded-md bg-gray-100 shadow-sm p-1">
          <button className="px-3 py-1 text-sm font-medium rounded-md text-gray-600 hover:bg-white focus:bg-blue-700 focus:text-white">
            Day
          </button>
          <button className="px-3 py-1 text-sm font-medium rounded-md text-gray-600 hover:bg-white focus:bg-blue-700 focus:text-white">
            Week
          </button>
          <button className="px-3 py-1 text-sm font-medium rounded-md text-gray-600 hover:bg-white focus:bg-blue-700 focus:text-white">
            Month
          </button>
        </div>
      </div>

      {/* Line Chart */}
      <div style={{ height: "300px", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;
