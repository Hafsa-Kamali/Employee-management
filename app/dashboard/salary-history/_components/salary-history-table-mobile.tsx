// src/app/dashboard/salary-history/_components/SalaryHistoryTableMobile.tsx
"use client";
import React from "react";
import { SalaryRecord } from "./salary-types";

const SalaryHistoryTableMobile: React.FC<{ data: SalaryRecord[] }> = ({ data }) => {
  return (
    <div className="w-full space-y-4 px-4 md:px-8">
      {data.map((record, index) => (
        <div key={index} className="rounded-2xl p-4 border border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/50">Payment Date</span>
            <span className="text-sm text-white">{record.paymentDate}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/50">Year/Month</span>
            <span className="text-sm text-white">{record.yearMonth}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/50">Base Salary</span>
            <span className="text-sm text-white">${record.baseSalary}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/50">Bonus</span>
            <span className="text-sm text-white">${record.bonus}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/50">Unpaid Leaves</span>
            <span className="text-sm text-white">{record.unpaidLeaves}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/50">Deductions</span>
            <span className="text-sm text-white">${record.deductions}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/50">Total Amount</span>
            <span className="text-sm text-white">${record.totalAmount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/50">Receiver Address</span>
            <span className="text-sm text-white">{record.receiverAddress}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalaryHistoryTableMobile;
