import Image from "next/image";
import React from "react";
import ViewAllButton from "./components";

const Success = () => {
  return (
    <section className="text-gray-600 body-font pb-12 px-[20px] md:px-[40px] lg:px-[100px] overflow-hidden bg-[linear-gradient(180deg,_rgba(200,200,200,0.3)_31%,_rgba(244,244,244,0.3)_100%)]">
      <div className="container py-14 mx-auto">
        <div className="flex gap-y-3 flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="font-poppins font-medium text-[32px] leading-[36px] tracking-[0%] text-center text-[#02342E] px-4 py-2 rounded-md max-w-4xl">
            Success we've achieved together
          </h1>
          <p className="font-lato font-normal text-[16px] leading-[32px] tracking-[0%] text-center text-[#1D1D1D] px-4 py-2 rounded-md max-w-3xl">
            Together, we celebrate every milestone—turning challenges into
            achievements and goals into reality.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pr-0 mr-[-20px] md:mr-[-100px]">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex-shrink-0 w-[320px] bg-white rounded-[20px] pt-6 px-5 pb-6 flex flex-col gap-5 shadow-md"
            >
              <div className="w-[45px] h-[39px] flex items-center justify-center rounded">
                <img
                  src="/icons/quote.png"
                  alt="quote icon"
                  className="w-[42px] h-[42px] object-contain"
                  width={1000}
                  height={1000}
                />
              </div>

              <p className="text-left text-[#1D1D1D] text-[20px] leading-[140%] font-lato font-normal tracking-[0%] rounded-[10px]">
                My son went from struggling in science to earning his best
                grades ever. His tutor made the material click in a way his
                classes never did.
              </p>

              <div className="flex items-center gap-[20px] pt-4">
                <div className="w-[52px] h-[52px] bg-white rounded-full overflow-hidden">
                  <Image
                    src="/icons/review.png"
                    alt="Kate Wills"
                    className="w-full h-full rounded-full object-contain"
                    width={1000}
                    height={1000}
                  />
                </div>

                <div className="flex flex-col text-start justify-start">
                  <div className="text-[#02342E] text-[16px] font-lato font-semibold leading-[140%]">
                    Kate Wills
                  </div>
                  <div className="text-[#545454] text-[12px] font-lato font-normal leading-[140%]">
                    Parent | 8th Standard
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

export default Success;
