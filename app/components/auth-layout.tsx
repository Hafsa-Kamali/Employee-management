import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="flex gap-4 h-screen">
      <div className="w-[40%] p-8 sm:flex flex-col justify-center items-center hidden">
        <div className="flex bg-[url(/images/auth-sidebar.png)] bg-cover bg-center w-full h-full  z-0 border-white/10 rounded-3xl border-[1px] relative">
          <div className="absolute top-6 left-6 justify-center items-center hidden sm:flex">
            <Image src="/images/logo.png" width={151} height={30} alt="logo" />
          </div>

          {pathname === "/signup" && (
            <div className="text-white text-3xl font-semibold absolute bottom-6 left-6  max-w-[18ch]">
              Create your account in a few clicks
            </div>
          )}
          {pathname === "/login" && (
            <div className="text-white text-3xl font-semibold absolute bottom-6 left-6  max-w-[18ch]">
              Login to your account with credentials
            </div>
          )}
        </div>
      </div>
      <div className="w-full relative sm:w-[70%] sm:p-8 flex flex-col justify-center ">
        <div className="sm:bg-auth-form bg-cover bg-center w-full h-full z-10 sm:border-white/10 rounded-3xl sm:border-[1px] relative px-7 py-5">
          {pathname === "/login" && (
            <div className="hidden sm:flex items-center justify-end w-full py-4 gap-4">
              <h6 className="text-sm font-normal">Don&apos;t have an account yet?</h6>

              <Link href="/signup" className="text-primary text-sm">
                <button type="button" className="px-3 py-2 secondary-btn text-white rounded font-medium text-sm">
                  Sign up
                </button>
              </Link>
            </div>
          )}
          {pathname === "/signup" && (
            <div className="hidden sm:flex items-center justify-end w-full py-4 gap-4">
              <h6 className="text-sm font-normal">Already have an account?</h6>

              <Link href="/login" className="text-primary text-sm">
                <button type="button" className="px-3 py-2 secondary-btn text-white rounded font-medium text-sm">
                  Log In
                </button>
              </Link>
            </div>
          )}{" "}
          <Image
            src="/svgs/glow-bar-md.svg"
            className="absolute top-0 left-1/2 -translate-x-1/2  w-[70%]"
            alt="Profile Picture"
            width={36}
            height={26}
          />
          <Image
            src="/images/mobile-pattern.png"
            className="absolute top-0 left-0 z-0 sm:hidden"
            width={392}
            height={335}
            alt="pattern"
          />
          <Image
            src="/images/desktop-pattern.png"
            className="absolute bottom-0 right-0 z-[-1] sm:block hidden"
            width={667}
            height={522}
            alt="pattern"
          />
          <div className="absolute top-[7%] left-1/2 -translate-x-1/2 flex justify-center items-center h-20 sm:hidden">
            <Image src="/images/logo.png" width={151} height={30} alt="logo" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
