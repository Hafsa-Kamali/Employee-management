import React, { useState } from 'react';
import Image from 'next/image';
import { SalaryRecord } from './salary-types';
import { salaryData} from './salary-mock-data';
import SalaryManagement from './salary-management-table-desktop';

const SalaryManagementTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = salaryData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(salaryData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-transparent text-white overflow-hidden">
      <SalaryManagement/>
      <table className="w-full ml-8">
        <thead className="bg-transparent border-white/20 border-b border-t py-8 text-lg">
          <tr>
            <th className="p-2 text-left font-normal">Employee Name</th>
            <th className="p-2 text-left font-normal">Base Salary</th>
            <th className="p-2 text-left font-normal">Bonus</th>
            <th className="p-2 text-left font-normal">Deductions</th>
            <th className="p-2 text-left font-normal">Total Amount</th>
            <th className="p-2 text-left font-normal">Receiver Address</th>
            <th className="p-2 text-left font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee: SalaryRecord) => (
            <tr key={employee.name} className="border-b border-gray-700">
              <td className="p-2 flex items-center mt-4">
                <div className="relative w-10 h-10 mr-2">
                  <Image 
                    src={employee.image} 
                    alt={employee.name} 
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <p>{employee.name}</p>
                  <p className="text-xs text-gray-400">{employee.email}</p>
                </div>
              </td>
              <td className="p-2">${employee.baseSalary}</td>
              <td className="p-2">${employee.bonus}</td>
              <td className="p-2 ">${employee.deductions}</td>
              <td className="p-2 ">${employee.totalAmount}</td>
              <td className="p-2">{employee.receiverAddress}</td>
              <td className="p-2">
              <div className="flex items-center space-x-3">
                  <button className="mr-2 secondary-btn hover:bg-gray-700 py-2 px-3 rounded border-white/20 border">Download</button>
                  <button className="hover:bg-gray-700 p-2 rounded text-[30px] mb-6">...</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-white/50">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, salaryData.length)} of {salaryData.length}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md bg-gray-800 text-white disabled:opacity-50"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page ? "bg-white/20 text-white border-white/20 border" : "bg-gray-800 text-white/50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md bg-gray-800 text-white disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryManagementTable;
