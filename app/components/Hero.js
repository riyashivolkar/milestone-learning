import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const features = [
  "Personalized, efficient learning",
  "Deep collaboration with parents & students",
  "Personalized One-on-One Learning",
];

const Hero = () => {
  return (
    <section className="relative w-full pt-10 md:pt-0 h-auto lg:h-[588px] overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* LEFT CONTENT SECTION */}
        <div
          className="w-full lg:w-2/5 mt-10 z-10 h-auto flex flex-col justify-center px-6 lg:pl-[100px] py-10 gap-[36px]"
          style={{
            background:
              "linear-gradient(200.77deg, #87949D -30.02%, #FFFFFF -20.01%, #FFFFFF 19.83%, #F6FDFF 78.15%)",
          }}
        >
          <div
            className="w-full lg:w-[600px] h-full flex flex-col justify-center gap-[14px] p-4 rounded-[8px]"
            style={{
              background:
                "linear-gradient(200.77deg, #87949D -30.02%, #FFFFFF -20.01%, #FFFFFF 19.83%, #F6FDFF 78.15%)",
            }}
          >
            <h1 className="font-poppins text-[28px] sm:text-[32px] lg:text-[40px] leading-tight font-semibold text-[#02342E]">
              Empowering every <br /> Student with <br /> personalized learning
              <br />
              for lasting success
            </h1>

            <div className="text-[#02342E] pt-6 flex flex-col justify-center gap-[14px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[8px] text-sm font-medium font-lato"
                >
                  <div className="w-[18px] h-[18px] bg-[#02342E] rounded-full border-2 border-white flex items-center justify-center">
                    <FaCheck className="text-white text-[10px]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}

              <button className="mt-6 w-[168px] h-[40px] rounded-full bg-[#02342E] text-white text-[14px] leading-[20px] tracking-[0.1px] text-center font-openSans font-normal">
                Get Started Today
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full lg:w-3/5 h-[300px] sm:h-[400px] lg:h-full">
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(40.56deg, #F6FDFF 30%, rgba(255, 255, 255, 0) 70%)",
            }}
          />
          <Image
            src="/bg/hero-bg.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
