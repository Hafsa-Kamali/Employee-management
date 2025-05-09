// src/app/auth/signup/page.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthLayout from "@/app/components/auth-layout";
import AuthForm from "@/app/components/auth-form";

const SignupPage = () => {
  const router = useRouter();

  const handleSignup = (data: { [key: string]: string }) => {
    console.log("Signup data:", data);
    router.push("/account-created");
  };

  return (
    <AuthLayout>
      <div className="w-full h-full max-w-md mx-auto" data-cy="signup-page">
        <AuthForm
          title="Welcome to Algo Alliance"
          subTitle="Let's Get Started"
          fields={[
            { label: "Email", type: "email" },
            { label: "Password", type: "password" },
            { label: "Confirm Password", type: "password" },
          ]}
          submitLabel="Sign up"
          onSubmit={handleSignup}
          additionalContent={
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 shrink-0 h-5 w-5 appearance-none border-[2px] border-white/20 rounded checked:bg-gray-400 checked:border-transparent"
                  required
                />
                <span className="text-sm">
                  I agree to the processing of my personal data according to our{" "}
                  <Link href="/privacy" className="text-primary">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>
          }
          mode="signup"
        />
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
