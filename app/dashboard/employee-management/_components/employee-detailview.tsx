"use client";
import React, { useState } from "react";
import Image from "next/image";
import { User, Edit, Mail, Calendar, Briefcase } from "lucide-react";
import { employeeRecord } from "./employ-types";
import { IoCalendarOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SalaryHistoryTable from "../../salary-history/_components/salary-history-integretion";
interface EmployeeDetailViewProps {
  employee: employeeRecord;
  onClose: () => void;
}

const EmployeeDetailView: React.FC<EmployeeDetailViewProps> = ({ employee, onClose }) => {
  const [activeTab, setActiveTab] = useState<"contact" | "salary" | "leave" | "message">("contact");
  const [note, setNote] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isEmployeeActive, setIsEmployeeActive] = useState(employee.workStatus === "Active");

  return (
    <div className="">
      {/* Header */}
      <div className="flex p-8 border-b border-white/10">
        <div className="mr-6">
          {employee.profileImage ? (
            <Image
              src={employee.profileImage}
              alt={employee.name}
              width={120}
              height={120}
              className="w-32 h-32 rounded-xl object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-xl bg-gray-600 flex items-center justify-center">
              <User className="w-16 h-16 text-gray-400" />
            </div>
          )}
        </div>

        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">{employee.name}</h2>
              <div className="flex items-center space-x-4 text-white/70 mb-4">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{employee.position}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Since {employee.startDate}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-[4rem]">
              <button
                className="flex items-center gap-2 ml-auto px-3 py-2 secondary-btn text-white rounded font-medium text-sm"
                title="Edit Employee"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button
                className="flex items-center gap-2 ml-auto px-3 py-2 primary-btn  rounded font-medium text-sm"
                title="Send Email"
              >
                <span className="text-black">Send Email</span>
              </button>
            </div>
          </div>

          <span
            className={`
                px-3 py-1 rounded-full text-xs
                ${
                  employee.workStatus === "Active" ? "bg-[#D3FF1F]/20 text-[#D3FF1F]" : "bg-[#FFA51F]/20 text-[#FFA51F]"
                }
              `}
          >
            {employee.workStatus}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Side - Content */}
        <div className="w-2/3">
          {/* Tabs */}
          <div className="flex border-b border-white/10">
            {["contact", "salary", "leave", "message"].map((tab) => (
              <button
                key={tab}
                className={`
                    px-3 py-4 capitalize 
                    ${
                      activeTab === tab
                        ? "text-[#D3FF1F] border-b-2 border-[#D3FF1F]"
                        : "text-white/50 hover:text-white"
                    }
                  `}
                onClick={() => setActiveTab(tab as "contact" | "salary" | "leave" | "message")}
              >
                {tab} History
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-6 py-4 ml-14 capitalize text-white/50 hover:text-white inline-flex"
              >
                <IoCalendarOutline className="w-5 h-5 mr-2 border-white/20 border rounded-lg mt-0.5" />
                {selectedDate ? selectedDate.toLocaleDateString() : "Month/Year"}
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-50">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setIsOpen(false);
                    }}
                    inline
                  />
                </div>
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="py-6 px-2">
            {activeTab === "contact" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact History</h3>
                <table className="w-full mt-14">
                  <thead className="border-t border-white/10 text-xs">
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2">Contract Name</th>
                      <th className="text-left py-2">Contract Duration</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-right py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3">1 Year UILIX Contract</td>
                      <td className="py-3">
                        <div className="flex flex-col">
                          <div className="w-[80%] bg-gray-700 rounded-full h-[5px] mt-1 mb-4">
                            <div className="bg-red-500 h-[5px] rounded-full" style={{ width: "80%" }}></div>
                          </div>
                          <div className="flex flex-row space-x-12 text-white/80 text-sm">
                            <span>2 Years</span>
                            <span>02/2023-01/2024</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded-full text-xs border-green-500/20 border">
                          Active
                        </span>
                      </td>
                      <td className="text-right py-3">
                        <button className="flex items-center gap-2 ml-auto px-3 py-2 secondary-btn text-white rounded font-medium text-xs">
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full mt-14">
                  <thead className="text-xs">
                    <tr className="border-b border-white/10 border-t">
                      <th className="text-left py-2">Contract Name</th>
                      <th className="text-left py-2">Contract Duration</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-right py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3">1 Year UILIX Contract</td>
                      <td className="py-3">
                        <div className="flex flex-col">
                          <div className="w-[80%] bg-gray-700 rounded-full h-[5px] mt-1 mb-4">
                            <div className="bg-red-500 h-[5px] rounded-full" style={{ width: "80%" }}></div>
                          </div>
                          <div className="flex flex-row space-x-12 text-white/80 text-sm">
                            <span>2 Years</span>
                            <span>02/2023-01/2024</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <span className="bg-red-500/20 text-red-500 px-2 py-1 rounded-full text-xs border-red-500/20 border">
                          Expired
                        </span>
                      </td>
                      <td className="text-right py-3">
                        <button className="flex items-center gap-2 ml-auto px-3 py-2 secondary-btn text-white rounded font-medium text-xs">
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Placeholder for other tabs */}
            {activeTab === "salary" && <SalaryHistoryTable walletAddress={employee.name} />}
          </div>
        </div>

        {/* Right Side - Personal Information */}
        <div className="w-1/3 p-6 border-l border-white/10">
          <h3 className="text-lg font-semibold mb-4">Personal information</h3>

          <div className="space-y-4">
            <div>
              <p className="text-white/50 text-sm">Email Address</p>
              <p className="text-white">Hymonad8@gmail.com</p>
            </div>

            <div>
              <p className="text-white/50 text-sm">Wallet Address</p>
              <p className="text-white">tfCX87..ff67Cx</p>
            </div>

            <div>
              <p className="text-white/50 text-sm">Phone number</p>
              <p className="text-white">+971 0953 532 55</p>
            </div>

            <p className="text-white/50 text-sm">Employee Status</p>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-white/50">status</span>
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  title="active"
                  type="checkbox"
                  className="sr-only peer"
                  checked={isEmployeeActive}
                  onChange={() => setIsEmployeeActive(!isEmployeeActive)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-400/55 dark:bg-[#1d1c1c] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900/50 peer-checked:bg-gray-600"></div>
              </label>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Note</h3>
            <textarea
              className="w-full bg-[#2A2A2A] rounded-lg p-3 text-white"
              rows={4}
              placeholder="Write reason or write note to Employee"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <button className="mt-2 flex items-center gap-2 ml-auto px-3 py-2 primary-btn text-black rounded font-medium text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailView;
