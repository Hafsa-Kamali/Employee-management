"use client";
import React from "react";
import { SalaryRecord } from "./salary-types";

const SalaryHistoryTableDesktop: React.FC<{ data: SalaryRecord[] }> = ({ data }) => {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs uppercase bg-[#0D0D0D] border-b border-white/10">
          <tr>
            <th scope="col" className="px-6 py-4">
              Payment Date
            </th>
            <th scope="col" className="px-6 py-4">
              Year/Month
            </th>
            <th scope="col" className="px-6 py-4">
              Base Salary
            </th>
            <th scope="col" className="px-6 py-4">
              Bonus
            </th>
            <th scope="col" className="px-6 py-4">
              Unpaid Leaves
            </th>
            <th scope="col" className="px-6 py-4">
              Deductions
            </th>
            <th scope="col" className="px-6 py-4">
              Total Amount
            </th>
            <th scope="col" className="px-6 py-4">
              Receiver Address
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => (
            <tr key={index} className="border-b dark:border-white/10 hover:bg-white/20 text-white/80">
              <td className="px-6 py-4">{record.paymentDate}</td>
              <td className="px-6 py-4">{record.yearMonth}</td>
              <td className="px-6 py-4">${record.baseSalary}</td>
              <td className="px-6 py-4">${record.bonus}</td>
              <td className="px-6 py-4">{record.unpaidLeaves}</td>
              <td className="px-6 py-4">${record.deductions}</td>
              <td className="px-6 py-4">${record.totalAmount}</td>
              <td className="px-6 py-4">{record.receiverAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalaryHistoryTableDesktop;
