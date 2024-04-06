import React from "react";

export const BottomContent = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-8 w-full">
        <div>
          <h1 className="text-[16px] leading-5 text-center text-webHeading font-bold mb-4">
          Conclusion
          </h1>
          <p className="text-[16px] leading-5 text-justify text-webDescrip">
          Summarize the overall success of the software development project and its significance.
          </p>
        </div>
        <div>
          <h1 className="text-[16px] leading-5 font-bold text-center text-webHeading mb-4">
          Lessons Learned
          </h1>
          
          <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
          Share insights gained from the project that can be applied to future endeavors.
          </p>
         
        </div>
        <div>
          <h1 className="text-[16px] leading-5 text-center mb-4 font-bold text-webHeading">
          Client Testimonials
          </h1>
          <p className="text-[16px] leading-5 text-justify text-webDescrip">
          Include quotes or testimonials from the client expressing satisfaction with the delivered solution
          </p>
        </div>
        <div>
          <h1 className="text-[16px] leading-5 text-center mb-4 font-bold text-webHeading">
          Results and Benefits
          </h1>
          <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
          A. Achievements
          </h1>
          <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
          Highlight the positive outcomes and achievements of the software development project.
          </p>
          <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
          B. Impact
          </h1>
          <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
          Explain how the software solution positively impacted the client's business or operations.
          </p>
          
        </div>
        <div>
          <h1 className="text-[16px] leading-5 text-center font-bold mb-4 text-webHeading">
          Challenges Faced
          </h1>
          <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
          Discuss any challenges or obstacles encountered during the project and how they were overcome.
          </p>
        </div>
      </div>
    </div>
  );
};
