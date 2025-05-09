"use client";

import Modal from "@/app/components/modal";
import Image from "next/image";
import React, { useState } from "react";

interface AddWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddWalletModal: React.FC<AddWalletModalProps> = ({ isOpen, onClose }) => {
  const [walletAddress, setWalletAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Wallet Address:", walletAddress);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="text-base font-semibold  flex items-center gap-2">Add wallet Address</h2>
        <p className="text-sm text-white/50">
          Make sure you add the write wallet address to use for receiving your funds.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex bg-[#D3FF1F0F] border border-[#7B99001A] rounded-2xl px-2 py-3 flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image src="/images/usdt.png" alt="Profile Picture" width={24} height={24} />
            <p className="text-[#7B9900] text-xs">
              Reminder: Please ensure that you only use (TRC20) Address in Wallet.
            </p>
          </div>
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="
              mt-1
              w-full rounded-xl py-3 px-5 bg-[#000000]/50 border-white/10 border-[1px] text-white focus:outline-none focus:ring-0
            "
            placeholder="Wallet Address"
            required
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
            Add Wallet
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddWalletModal;
