import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Employee } from './contract-types';
import { employeeData } from './contract-mock-data';
import { JSX } from 'react/jsx-dev-runtime';

interface ContractManagementTableProps {
  searchTerm: string;
  contractTypeFilter: string;
  durationFilter: string;
}

const ContractManagementTable: React.FC<ContractManagementTableProps> = ({
  searchTerm,
  contractTypeFilter,
  durationFilter
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Filtering logic
  const filteredData = useMemo(() => {
    return employeeData.filter(employee => {
      const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesContractType = !contractTypeFilter || 
        employee.position.toLowerCase().includes(contractTypeFilter.toLowerCase());
      const matchesDuration = !durationFilter || 
        employee.contractDuration.includes(`${durationFilter} Year`);

      return matchesSearch && matchesContractType && matchesDuration;
    });
  }, [searchTerm, contractTypeFilter, durationFilter]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderPageButtons = () => {
    const buttons: JSX.Element[] = []; // Explicitly defining array type
  
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`p-2 rounded ${
            currentPage === i ? 'bg-white/20 text-white border-white/20 border' : 'bg-gray-800'
          }`}
        >
          {i}
        </button>
      );
    }
  
    return buttons; // Ensure to return the array
  };

  return (
    <div className="bg-transparent text-white">
      <table className="w-full ml-8">
        <thead className="bg-transparent border-white/20 border-b border-t ">
          <tr>
            <th className="p-2 text-left font-normal">Assigned To</th>
            <th className="p-2 text-left font-normal">Position</th>
            <th className="p-2 text-left font-normal">Contract Duration</th>
            <th className="p-2 text-left font-normal">Status</th>
            <th className="p-2 text-left font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee: Employee) => (
            <tr key={employee.id} className="border-b border-gray-700">
              <td className="p-2 flex items-center mt-6">
                <div className="relative w-10 h-10 mr-2">
                  <Image 
                    src={employee.image} 
                    alt={employee.name} 
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                {employee.name}
              </td>
              <td className="p-2">{employee.position}</td>
             
 <td className="p-2">
                  <div className="flex flex-col">
                    <div className="w-[80%] bg-gray-700 rounded-full h-2 mt-1">
                      <div
                        className={`${employee.status === 'Active' ? "bg-[#d3ff1f]" : "bg-red-500"} h-2 rounded-full`}
                        style={{ width: `${employee.progress || 0}%` }}
                      ></div>   
                    </div>
                    <div className="flex flex-row space-x-12 text-white/80">
                   
                      <span className="p-2">{employee.contractDuration}</span>
                      <span className="p-2">{employee.contractPeriod}</span>
                    </div>
                  </div>
                </td>

              <td className="p-2">
                <span 
                  className={`px-2 py-1 rounded-full text-xs ${
                    employee.status === 'Active' 
                      ? 'bg-[#D3FF1F]/20 text-[#D3FF1F] shadow-[#D3FF1F]/50 shadow-sm' 
                    : 'bg-red-500/20 text-red-500 shadow-red-500/50 shadow-sm'}
                  }`}
                >
                  {employee.status}
                </span>
              </td>
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

      <div className="flex md:flex-row flex-col gap-4 justify-between items-center mt-4">
  <p className="text-sm text-white/50">
    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length}
  </p>
  <div className="flex items-center gap-2">
    {/* Previous Button */}
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-3 py-1 rounded-md bg-gray-800 text-white disabled:opacity-50"
    >
      &lt;
    </button>

    {/* Page Number Buttons */}
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

    {/* Next Button */}
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

export default ContractManagementTable;