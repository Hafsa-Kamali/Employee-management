import React, { useState } from "react";
import { FaSearch, } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";

interface ContractManagementHeaderProps {
  onSearch: (term: string) => void;
  onFilterApply: (contractType: string, duration: string) => void;
  onCreateNewContract: () => void;
}

const ContractManagementHeader: React.FC<ContractManagementHeaderProps> = ({
  onSearch,
  onFilterApply,
  onCreateNewContract,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contractType, setContractType] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilterApply = () => {
    onFilterApply(contractType, duration);
  };

  return (
    <div className="relative bg-transparent p-4 text-white">
      {/* Top Button */}
      <div className="absolute right-4 top-3">
        <button
          className="primary-btn text-black px-4 py-2 rounded"
          onClick={onCreateNewContract}
        >
          Create new contract
        </button>
      </div>

      {/* Header Title */}
      <h2 className="text-2xl font-semibold mt-4">Contract Management</h2>
      <p className="text-gray-400 text-sm">
        Manage your all Employee’s Contracts here
      </p>

      {/* Search and Filters */}
      <div className="flex items-center bg-transparent p-4 mt-6 rounded-md space-x-3">
        {/* Search Bar */}
        <div className="relative flex-grow max-w-[650px] border-white/20 border rounded-md">
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

        {/* Contract Type Dropdown */}
        <select
          title="type"
          className="bg-transparent w-[200px] border-white/20 border text-white p-2 mx-6 rounded"
          value={contractType}
          onChange={(e) => setContractType(e.target.value)}
        >
          <option className="bg-black/50" value="">Contract Type</option>
          <option className="bg-black/50" value="UIUX">UIUX Contract</option>
          <option className="bg-black/50"  value="Frontend">Frontend Dev</option>
        </select>

        {/* Duration Dropdown with Calendar Icon */}
        <div className="relative">
          <select
           title="duration"
            className="bg-transparent w-[200px] border-white/20 border text-white p-2 px-4 pr-16 rounded"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option className="bg-black/50" value="">Duration</option>
            <option className="bg-black/50" value="1">1 Year</option>
            <option className="bg-black/50" value="2">2 Years</option>
            <option className="bg-black/50" value="3">3 Years</option>
            <option className="bg-black/50" value="4">4 Years</option>
          </select>
         
        </div>
        <div className=" border-white/20 border rounded ">
        <IoCalendar className=" w-6 h-6 text-gray-400 space-x-3 gap-2" />
        </div>

        {/* Apply Filter Button */}
        <button
          className="secondary-btn w-[200px] border-white/20 border text-white p-2 mx-4 rounded"
          onClick={handleFilterApply}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default ContractManagementHeader;
