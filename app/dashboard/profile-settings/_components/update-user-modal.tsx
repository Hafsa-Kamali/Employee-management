"use client";

import Modal from "@/app/components/modal";
import React, { useState } from "react";

interface UpdateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  phone: string;
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
  isOpen,
  onClose,
  firstName: initialFirstName,
  lastName: initialLastName,
  displayName: initialDisplayName,
  email: initialEmail,
  phone: initialPhone,
}) => {
  // Local states for each field
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [userEmail, setUserEmail] = useState(initialEmail);
  const [userPhone, setUserPhone] = useState(initialPhone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      displayName,
      userEmail,
      userPhone,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Update User Details</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputField}
            placeholder="First Name"
            required
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputField}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className={inputField}
            placeholder="Display Name"
            required
          />
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className={inputField}
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className={inputField}
            placeholder="Phone"
          />
        </div>

        <div className="flex items-center justify-end gap-3 mt-4">
          <button
            type="button"
            className="flex items-center gap-2 ml-auto px-3 py-2 secondary-btn text-white rounded font-medium text-sm"
            onClick={onClose}
          >
            Cancel
          </button>

          <button type="submit" className="py-2 px-4 primary-btn text-black rounded font-medium text-sm">
            Update
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateUserModal;

const inputField = `w-full rounded-xl py-3 px-5 bg-[#000000]/50 border-white/10 border-[1px] text-white focus:outline-none focus:ring-0`;
