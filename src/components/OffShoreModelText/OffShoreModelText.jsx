import React from "react";

export const OffShoreModelText1 = ({topDescription}) => {
  return (
    <div className="w-full  flex justify-center items-center  xl:pl-[5%] xl:pr-[5%] lg:pl-[7%] lg:pr-[7%] md:pl-18 md:pr-18 sm:pl-8 sm:pr-8 xs:pl-8 xs:pr-8">
      <div>
        <p className="text-aboutustext text-justify font-lato justify-center md:text-[16px] text-[12px] lg:mt-12 md:mt-12 2xl:mt-12 2lg:mt-12 sm:mt-4 xs:mt-4 xss:mt-4">
         {topDescription}
        </p>
      </div>
    </div>
  );
};

export const OffShoreModelText = ({bottomDescription}) => {
  return (
    <div className="w-full  flex justify-center items-center xl:pl-[5%] xl:pr-[5%] lg:pl-[7%] lg:pr-[7%] md:pl-18 md:pr-18 sm:pl-8 sm:pr-8 xs:pl-8 xs:pr-8">
      <div>
        <p className="text-aboutustext text-justify font-lato justify-center md:text-[16px] text-[12px]  mb-8 ">
          {bottomDescription}
        </p>
      </div>
    </div>
  );
};
