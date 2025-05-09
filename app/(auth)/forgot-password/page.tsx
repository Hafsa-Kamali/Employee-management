"use client";
import AuthForm from "@/app/components/auth-form";
import { useRouter } from "next/navigation";
import AuthLayout from "@/app/components/auth-layout";
import React from "react";

const ForgotPasswordPage = () => {
  const router = useRouter();

  const handleForgotPassword = (data: { [key: string]: string }) => {
    console.log("Forgot password data:", data);
    router.push("/login");
  };

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto">
        <AuthForm
          title="Forgot Password"
          subTitle="Enter your email below to receive instructions on how to reset your password"
          fields={[{ label: "Email", type: "email" }]}
          submitLabel="Submit"
          onSubmit={handleForgotPassword}
        />
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
