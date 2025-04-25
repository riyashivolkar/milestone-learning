import React from "react";

const BecomeTutor = () => {
  return (
    <section className="text-gray-600 body-font  px-[20px] md:px-[40px] lg:px-[100px] overflow-hidden bg-[linear-gradient(180deg,_rgba(200,200,200,0.3)_31%,_rgba(244,244,244,0.3)_100%)]">
      <div className="container  pt-8 mx-auto">
        <div className="flex gap-y-3 flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="font-poppins md:pt-6 font-medium text-[24px] md:text-[32px] leading-[30px] md:leading-[36px] tracking-tight text-[#02342E] mb-4">
            Interested in becoming a tutor with Milestone Learning?{" "}
          </h1>
          <p className="font-lato font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] tracking-normal text-[#1D1D1D]">
            Make a lasting impact—join a team where your expertise empowers
            students and your growth is supported every step of the way.
          </p>
          <div className=" pt-5">
            <a
              href="#schedule-consultation"
              className="w-[180px] h-[40px] bg-[#02342E] text-white rounded-[100px] text-center flex justify-center items-center text-[14px] leading-[24px]"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeTutor;
