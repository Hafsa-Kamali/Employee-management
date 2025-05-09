"use client";
import React from "react";

const SampleSalaryTable = () => {
  const rows = [
    ["Jan 31, 2024", "2024/01", "$3500", "$100", "2", "$140", "$3460"],
    ["Dec 31, 2023", "2023/12", "$3300", "$200", "1", "$70", "$3430"],
  ];

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs uppercase bg-[#0D0D0D] border-b border-white/10">
          <tr>
            <th className="px-6 py-4">Payment Date</th>
            <th className="px-6 py-4">Year/Month</th>
            <th className="px-6 py-4">Base Salary</th>
            <th className="px-6 py-4">Bonus</th>
            <th className="px-6 py-4">Unpaid Leaves</th>
            <th className="px-6 py-4">Deductions</th>
            <th className="px-6 py-4">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-white/10 hover:bg-white/10 text-white/80">
              {row.map((cell, i) => (
                <td key={i} className="px-6 py-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleSalaryTable;
