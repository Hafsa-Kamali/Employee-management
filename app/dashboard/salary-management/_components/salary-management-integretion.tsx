"use client";
import React, { useMemo, useState } from "react";
import SalaryHistoryTableDesktop from "./salary-management-table-desktop";
import SalaryHistoryTableMobile from "../../salary-history/_components/salary-history-table-mobile";
import SampleSalaryTable from "./salary-table";
import { SalaryRecord } from "./salary-types";


interface SalaryHistoryProps {
  walletAddress: string; // Use wallet address for filtering
}

const SalaryHistoryTable: React.FC<SalaryHistoryProps> = ({ walletAddress }) => {
  const [yearFilter, setYearFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [fromDateFilter, setFromDateFilter] = useState("");
  const [toDateFilter, setToDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  // Filter data based on wallet address
  // Define or import salaryData
  const salaryData: SalaryRecord[] = []; // Replace with actual data or import statement
  
    const employeeSalaryData: SalaryRecord[] = salaryData.filter((record: SalaryRecord) => record.receiverAddress === walletAddress);

  // Generate month options dynamically from the data
  const monthOptions = useMemo(() => {
    const uniqueMonths = new Set<string>();
    employeeSalaryData.forEach((record) => {
      const month = record.yearMonth.split("/")[1];
      uniqueMonths.add(month);
    });

    return Array.from(uniqueMonths).map((month) => ({
      value: month,
      label: new Date(2000, parseInt(month) - 1, 1).toLocaleString("default", { month: "short" }),
    }));
  }, [employeeSalaryData]);

  const handleApplyFilter = () => {
    setIsFilterApplied(true);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setYearFilter("");
    setMonthFilter("");
    setFromDateFilter("");
    setToDateFilter("");
    setIsFilterApplied(false);
    setCurrentPage(1);
  };

  // Filter the data based on selected filters
  const filteredData = employeeSalaryData.filter((record) => {
    const [recordYear, recordMonth] = record.yearMonth.split("/");

    // Year filter
    const yearMatch = !yearFilter || recordYear === yearFilter;

    // Month filter
    const monthMatch = !monthFilter || recordMonth === monthFilter;

    // Date range filter
    const recordDate = new Date(record.paymentDate);
    const fromDate = fromDateFilter ? new Date(fromDateFilter) : null;
    const toDate = toDateFilter ? new Date(toDateFilter) : null;

    const fromDateMatch = !fromDate || recordDate >= fromDate;
    const toDateMatch = !toDate || recordDate <= toDate;

    // Apply all filters
    return yearMatch && monthMatch && fromDateMatch && toDateMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // If no salary data exists for the employee
  if (employeeSalaryData.length === 0) {
    return (
      <div className="w-full text-center text-white/50">
        {/* No salary history available for this employee. */}
        <SampleSalaryTable />
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:p-8">
      <div className="flex md:flex-row flex-col items-center gap-4 mt-4 mb-6 justify-between">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
          {/* Year Filter */}
          <select
            title="Year"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className={selectInputStyle}
          >
            <option value="">Year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>

          {/* Month Filter */}
          <select
            title="month"
            value={monthFilter}
            onChange={(e) => setMonthFilter(e.target.value)}
            className={selectInputStyle}
          >
            <option value="">Month</option>
            {monthOptions.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>

          {/* From Date Filter */}
          <input
            title="date"
            type="date"
            value={fromDateFilter}
            onChange={(e) => setFromDateFilter(e.target.value)}
            className={selectInputStyle}
          />

          {/* To Date Filter */}
          <input
            title="date"
            type="date"
            value={toDateFilter}
            onChange={(e) => setToDateFilter(e.target.value)}
            className={selectInputStyle}
          />
        </div>

        {/* Apply/Clear Filter Button */}
        <button className={buttonStyle} onClick={isFilterApplied ? handleClearFilter : handleApplyFilter}>
          {isFilterApplied ? "Clear Filter" : "Apply Filter"}
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <SalaryHistoryTableDesktop data={currentData} />
      </div>

      {/* Mobile Table */}
      <div className="block md:hidden">
        <SalaryHistoryTableMobile data={currentData} />
      </div>

      {/* Pagination */}
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center mt-4">
        <p className="text-sm text-white/50">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md secondary-btn text-white disabled:opacity-50"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-md ${currentPage === page ? " text-white" : " text-white/50"}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md secondary-btn text-white disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryHistoryTable;

const selectInputStyle = `rounded-xl w-full py-3 px-5 bg-[#000000]/50 border-white/10 border-[1px] text-white rounded-sm focus:outline-none focus:ring-0 focus:!ring-red-500 text-sm`;
const buttonStyle = `px-4 py-2 primary-btn text-black rounded font-medium text-sm`;
