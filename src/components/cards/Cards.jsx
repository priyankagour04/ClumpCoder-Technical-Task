import React from "react";
import { CgEye } from "react-icons/cg";
import { TfiShoppingCart } from "react-icons/tfi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";

const Cards = () => {
  // Card data to dynamically render
  const cardData = [
    {
      title: "Total Views",
      value: "$3,456K",
      color: "bg-blue-100 text-blue-800",
      percentage: "-0.43%",
      percentageColor: "text-green-500",
      icon: <CgEye />,
      arrow: "▼",
    },
    {
      title: "Total Profit",
      value: "$45.2K",
      color: "bg-blue-100 text-blue-800",
      percentage: "-4.35%",
      percentageColor: "text-green-500",
      icon: <RiMoneyDollarCircleLine />,
      arrow: "▼",
    },
    {
      title: "Total Products",
      value: "2,450",
      color: "bg-blue-100 text-blue-800",
      percentage: "-2.59%",
      percentageColor: "text-green-500",
      icon: <TfiShoppingCart />,
      arrow: "▼",
    },
    {
      title: "Total Users",
      value: "3,456",
      color: "bg-blue-100 text-blue-800",
      percentage: "+0.95%",
      percentageColor: "text-blue-500",
      icon: <HiOutlineUsers />,
      arrow: "▲",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5 mx-5">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 shadow-md rounded-lg flex flex-col "
        >
          <div
            className={`p-2 rounded-full ${card.color} text-xl w-fit mb-4 `}
          >
            {card.icon}
          </div>
          <p className="text-2xl font-bold">{card.value}</p>
          <div className="flex justify-between  mt-2">
            <h1 className="text-gray-700  mr-2">{card.title}</h1>
            <span className={`flex items-center ${card.percentageColor} text-sm`}>
              {card.arrow} {card.percentage}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
