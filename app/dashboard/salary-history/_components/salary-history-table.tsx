"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SalaryRecord } from "./salary-types";
import { salaryData } from "./salary-mock-data";

const SalaryHistoryTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = salaryData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(salaryData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden text-white">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-[#0D0D0D] border-b border-white/10">
          <tr>
            <th className="px-6 py-4">Employee Name</th>
            <th className="px-6 py-4">Base Salary</th>
            <th className="px-6 py-4">Bonus</th>
            <th className="px-6 py-4">Deductions</th>
            <th className="px-6 py-4">Total Amount</th>
            <th className="px-6 py-4">Receiver Address</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee: SalaryRecord) => (
            <tr key={employee.name} className="border-b border-white/10 hover:bg-white/10 text-white/80">
              <td className="px-6 py-4 flex items-center">
                <div className="relative w-10 h-10 mr-4">
                  <Image src={employee.image} alt={employee.name} fill className="rounded-md object-cover" />
                </div>
                <div>
                  <p>{employee.name}</p>
                  <p className="text-xs text-gray-400">{employee.email}</p>
                </div>
              </td>
              <td className="px-6 py-4">${employee.baseSalary}</td>
              <td className="px-6 py-4">${employee.bonus}</td>
              <td className="px-6 py-4">${employee.deductions}</td>
              <td className="px-6 py-4">${employee.totalAmount}</td>
              <td className="px-6 py-4">{employee.receiverAddress}</td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <button className="secondary-btn border border-white/20 hover:bg-white/10 text-white px-4 py-2 rounded-md">
                    Download
                  </button>
                  <button className="hover:bg-white/10 px-3 py-2 rounded text-xl">⋯</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center px-6 py-4 text-sm bg-[#0D0D0D]">
        <p className="text-white/50">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, salaryData.length)} of {salaryData.length}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg bg-[#1A1A1A] border border-white/10 text-white disabled:opacity-30"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-lg border ${
                currentPage === page
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-[#1A1A1A] border-white/10 text-white/50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg bg-[#1A1A1A] border border-white/10 text-white disabled:opacity-30"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryHistoryTable;
