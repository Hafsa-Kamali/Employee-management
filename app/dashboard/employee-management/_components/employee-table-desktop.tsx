// src/components/employee/EmployeeTableHeader.tsx
import React from "react";

const EmployeeTableHeader = () => {
  return (
    <thead className="text-xs uppercase bg-[#0D0D0D] border-b border-white/10">
      <tr>
        <th className="px-6 py-4">Employee Name</th>
        <th className="px-6 py-4">Position</th>
        <th className="px-6 py-4">Start Of Cooperation</th>
        <th className="px-6 py-4">Work Status</th>
        <th className="px-6 py-4">Action</th>
      </tr>
    </thead>
  );
};

export default EmployeeTableHeader;
