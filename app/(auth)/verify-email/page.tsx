// src/app/auth/verify-email/page.tsx
"use client";
import AuthLayout from "@/app/components/auth-layout";
import React from "react";
import Image from "next/image";

const VerifyEmailPage = () => {
  return (
    <AuthLayout>
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image src="/images/success-icon.svg" alt="Checkmark" width={50} height={50} />
        </div>

        <h2 className="text-2xl font-bold mb-2">Great job 🎉</h2>

        <p className="text-lg mb-4">Your email is sent for verification</p>

        <p className="text-sm text-white/50">
          Our team will review and approve your account shortly. Once approved, you can log in and start using your
          account.
        </p>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmailPage;
