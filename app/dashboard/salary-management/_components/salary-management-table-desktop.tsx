import React, { useState } from "react";
import { FaSearch} from "react-icons/fa";

const SalaryManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  
  const handleSearch = () => {
    console.log("Search for:", searchTerm);
  };

  const handleFilterApply = () => {
    console.log("Filter applied for Year:", year, "Month:", month);
  };

  return (
    <div className="relative bg-transparent p-4 text-white">
      {/* Top Button */}
      <div className="absolute right-4 top-3">
        <button className="primary-btn text-black px-4 py-2 rounded bg-yellow-400">
          Add new
        </button>
      </div>

      {/* Header Title */}
      <h2 className="text-2xl font-semibold mt-2">Salary Management</h2>
      <p className="text-gray-400 text-sm">
        Manage employee compensation efficiently with structured salary entries
      </p>

      {/* Search and Filters */}
      <div className="flex items-center bg-transparent p-4 mt-6 rounded-md space-x-6">
        {/* Search Bar */}
        <div className="relative flex-grow max-w-[650px] border-white/20 border rounded-md ml-3">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search for employee"
            className="bg-transparent text-white pl-10 pr-10 py-3 rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Year Dropdown */}
        <select
          title="year"
          className="bg-transparent w-[200px] border-white/20 border text-white p-2 rounded"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option className="bg-black/50" value="">Year</option>
          <option className="bg-black/50" value="2024">2024</option>
          <option className="bg-black/50" value="2023">2023</option>
        </select>

        {/* Month Dropdown */}
        <select
          title="month"
          className="bg-transparent w-[200px] border-white/20 border text-white p-2 rounded"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option className="bg-black/50" value="">Month</option>
          <option className="bg-black/50" value="January">January</option>
          <option className="bg-black/50" value="February">February</option>
        </select>

        {/* Apply Filter Button */}
        <button
          className="secondary-btn w-[200px] border-white/20 border text-white p-2 rounded ml-22"
          onClick={handleFilterApply}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default SalaryManagement;
