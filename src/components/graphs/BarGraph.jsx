import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { FaChevronDown } from "react-icons/fa"; // Importing the downward arrow icon

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

const BarGraph = () => {
  const salesData = [10, 20, 30, 40, 50, 60, 70]; // Sales data
  const revenueData = [15, 25, 35, 45, 55, 65, 75]; // Revenue data
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("This Week");

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // X-axis labels
    datasets: [
      {
        label: "Sales",
        data: salesData, // Y-axis data for Sales
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color for Sales
        borderWidth: 1,
        barThickness: 12, // Narrow the bars
        stack: "stack1", // Stack with the Revenue dataset
      },
      {
        label: "Revenue",
        data: revenueData, // Y-axis data for Revenue
        backgroundColor: "rgba(153, 102, 255, 0.6)", // Bar color for Revenue
        borderWidth: 1,
        barThickness: 12, // Narrow the bars
        stack: "stack1", // Stack with the Sales dataset
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
    },
    scales: {
      x: {
        type: "category", // X-axis as category scale
        title: {
          display: true,
          text: "Days of the Week", // X-axis label
        },
      },
      y: {
        beginAtZero: true, // Start Y-axis from 0
        title: {
          display: true,
          text: "Amount (in $)", // Y-axis label
        },
        stacked: true, // Enable stacking on the Y-axis
      },
    },
  };

  const handleTimeFrameChange = (event) => {
    setSelectedTimeFrame(event.target.value);
  };

  return (
    <div className="bg-white shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        {/* Custom Legend for Sales and Revenue */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "rgba(75, 192, 192, 0.6)" }}
            ></span>
            <span className=" font-bold" style={{color:"rgba(75, 192, 192, 0.6)"}}>Sales</span>
          </div>
          <div className="flex items-center space-x-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "rgba(153, 102, 255, 0.6)" }}
            ></span>
            <span className="font-bold" style={{color:"rgba(153, 102, 255, 0.6)"}}>Revenue</span>
          </div>
        </div>

        {/* Dropdown for Time Frame */}
        <div className="items-center mx-2">
          <select
            className="px-4 py-2  rounded-md focus:outline-none"
            value={selectedTimeFrame}
            onChange={handleTimeFrameChange}
          >
            <option value="This Week">This Week</option>
            <option value="Last Week">Last Week</option>
            <option value="This Month">This Month</option>
          </select>
        </div>
      </div>

      {/* Bar Chart */}
      <div style={{ height: "280px", width: "100%" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
