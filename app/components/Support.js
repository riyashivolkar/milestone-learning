import React from "react";
import { supportData } from "../utils/data";

const Support = () => {
  return (
    <section className="text-gray-600 body-font px-[20px] md:px-[40px] lg:px-[100px] overflow-hidden">
      <div className="container py-24 mx-auto">
        <div className="flex gap-y-3 flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="font-poppins font-medium text-[32px] leading-[36px] tracking-[0%] text-center text-[#02342E] px-4 py-2 rounded-md max-w-4xl">
            Support for every stage of learning
          </h1>
          <p className="font-lato font-normal text-[16px] leading-[32px] tracking-[0%] text-center text-[#1D1D1D] px-4 py-2 rounded-md max-w-3xl">
            From foundational skills to advanced academics, we’re with you every
            step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {supportData.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[400px]  h-[140px] gap-[12px] rounded-[12px] border border-[#095D40] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] flex items-center "
            >
              <div className="w-[80px] h-full   bg-[#EAF4ED] rounded-l-[12px] flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[52px] h-[52px] rounded-[16px] object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-start pt-[12px] pb-[16px] gap-[8px] w-[289px] h-[108px]">
                <div className="text-[#02342E] text-[16px] font-lato font-semibold leading-[140%] px-2">
                  {item.title}
                </div>
                <div className="text-[#545454]  text-[14px] font-lato font-normal leading-[140%] px-2 py-1">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
