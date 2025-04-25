import Image from "next/image";
import React from "react";
import { cardData } from "../utils/data";

const AcademicPerformance = () => {
  return (
    <section className="text-gray-600 py-8 md:py-[50px] pb-[100px] flex flex-col lg:flex-row bg-white body-font px-[36px] md:px-[40px] lg:px-[100px] overflow-hidden gap-10">
      <div className="w-full lg:w-[30%] flex flex-col">
        <h1 className="font-poppins font-semibold text-[28px] lg:text-[32px] leading-[40px] text-[#02342E]">
          How we increase academic performance
        </h1>

        <p className="font-lato pt-4 font-normal md:text-[18px] lg:text-[14px] leading-[28px] text-[#1D1D1D] mt-4 mb-6">
          The most successful learning is <strong>one-on-one</strong>. <br />
          <br />
          At <strong>Milestone Learning</strong>, we recognize that every
          student learns differently—success comes from tailored support,
          personalized strategies, and a learning approach that works for them.
        </p>

        <a
          href="#learn-more"
          className="flex items-center gap-2 pt-2 w-[124px] h-[40px] rounded-full text-[#02342E] font-medium text-[14px] leading-[24px] text-center"
        >
          Learn More
          <Image
            src="/icons/arrow.png"
            alt="Arrow Icon"
            width={18}
            height={18}
          />
        </a>
      </div>

      <div className="w-full lg:w-[70%] grid grid-cols-1  md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full h-[403px] rounded-[24px] bg-white shadow-[0px_0px_14px_0px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
          >
            <div className="w-full h-[80%]">
              <Image
                src={card.imgSrc}
                alt={`Card Image ${index + 1}`}
                className="object-cover w-full h-full rounded-t-[24px]"
                width={501}
                height={334}
              />
            </div>

            <div className="w-full h-[20%] bg-white flex justify-center items-center">
              <a
                href="#schedule-consultation"
                className="w-[180px] h-[40px] bg-[#02342E] text-white rounded-[100px] text-center flex justify-center items-center text-[11px] leading-[24px]"
              >
                {card.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicPerformance;
