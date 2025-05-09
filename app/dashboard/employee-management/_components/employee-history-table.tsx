"use client";
import React, { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { employeeRecord } from "./employ-types";
import EmployeeDetailView from "./employee-detailview";
import Modal from "@/app/components/modal";

const EmployeeHistoryTableDesktop: React.FC<{ data: employeeRecord[] }> = ({ data }) => {
  const [selectedEmployee, setSelectedEmployee] = useState<employeeRecord | null>(null);

  const handleViewDetails = (employee: employeeRecord) => {
    setSelectedEmployee(employee);
  };

  const handleCloseDetails = () => {
    setSelectedEmployee(null);
  };

  return (
    <>
      <tbody>
        {data.map((employee) => (
          <tr key={employee.id} className="border-b border-white/10 hover:bg-white/10 text-white/80">
            <td className="px-6 py-4 flex items-center">
              {employee.profileImage ? (
                <Image
                  src={employee.profileImage}
                  alt={employee.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-md mr-4"
                />
              ) : (
                <div className="w-10 h-10 rounded-md mr-4 bg-gray-600 flex items-center justify-center">
                  <User className="text-gray-400" />
                </div>
              )}
              <div>
                <div>{employee.name}</div>
                <div className="text-sm text-gray-400">{employee.email}</div>
              </div>
            </td>
            <td className="px-6 py-4">{employee.position}</td>
            <td className="px-6 py-4">{employee.startDate}</td>
            <td className="px-6 py-4">
              <span
                className={`
                  px-2 py-1 rounded-full text-xs
                  ${
                    employee.workStatus === "Active"
                      ? "bg-[#D3FF1F]/20 text-[#D3FF1F] shadow-[#D3FF1F]/50 shadow-sm"
                      : "bg-[#FFA51F]/20 text-[#FFA51F] shadow-[#FFA51F]/50 shadow-sm"
                  }
                `}
              >
                {employee.workStatus}
              </span>
            </td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 secondary-btn text-white rounded font-medium text-sm"
                onClick={() => handleViewDetails(employee)}
              >
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      {selectedEmployee && (
        <Modal isOpen={!!selectedEmployee} onClose={handleCloseDetails}>
          <EmployeeDetailView employee={selectedEmployee} onClose={handleCloseDetails} />
        </Modal>
      )}
    </>
  );
};

export default EmployeeHistoryTableDesktop;
