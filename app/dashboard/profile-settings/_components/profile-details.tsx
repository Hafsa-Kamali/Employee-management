// src/app/dashboard/components/ProfileDetails.tsx
"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

import AddWalletModal from "./add-wallet-modal";
import UpdateUserModal from "./update-user-modal";
import { secondarySidebarItems } from "../../_components/secondary-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCopySharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";

interface ProfileDetailsProps {
  name: string;
  email: string;
  phone: string;
  country: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ name, email, phone, country }) => {
  console.log(name, email, phone, country);
  const pathname = usePathname();

  const [isAddWalletModalOpen, setIsAddWalletModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const defaultImage = "/images/dummy-image.png";
  const [profileImage, setProfileImage] = useState<string>(defaultImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const firstName = "Dave";
  const lastName = "Bhids";
  const displayName = "DaveBhids";
  const userEmail = "bidy20@gmail.com";
  const userPhone = "+971 3078997700";

  // Handlers
  const openAddWalletModal = () => {
    setIsAddWalletModalOpen(true);
  };

  const closeAddWalletModal = () => {
    setIsAddWalletModalOpen(false);
  };

  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
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
    <div className="w-full border-l-[1px] border-white/10 pb-8 border-b-[1px]">
      <div className="w-full border-b-[1px] border-white/10 px-4 md:px-8 py-6">
        <h1 className="text-2xl md:text-lg font-normal">Account and settings</h1>

        <div className="flex  gap-4 mx-auto mt-4">
          {secondarySidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-4 rounded-lg py-2 hover:bg-white/10 ${
                pathname === item.href
                  ? "border-black bg-[rgba(116,117,123,0.16)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                  : ""
              }`}
            >
              <p className={`text-sm ${pathname === item.href ? "text-white" : "text-white/40"}`}>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full border-b-[1px] border-white/10 px-4 md:px-8 py-6">
        <h1 className="text-xl font-medium">My Profile</h1>
      </div>
      <div className="w-full px-4 md:px-8 py-6">
        <div className="flex">
          <div className="border border-white/10 rounded-xl flex items-center justify-center p-1 w-14 h-14 bg-[#ffffff0a] shrink-0">
            <Image src={profileImage} alt="Profile Picture" width={48} height={48} className="w-full h-full shrink-0" />
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
      <div className="relative px-4 md:px-8 py-6 border-t-[1px] border-white/10">
        <Image
          src="/svgs/glow-bar-xs.svg"
          className="absolute top-0 left-2 md:left-6 w-12"
          alt="Profile Picture"
          width={36}
          height={26}
        />

        <Image src="/svgs/wallet-icon.svg" alt="Profile Picture" width={24} height={24} />

        <div className="flex items-center gap-4 pt-4">
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-semibold">Wallet Address</h4>
            <p className="text-xs text-white/50">Add your wallet address to make Payouts</p>
          </div>
          <button
            type="button"
            className="hidden md:flex items-center gap-2 ml-auto px-3 py-2 secondary-btn text-white rounded font-medium text-xs"
            onClick={openAddWalletModal}
          >
            {/* <IoMdAddCircle className="size-4 fill-white/50" />  */}
            Add Wallet
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-8">
          <h6 className="text-xs text-white/50">My Wallet Address</h6>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Image src="/images/usdt.png" alt="Profile Picture" width={24} height={24} />
              <p className="text-white">0x742d3...8f44e</p>
            </div>
            <IoCopySharp className="fill-white/40 cursor-pointer hover:fill-white" />
          </div>
        </div>

        <button
          type="button"
          className="flex md:hidden items-center gap-2 ml-auto px-3 py-2 secondary-btn text-white rounded font-medium text-xs"
          onClick={openAddWalletModal}
        >
          <IoMdAddCircle className="size-4 fill-white/50" />
          Add Wallet
        </button>
      </div>
      <div className="relative px-4 md:px-8 py-6 border-t-[1px] border-white/10">
        <Image
          src="/svgs/glow-bar-xs.svg"
          className="absolute top-0 left-2 md:left-6 w-12"
          alt="Profile Picture"
          width={36}
          height={26}
        />

        <Image src="/svgs/profile-circle-icon.svg" alt="Profile Picture" width={24} height={24} />

        <div className="flex items-center gap-4 pt-4">
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-semibold">Main Information</h4>
            <p className="text-xs text-white/50">
              Here you can update your first name, last name, email, and phone number
            </p>
          </div>
          <button
            type="button"
            className="hidden md:flex items-center gap-2 ml-auto px-3 py-2 secondary-btn text-white rounded font-medium text-xs"
            onClick={openUpdateModal}
          >
            <RiEdit2Fill className="size-4 fill-white/50" />
            Update
          </button>
        </div>
        <div className="flex flex-col gap-8 w-full md:max-w-[55%] mt-8">
          <div className="w-full grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-1">
              <h6 className="text-xs text-white/50">First Name</h6>
              <p className="text-white text-sm">Dave </p>
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-xs text-white/50">Last Name</h6>
              <p className="text-white text-sm">Bhids </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-1">
              <h6 className="text-xs text-white/50">Display Name</h6>
              <p className="text-white text-sm">DaveBhids </p>
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-xs text-white/50">Email Address</h6>
              <p className="text-white text-sm">bidy20@gmail.com </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-1">
              <h6 className="text-xs text-white/50">Phone Number</h6>
              <p className="text-white text-sm">+971 3078997700 </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex md:hidden items-center gap-2 ml-auto px-3 py-2 secondary-btn text-white rounded font-medium text-xs"
          onClick={openUpdateModal}
        >
          <RiEdit2Fill className="size-4 fill-white/50" />
          Update
        </button>
      </div>

      {/* RENDER MODALS */}
      <AddWalletModal isOpen={isAddWalletModalOpen} onClose={closeAddWalletModal} />
      <UpdateUserModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        firstName={firstName}
        lastName={lastName}
        displayName={displayName}
        email={userEmail}
        phone={userPhone}
      />
    </div>
  );
};

export default ProfileDetails;
