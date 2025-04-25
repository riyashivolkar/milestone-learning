import React from "react";
import { tutorLogos } from "../utils/data";

const Trust = () => {
  return (
    <section className="text-gray-600 body-font pb-12 px-[20px] md:px-[40px] lg:px-[100px] overflow-hidden bg-white">
      <div className="container py-14 mx-auto">
        <div className="flex gap-y-3 flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="font-poppins font-medium text-[32px] leading-[36px] tracking-[0%] text-center text-[#02342E] px-4 py-2 rounded-md max-w-4xl">
            Tutors you can trust from
          </h1>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pr-0 mr-[-20px] md:mr-[-100px]">
          {tutorLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[130px] h-[136px] p-4 bg-white rounded-[22px] border border-gray-50 shadow-md shadow-[#02342E1F] flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Tutor Logo ${index + 1}`}
                className="w-[56px] h-[56px] object-contain text-gray-400"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
