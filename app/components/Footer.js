import React from "react";
import Image from "next/image";
import { contactInfo, socialIcons } from "../utils/data";

const Footer = () => {
  return (
    <footer className="text-gray-600  body-font px-[20px] md:px-[40px] lg:px-[100px] overflow-hidden bg-[#02342E] py-8">
      <div className="flex pt-8 flex-col lg:flex-row gap-10 lg:gap-0">
        <div className="flex  flex-col  md:justify-between w-full lg:w-[50%] items-center lg:items-start">
          <div
            className="flex flex-col justify-start md:items-start items-center"
            style={{
              width: "300.77px",
              gap: "13px",
            }}
          >
            <Image
              src="/logo-white.png"
              alt="Milestone Learning Logo"
              width={1000}
              height={1000}
              className="object-contain"
            />
            <div
              className="flex items-center"
              style={{
                width: "100px",
                height: "40px",
                gap: "22px",
              }}
            >
              {socialIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  height={40}
                  style={{ width: "20px", height: "20px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] flex flex-col md:flex-row gap-10">
          <div className="flex flex-col w-full md:w-[50%] gap-[30px] items-center md:items-start text-center md:text-left">
            <button className="w-[160px] sm:w-[180px] md:w-[201px] h-[40px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] sm:py-[10px] bg-white text-[#02342E] text-[9px] sm:text-[12px] font-medium rounded-full text-center">
              BOOK A CONSULTATION
            </button>
            <p
              className="w-[218px] text-[12px] font-medium leading-[100%] text-[#EFEEEC]"
              style={{ fontFamily: "Lato" }}
            >
              Book a Learning Session
            </p>
            <p
              className="w-[218px] text-[12px]  font-medium leading-[100%] text-[#EFEEEC]"
              style={{ fontFamily: "Lato" }}
            >
              FAQ
            </p>
          </div>

          <div className="flex flex-col w-full md:w-[50%] gap-[30px] items-center text-center md:items-start md:text-left">
            <p className="text-[20px] font-poppins font-semibold leading-[100%] text-white">
              Contact Us
            </p>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-[12px]  w-full h-auto md:w-[242px] md:h-[22px] justify-center md:justify-start"
              >
                <div className="md:w-[22px] md:h-[22px] flex flex-row items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={15}
                    height={15}
                  />
                </div>
                <p className="text-[12px] md:w-[208px] font-lato text-start items-start justify-start font-normal leading-[100%] text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-20 flex  flex-col md:flex-row  items-center text-center md:text-left gap-4 md:gap-0">
        <p className="font-lato font-normal text-[12px] leading-[100%] w-full md:w-[50%] text-[#EFEEEC]">
          © 2025 Milestone Learning
        </p>
        <div className="flex md:items-center lg:items-start  justify-center md:justify-start  w-full md:w-[50%] gap-[48px]">
          <p className="font-ttnorms font-normal text-[12px] leading-[100%] underline text-[#EFEEEC]">
            Privacy Policy
          </p>
          <p className="font-ttnorms font-normal text-[12px] leading-[100%] underline text-[#EFEEEC]">
            Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
