"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { buttons, menuItems } from "../utils/data";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-white/70 backdrop-blur-sm fixed top-0 w-full z-50"
      style={{ boxShadow: "0px 4px 3px 0px #00000014" }}
    >
      <nav
        className="mx-auto h-[72px] flex max-w-6xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Milestone Learning Logo</span>
            <Image
              className="h-[51.5px] w-auto  text-green-800"
              src="/logo.png"
              alt="Milestone Learning Logo"
              width={1000}
              height={1000}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 cursor-pointer inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-[#02342E]" />
          </button>
        </div>
        <div
          style={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#02342E",
          }}
          className="hidden lg:flex lg:gap-x-6 font-lato ]"
        >
          {menuItems.map((item) => (
            <div key={item.label} className="relative">
              <button className="flex cursor-pointer items-center gap-x-1">
                {item.label}
              </button>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-[12px]">
          {buttons.map((button) => (
            <Link
              key={button.label}
              href={button.href || (button.label === "Login" ? "/login" : "#")}
            >
              <button
                className="flex items-center cursor-pointer justify-center gap-2"
                style={{
                  width: button.label === "Login" ? "132px" : "164px",
                  height: "40px",
                  borderRadius: "20px",
                  paddingLeft: button.label === "Login" ? "12px" : "0",
                  paddingRight: button.label === "Login" ? "12px" : "0",
                  background: button.style.includes("bg-[#02342E]")
                    ? "#02342E"
                    : "transparent",
                  border: button.style.includes("border-2")
                    ? "2px solid #02342E"
                    : "none",
                }}
              >
                <Image
                  src={button.icon}
                  alt={button.label}
                  width={16}
                  height={16}
                />
                <span
                  className={`text-sm font-semibold font-lato ${
                    button.label === "Login" ? "text-white" : "text-[#02342E]"
                  }`}
                >
                  {button.label}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden w-full fixed inset-0 z-80 bg-white backdrop-blur-md flex flex-col p-6 min-h-screen">
          {/* Top Bar - static */}
          <div>
            <div className="flex items-center justify-between bg-white mb-6">
              <a href="#" className="-m-1.5">
                <Image
                  className="h-[51.5px] w-auto"
                  src="/logo.png"
                  alt="Milestone Learning Logo"
                  width={1000}
                  height={1000}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-4 text-[#02342E] bg-white text-center font-lato text-base font-medium">
              {menuItems.map((item, index) => (
                <a key={index} href={item.href} className={`block`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 mt-6 bg-white">
            <div className="border-t border-gray-200 bg-white"></div>

            {buttons.map((button) => (
              <Link
                key={button.label}
                href={button.label === "Login" ? "/login" : "#"}
              >
                <button
                  className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-[20px] transition-all duration-300 ${
                    button.label === "Login"
                      ? "bg-[#02342E] text-white"
                      : "border-2 border-[#02342E] text-[#02342E]"
                  } mb-4`}
                  onClick={() => {
                    if (button.label === "Login") {
                      setMobileMenuOpen(false); // Close the menu when clicking on Login
                    }
                  }}
                >
                  <Image
                    src={button.icon}
                    alt={button.label}
                    width={16}
                    height={16}
                  />
                  <span>{button.label}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
