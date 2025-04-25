"use client";
import Image from "next/image";
import React, { useState } from "react";
import { signInButtons } from "../utils/data";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim())) {
      setEmailError("Enter a valid email address");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      hasError = true;
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="relative flex flex-col-reverse md:flex-col-reverse lg:flex-row pt-[120px] lg:pt-[72px]   h-auto items-center body-font overflow-hidden text-white">
      <div className="lg:w-[50%] w-full relative block">
        <Image
          src="/bg/pc.png"
          alt="Laptop"
          height={1000}
          width={1000}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:w-[50%] w-full pb-10 flex justify-center lg:pb-46 items-start  sm:px-4 px-6">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-8 w-full sm:w-[300px] md:w-[350px] lg:w-[209px] h-auto"
        >
          <h1 className="text-center text-[#02342E] font-poppins font-semibold text-3xl leading-[54px]">
            Log in
          </h1>

          <div className="flex flex-col gap-y-3 ">
            {signInButtons.map((button, index) => (
              <Image
                key={index}
                src={button.src}
                alt={button.alt}
                width={button.width}
                height={button.height}
                className="object-contain cursor-pointer w-full"
              />
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 w-full">
            <div className="w-full border border-[#D1D1D1]" />
            <span className="text-black text-center font-lato font-medium text-sm">
              or
            </span>
            <div className="w-full border border-[#D1D1D1]" />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 border border-[#EFEEEC] rounded-md bg-white p-2">
              <Image
                src="/icons/at.png"
                alt="Email Icon"
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-[#909090] font-lato text-sm outline-none"
              />
            </div>
            {emailError && (
              <span className="text-red-500 text-xs">{emailError}</span>
            )}

            <div className="flex items-center justify-between border border-[#EFEEEC] rounded-md bg-white p-2">
              <div className="flex items-center gap-2 w-full">
                <Image
                  src="/icons/lock.png"
                  alt="Password Icon"
                  width={18}
                  height={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-[#909090] font-lato text-sm outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-4 cursor-pointer h-4 text-gray-500" />
                ) : (
                  <EyeIcon className="w-4 h-4 cursor-pointer text-gray-500" />
                )}
              </button>
            </div>
            {passwordError && (
              <span className="text-red-500 text-xs">{passwordError}</span>
            )}

            <a className="text-black font-lato text-xs">
              Forgot password?{" "}
              <span className="font-bold cursor-pointer hover:underline">
                Reset
              </span>
            </a>
          </div>

          <div className={`flex flex-col items-center gap-4 `}>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-4 h-4 cursor-pointer accent-[#02342E] rounded border border-[#D1D1D1]"
              />
              <label
                htmlFor="rememberMe"
                className="text-black text-sm font-roboto"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer lg:w-[192px] md:w-[310px] h-10 px-6 py-2 bg-[#02342E] text-white rounded-full text-sm font-roboto"
            >
              Log in
            </button>

            <a className="text-black text-xs font-lato">
              Don’t have account?{" "}
              <span className="font-bold cursor-pointer hover:underline">
                Sign Up
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
