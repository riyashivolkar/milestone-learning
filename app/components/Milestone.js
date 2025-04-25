import React from "react";
import { milestoneData } from "../utils/data";

const Milestone = () => {
  return (
    <section
      className="relative flex px-2 flex-col pb-20 h-auto justify-center items-center body-font overflow-hidden text-white"
      style={{
        width: "100%",
        backgroundColor: "#02342E",
      }}
    >
      <div
        className="absolute inset-0  mix-blend-hard-light z-0"
        style={{
          backgroundImage: "url('/bg/leaves.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="relative flex-col z-10 px-4 md:px-2">
        <h1 className="w-full max-w-[406px] mt-[40px] sm:mt-[50px] md:mt-[55px] mx-auto font-poppins font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[30px] sm:leading-[34px] md:leading-[36px] text-center text-white px-4 py-2 rounded">
          Why Milestone Learning?
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mt-10 max-w-[1120px] mx-auto">
          {milestoneData.map((data, index) => (
            <div
              key={index}
              className="w-[350px] h-[332px] p-[29px] flex flex-col justify-center items-center bg-white rounded-[24px]"
            >
              <img
                src={data.imgSrc}
                alt="Icon"
                className="w-[70px] h-[70px] mb-4"
              />
              <h1 className="w-[262px] h-[64px] font-poppins font-normal text-[24px] leading-[32px] text-center text-[#02342E] py-2 rounded">
                {data.title}
              </h1>
              <p className="w-[262px] h-[52px] font-open-sans font-normal text-[14px] leading-[26px] text-center text-[#1D1D1D] py-2 rounded mt-4">
                {data.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center gap-6 md:gap-8 lg:gap-4 mt-6 py-10">
          <button className="w-[160px] sm:w-[180px] md:w-[201px] h-[40px] px-[16px] sm:px-[20px] md:px-[24px] py-[8px] sm:py-[10px] bg-white text-[#02342E] text-[13px] sm:text-[14px] font-medium rounded-full text-center">
            Get Started Today
          </button>
          <button className="w-[160px] sm:w-[180px] md:w-[201px] h-[40px] px-[24px] sm:px-[32px] md:px-[40px] py-[8px] sm:py-[10px] border border-[#EFEEEC] text-[#EFEEEC] text-[13px] sm:text-[14px] font-medium rounded-full text-center">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
