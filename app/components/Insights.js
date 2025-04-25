import React from "react";
import { cardDataInsights } from "../utils/data";
import ViewAllButton from "./components";

const Insights = () => {
  return (
    <section className="text-gray-600 body-font lg:px-[100px]  px-[20px] md:px-[40px] overflow-hidden bg-[#F8F8F8]">
      <div className="container py-14 mx-auto">
        <div className="flex gap-y-3 flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="font-poppins font-medium text-[24px] leading-[30px] sm:text-[28px] sm:leading-[34px] md:text-[32px] md:leading-[36px] tracking-tight text-center px-4 py-2 rounded-md max-w-4xl text-[#02342E]">
            Insights & inspiration from the world of one-on-one learning
          </h1>

          <p className="font-openSans font-normal text-[14px] leading-[20px] sm:text-[15px] sm:leading-[21px] md:text-[16px] md:leading-[22px] tracking-normal text-center px-4 py-2 rounded-md max-w-5xl text-[#1D1D1D]">
            Explore expert perspectives, success stories, and timely topics in
            education—designed for parents, students, and families navigating
            academic excellence in today’s competitive world.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto  pb-4 pr-0 mr-[-20px] md:mr-[-100px]">
          {cardDataInsights.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[448.98px] bg-white rounded-[12px] shadow-[0px_2px_17px_0px_#0000001F] flex flex-col gap-[10px]"
            >
              <div className="h-[50%] w-full bg-gray-300 rounded-t-[12px] overflow-hidden">
                <img
                  src={card.image}
                  alt="Card visual"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[50%] px-4 flex flex-col gap-[10px]">
                <p className="font-lato font-bold text-[16px] leading-[150%] text-[#02342E] rounded w-full h-[72px]">
                  {card.title}
                </p>

                <p className="font-lato font-normal text-[12px] leading-[180%] text-[#545454] rounded w-full h-[66px]">
                  {card.description}
                </p>

                <div className="w-full border-b border-[#E8E8E8]" />

                <div className="flex justify-between items-center w-full h-[24px]">
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-xs text-gray-500">
                      {card.category}
                    </span>
                    <div className="w-[1px] h-[11px] bg-[#DFDFDF] "></div>
                    <span className="text-xs text-gray-500">
                      {card.readTime}
                    </span>
                  </div>

                  <div className="w-[24px] h-[24px] flex items-center justify-center border border-[#DFDFDF] rounded-[4px] p-2">
                    <img
                      src="/icons/above-arrow.png"
                      alt="arrow"
                      className="w-[8px] h-[8px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <ViewAllButton />
        </div>
      </div>
    </section>
  );
};

export default Insights;
