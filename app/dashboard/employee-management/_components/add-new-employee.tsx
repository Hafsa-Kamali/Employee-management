"use client";

import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Modal from "@/app/components/modal"; // ✅ import your reusable Modal

interface AddEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (employeeData: {
    profileImage: string | null;
    name: string;
    email: string;
    walletAddress: string;
    mobileNumber: string;
    position: string;
    startOfCooperation: string;
    workingStatus: string;
  }) => void;
}

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({ isOpen, onClose, onSave }) => {
  const [employeeData, setEmployeeData] = useState({
    profileImage: null as string | null,
    name: "",
    email: "",
    walletAddress: "",
    mobileNumber: "",
    position: "",
    startOfCooperation: "",
    workingStatus: "",
  });
  const defaultImage = "/images/dummy-image.png";

  const [profileImage, setProfileImage] = useState<string>(defaultImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!employeeData.name || !employeeData.email) {
      alert("Please fill in required fields");
      return;
    }

    onSave(employeeData);
    onClose();
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(defaultImage);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-xl">
      <div className="text-white">
        <h2 className="text-base font-bold mb-8">
          Add New Employee
          <br />
          <span className="text-white/50 font-normal text-sm">
            Add employee details, salary amount, and payment cycle
          </span>
        </h2>
        <div className="w-full py-6">
          <div className="flex">
            <div className="border border-white/10 rounded-xl flex items-center justify-center p-1 w-14 h-14 bg-[#ffffff0a] shrink-0">
              <Image
                src={profileImage}
                alt="Profile Picture"
                width={48}
                height={48}
                className="w-full h-full shrink-0"
              />
            </div>

            <div className="flex flex-col gap-2 ml-4">
              <div className="flex items-center gap-4">
                <button
                  className="border border-white/10 rounded-xl flex items-center justify-center px-4 py-2 bg-[#ffffff0a] text-xs cursor-pointer"
                  onClick={handleUploadClick}
                >
                  Upload new image
                </button>
                <button
                  type="button"
                  className="px-3 py-2 secondary-btn text-white rounded font-medium text-xs"
                  onClick={handleDeleteImage}
                >
                  Delete
                </button>
              </div>
              <p className="text-xs text-white/50">
                Recommended 160x160px in PNG or JPG format, <span className="text-white">Max size 1mb</span>
              </p>
            </div>
          </div>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={inputField}
            value={employeeData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={inputField}
            value={employeeData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="walletAddress"
            placeholder="Wallet Address"
            className={`${inputField} col-span-2`}
            value={employeeData.walletAddress}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            className={inputField}
            value={employeeData.mobileNumber}
            onChange={handleInputChange}
          />
          <select name="position" className={inputField} value={employeeData.position} onChange={handleInputChange}>
            <option value="">Position</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
          <input
            type="date"
            name="startOfCooperation"
            className={inputField}
            value={employeeData.startOfCooperation}
            onChange={handleInputChange}
          />
          <select
            name="workingStatus"
            className={inputField}
            value={employeeData.workingStatus}
            onChange={handleInputChange}
          >
            <option value="">Working Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4 mt-8">
          <button
            className="flex items-center gap-2 ml-auto px-3 py-2 secondary-btn text-white rounded font-medium text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="py-2 px-4 primary-btn text-black rounded font-medium text-sm" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;

const inputField = `w-full rounded-xl py-3 px-5 bg-[#000000]/50 border-white/10 border-[1px] text-white focus:outline-none focus:ring-0`;
