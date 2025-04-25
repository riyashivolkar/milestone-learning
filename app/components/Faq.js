"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ViewAllButton from "./components";
import { faqData } from "../utils/data";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="text-gray-600 lg:px-[100px] body-font flex flex-col md:flex-row px-8 md:px-[40px] py-10 overflow-hidden bg-white gap-6 md:gap-0">
      <div className="w-full md:w-[40%] lg:w-[35%] h-auto flex flex-col justify-start pr-3">
        <div className="gap-y-[24px] lg:h-[140px] lg:w-[350px]">
          <h1 className="font-poppins font-medium text-[24px] md:text-[32px] leading-[30px] md:leading-[36px] tracking-tight text-[#02342E] mb-4">
            Frequently asked questions
          </h1>
          <p className="font-lato font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] tracking-normal text-[#1D1D1D]">
            Find answers to common questions and get the information you need!
          </p>
        </div>
      </div>

      <div className="w-full md:w-[60%] lg:w-[65%] h-auto flex flex-col gap-5 md:gap-[24px] md:border-l md:border-[#9D968D] md:px-[14px] pt-[18px] pb-[18px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="md:px-[14px] py-[18px] gap-[18px] border-radius-[12px] flex flex-col"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-poppins font-semibold lg:px-[14px] text-[15px] md:text-[16px] leading-[120%] text-[#02342E]">
                {item.question}
              </h2>
              <button
                onClick={() => toggleAnswer(index)}
                className="flex items-center gap-2"
              >
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ width: "16px", height: "16px", color: "#02342E" }}
                />
              </button>
            </div>
            {expandedIndex === index && (
              <div className="rounded-md lg:px-[14px] py-[12px]">
                <p className="font-lato font-normal text-[13px] leading-[160%] text-[#545454]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-center md:justify-start items-center mt-6 px-[14px]">
          <ViewAllButton />
        </div>
      </div>
    </section>
  );
};

export default Faq;
