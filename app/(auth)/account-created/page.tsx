"use client";
import React from "react";
import Link from "next/link";
import AuthLayout from "@/app/components/auth-layout";
import Image from "next/image";

const AccountCreatedPage = () => {
  return (
    <AuthLayout>
      <div className="w-full h-full max-w-md mx-auto text-center z-10">
        <div className="w-full h-full">
          <div className="h-full flex flex-col justify-between items-center">
            <div className="pt-[60%] sm:pt-[45%] relative flex w-full flex-col justify-center items-center z-10">
              <div className="flex justify-center mb-6">
                <Image src="/images/email-icon.svg" alt="Checkmark" width={50} height={50} />
              </div>

              <h2 className="text-2xl font-bold mb-2">Email verified successfully</h2>

              <p className="text-sm text-white/50">
                Your email is verified successfully! You can now log in to your account
              </p>

              <Link href="/login" className="text-primary text-sm">
                <button type="button" className="px-3 py-2 secondary-btn text-white rounded font-medium text-sm mt-10">
                  Return to Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AccountCreatedPage;
