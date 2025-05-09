import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface AuthFormProps {
  title: string;
  subTitle?: string;
  fields: { label: string; type: "email" | "password" | "text" }[];
  submitLabel: string;
  onSubmit: (data: { [key: string]: string }) => void;
  additionalContent?: React.ReactNode;
  mode?: "login" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subTitle,
  fields,
  submitLabel,
  onSubmit,
  additionalContent,
  mode,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const pathname = usePathname();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
    setFormData({ ...formData, [label]: e.target.value });
    setErrors({ ...errors, [label]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    const emailField = fields.find((field) => field.label === "Email");
    if (emailField && !validateEmail(formData["Email"])) {
      newErrors["Email"] = "Please enter a valid email address";
    }

    if (mode === "signup") {
      const passwordField = fields.find((field) => field.label === "Password");
      if (passwordField && !validatePassword(formData["Password"])) {
        newErrors["Password"] =
          "Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, and one special character";
      }

      const confirmPasswordField = fields.find((field) => field.label === "Confirm Password");
      if (confirmPasswordField && formData["Password"] !== formData["Confirm Password"]) {
        newErrors["Confirm Password"] = "Passwords do not match";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  return (
    <div className="w-full h-full">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="pt-[60%] sm:pt-[45%] relative flex w-full flex-col justify-center items-center z-10">
          <h2 className="text-2xl font-medium  text-center">{title}</h2>
          <h3 className="text-white/50 text-sm font-normal mb-4 text-center">{subTitle}</h3>
          <form onSubmit={handleSubmit} className="w-full">
            {fields.map((field) => (
              <div key={field.label} className="mb-4 w-full">
                {/* <label className="block text-sm font-medium mb-1">{field.label}</label> */}
                <input
                  type={field.type}
                  className={errors[field.label] ? inputField : inputFieldError}
                  onChange={(e) => handleChange(e, field.label)}
                  required
                  placeholder={field.label}
                  aria-invalid={errors[field.label] ? "true" : "false"}
                  aria-describedby={`${field.label}-error`}
                />
                {errors[field.label] && <p className="text-red-500 text-xs mt-1">{errors[field.label]}</p>}
              </div>
            ))}
            {additionalContent}
            <button type="submit" className="w-full py-2 primary-btn text-black rounded font-medium text-sm mt-10">
              {submitLabel}
            </button>
          </form>
        </div>

        {pathname === "/login" && (
          <div className="flex sm:hidden items-center justify-center w-full py-4 gap-4">
            <h6 className="text-sm font-normal">Don&apos;t have an account yet?</h6>

            <Link href="/signup" className="text-primary text-sm">
              <button type="button" className="px-3 py-2 secondary-btn text-white rounded font-medium text-sm">
                Sign up
              </button>
            </Link>
          </div>
        )}

        {pathname === "/signup" && (
          <div className="flex sm:hidden items-center justify-center w-full py-4 gap-4">
            <h6 className="text-sm font-normal">Already have an account?</h6>

            <Link href="/login" className="text-primary text-sm">
              <button type="button" className="px-3 py-2 secondary-btn text-white rounded font-medium text-sm">
                Log In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;

const inputField = `w-full rounded-xl w-full py-3 px-5 bg-[#000000]/50 border-white/10 border-[1px] text-white rounded-sm focus:outline-none focus:ring-0`;
const inputFieldError = `${inputField} focus:!ring-red-500`;
