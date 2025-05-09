"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, className, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      className="
        fixed 
        inset-0 
        z-50 
        flex 
        items-center 
        justify-center 
        bg-[#272E0C66]
        backdrop-blur-sm
      "
      onClick={onClose} // Close if user clicks outside modal
    >
      <div
        className={`
          relative 
          bg-[#000] 
          md:w-full 
          max-w-[90%]
          mx-auto 
          rounded-2xl 
          p-6 
          shadow-lg
          w-[90%]
          border-2
          border-[#FFFFFF1A]
          custom-modal-shadow 
           ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src="/svgs/glow-bar-xs.svg"
          className="absolute top-0 left-2 md:left-4 w-14"
          alt="Profile Picture"
          width={36}
          height={26}
        />
        <button onClick={onClose} className="cursor-pointer absolute top-3 right-3 text-white hover:text-gray-300">
          <IoMdClose size={20} />
        </button>

        {children}
      </div>
    </div>
  );

  // Render modal into document.body using a Portal
  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
