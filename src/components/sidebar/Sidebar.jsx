import React, { useState } from "react";
import { RiBarChartFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { BsListTask, BsUiChecks } from "react-icons/bs";
import { GrTable } from "react-icons/gr";
import { RiPagesLine, RiLoginBoxLine } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { PiChartPieSliceBold } from "react-icons/pi";
import { MdOutlineFormatIndentDecrease } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Dropdown = ({ icon: Icon, title, items, isOpen, onToggle }) => (
  <li className="mb-4">
    <button
      onClick={onToggle}
      className="text-lg font-medium flex items-center gap-4 w-full py-2 px-4 justify-between hover:bg-gray-100 hover:bg-opacity-50 hover:text-white rounded"
      aria-expanded={isOpen}
    >
      <Icon />
      {title}
      <span
        className={`ml-2 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
      >
        <IoIosArrowDown />
      </span>
    </button>
    <ul
      className={`pl-4 mt-2 font-semibold space-y-2 ${isOpen ? "block" : "hidden"} transition-all`}
    >
      {items.map(({ name, isPro }, index) => (
        <li key={index} className="flex items-center justify-between">
          <button className="text-gray-400 hover:text-white">{name}</button>
          {isPro && (
            <div className="bg-blue-500 p-1 text-white rounded-lg ml-2 text-xs md:text-sm">
              Pro
            </div>
          )}
        </li>
      ))}
    </ul>
  </li>
);

const Sidebar = () => {
  const [openKey, setOpenKey] = useState(null);

  const toggleDropdown = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const menuItems = [
    {
      key: "dashboard",
      icon: BsListTask,
      title: "Dashboard",
      items: [
        { name: "eCommerce", isPro: false },
        { name: "Analytics", isPro: true },
        { name: "Marketing", isPro: true },
        { name: "CRM", isPro: true },
        { name: "Stocks", isPro: true },
      ],
    },
    {
      key: "task",
      icon: BsListTask,
      title: "Task",
      items: [
        { name: "Task 1", isPro: false },
        { name: "Task 2", isPro: false },
        { name: "Task 3", isPro: false },
        { name: "Task 4", isPro: true },
      ],
    },
    {
      key: "forms",
      icon: MdOutlineFormatIndentDecrease,
      title: "Forms",
      items: [
        { name: "Form Elements", isPro: false },
        { name: "Pro Form Elements", isPro: true },
        { name: "Form Layout", isPro: false },
        { name: "Pro Form Layout", isPro: true },
      ],
    },
    {
      key: "tables",
      icon: GrTable,
      title: "Tables",
      items: [
        { name: "Table 1", isPro: false },
        { name: "Table 2", isPro: false },
      ],
    },
    {
      key: "pages",
      icon: RiPagesLine,
      title: "Pages",
      items: [
        { name: "Page 1", isPro: false },
        { name: "Page 2", isPro: true },
      ],
    },
    {
      key: "chart",
      icon: PiChartPieSliceBold,
      title: "Chart",
      items: [
        { name: "Chart 1", isPro: false },
        { name: "Chart 2", isPro: true },
      ],
    },
    {
      key: "UIelements",
      icon: BsUiChecks,
      title: "UI Elements",
      items: [
        { name: "UI element 1", isPro: false },
        { name: "UI element 2", isPro: true },
      ],
    },
    {
      key: "Authentication",
      icon: RiLoginBoxLine,
      title: "Authentication",
      items: [
        { name: "Auth page", isPro: false },
        { name: "Auth logic", isPro: true },
      ],
    },
  ];

  return (
    <div className="bg-gray-800 text-white w-96 h-fit min-h-screen p-4">
      <h1 className="text-2xl flex items-center gap-3 font-bold mb-4">
        <RiBarChartFill className="bg-blue-500 p-1 rounded-lg" />
        TailAdmin
      </h1>

      <div>
        <ul>
          {menuItems.map(({ key, icon, title, items }) => (
            <Dropdown
              key={key}
              icon={icon}
              title={title}
              items={items}
              isOpen={openKey === key}
              onToggle={() => toggleDropdown(key)}
            />
          ))}

          {/* Profile Button */}
          <div className="mt-4">
            <button className="text-lg font-medium flex items-center gap-4 py-2 w-full px-4 hover:bg-gray-100 hover:bg-opacity-50 hover:text-white rounded">
              <FaRegUser className="text-base md:text-lg" />
              <span className="text-sm md:text-lg">Profile</span>
            </button>
          </div>

          {/* Messages Button */}
          <div className="mt-4">
            <button className="text-lg font-medium flex items-center gap-4 py-2 w-full px-4 hover:bg-gray-100 hover:bg-opacity-50 hover:text-white rounded">
              <LuMessageSquareText className="text-base md:text-lg" />
              <span className="text-sm md:text-lg">Messages</span>
              <div className="flex ml-auto">
                <div className="bg-blue-500 p-1 text-white rounded-lg ml-2 text-xs md:text-sm">
                  5
                </div>
                <div className="bg-blue-500 p-1 text-white rounded-lg ml-2 text-xs md:text-sm">
                  Pro
                </div>
              </div>
            </button>
          </div>

          {/* Inbox Button */}
          <div className="mt-4">
            <button className="text-lg font-medium flex items-center gap-4 py-2 w-full px-4 hover:bg-gray-100 hover:bg-opacity-50 hover:text-white rounded">
              <RiLoginBoxLine className="text-base md:text-lg" />
              <span className="text-sm md:text-lg">Inbox</span>
              <div className="flex ml-auto">
                <div className="bg-blue-500 p-1 text-white rounded-lg ml-2 text-xs md:text-sm">
                  Pro
                </div>
              </div>
            </button>
          </div>

          {/* Invoice Button */}
          <div className="mt-4">
            <button className="text-lg font-medium flex items-center gap-4 py-2 w-full px-4 hover:bg-gray-100 hover:bg-opacity-50 hover:text-white rounded">
              <LiaFileInvoiceSolid className="text-base md:text-lg" />
              <span className="text-sm md:text-lg">Invoice</span>
              <div className="flex ml-auto">
                <div className="bg-blue-500 p-1 text-white rounded-lg ml-2 text-xs md:text-sm">
                  Pro
                </div>
              </div>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
