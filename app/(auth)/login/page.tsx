"use client";
import React from "react";
import Link from "next/link";
import AuthLayout from "@/app/components/auth-layout";
import AuthForm from "@/app/components/auth-form";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (data: { [key: string]: string }) => {
    console.log("Login data:", data);
    router.push("/dashboard/profile-settings");
  };

  return (
    <AuthLayout>
      <div className="w-full h-full max-w-md mx-auto">
        <AuthForm
          title="Welcome Back"
          subTitle="It’s great to see you"
          fields={[
            { label: "Email", type: "email" },
            { label: "Password", type: "password" },
          ]}
          submitLabel="Login"
          onSubmit={handleLogin}
          additionalContent={
            <div className="mt-4 text-right">
              <Link href="/forgot-password" className="text-primary text-sm">
                Forgot Password?
              </Link>
            </div>
          }
          mode="login"
        />
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
