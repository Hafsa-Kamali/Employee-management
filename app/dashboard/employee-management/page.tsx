"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaCirclePlus } from "react-icons/fa6";
import DashboardLayout from "../dashboard-layout";
import EmployeeTableHeader from "./_components/employee-table-desktop";
import EmployeeTableBody from "./_components/employee-history-table";
import { employeeData, employeeRecord } from "./_components/employ-types";
import AddEmployeeModal from "./_components/add-new-employee";

const SettingsPage = () => {
  const [employees, setEmployees] = useState<employeeRecord[]>(employeeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("All Positions");
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);

  const itemsPerPage = 8;

  const filteredEmployees = employees.filter(
    (employee) =>
      (selectedPosition === "All Positions" || employee.position === selectedPosition) &&
      (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const paginatedEmployees = filteredEmployees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleAddEmployee = (newEmployeeData: {
    profileImage: string | null;
    name: string;
    email: string;
    walletAddress: string;
    mobileNumber: string;
    position: string;
    startOfCooperation: string;
    workingStatus: string;
  }) => {
    const newEmployee: employeeRecord = {
      id: employees.length + 1,
      name: newEmployeeData.name,
      email: newEmployeeData.email,
      position: newEmployeeData.position,
      startDate: newEmployeeData.startOfCooperation,
      workStatus: "Active",
    };

    setEmployees([...employees, newEmployee]);
  };

  return (
    <DashboardLayout>
      <div className={`flex w-full h-full ${isAddEmployeeModalOpen ? "blur-sm pointer-events-none" : ""}`}>
        <div className="w-full">
          <div className="w-full pb-8">
            <div className="bg-black min-h-screen p-8 text-white">
              <div className="w-full border-b-[1px] border-white/10 py-6">
                <h1 className="text-2xl md:text-xl font-medium">Employee Management</h1>
                <p className="text-sm text-white/50">Manage your all Employe here</p>
              </div>

              {/* Search and Filter Section */}
              <div className="flex mb-6 space-x-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search for employee"
                    className="w-full bg-[#1A1A1A] text-white px-4 py-2 rounded-md pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg
                    className="absolute left-3 top-3 text-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>

                <select
                  title="Select Position"
                  className="bg-[#1A1A1A] text-white px-4 py-2 rounded-md"
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                >
                  <option>All Positions</option>
                  <option>UI/UX Designer</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Fullstack Developer</option>
                </select>

                <button className={buttonStyle} onClick={() => setIsAddEmployeeModalOpen(true)}>
                  <FaCirclePlus className="mr-2" /> Add New Employee
                </button>
              </div>

              {/* Employee Table */}
              <div className="bg-[#000000] rounded-lg">
                <div className="rounded-2xl border border-white/10 overflow-hidden">
                  <table className="w-full text-sm text-left text-white">
                    <EmployeeTableHeader />
                    <EmployeeTableBody data={paginatedEmployees} />
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center p-4 text-sm">
                  <span>
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                    {Math.min(currentPage * itemsPerPage, filteredEmployees.length)} of {filteredEmployees.length}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      title="Previous Page"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="disabled:opacity-50"
                    >
                      <ChevronLeft />
                    </button>
                    {[...Array(Math.min(totalPages, 8))].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`
                          w-8 h-8 rounded-md secondary-btn
                          ${
                            currentPage === index + 1
                              ? "bg-black/50 text-white/50 border-white/50 border"
                              : "bg-gray-700"
                          }
                        `}
                      >
                        {index + 1}
                      </button>
                    ))}
                    <button
                      title="Next page"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 rounded-md secondary-btn text-white disabled:opacity-50"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Employee Modal */}
      <AddEmployeeModal
        isOpen={isAddEmployeeModalOpen}
        onClose={() => setIsAddEmployeeModalOpen(false)}
        onSave={handleAddEmployee}
      />
    </DashboardLayout>
  );
};

export default SettingsPage;

const buttonStyle = `flex items-center px-4 py-2 primary-btn text-black rounded font-medium text-sm`;
