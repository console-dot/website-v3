import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import config from "../../api/config";
import { IoIosArrowDown, IoMdGlobe } from "react-icons/io";
import { FaArrowDown, FaUsers } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { CgUserlane } from "react-icons/cg";
import { getcasestudy } from "../../api";
import { setcasestudyData } from "../../redux";
import { useDispatch } from "react-redux";
import { removeHyphen } from "../../utils";
import RainbowLoader from "../Loader/RainbowLoader";
import WaveLoader from "../Loader/WaveLoader";

export const CaseStudyPage = () => {
  const location = useLocation();
  const { card } = location.state || {};
  const [project, setProject] = useState(card);
  const BASE_URL = config.BASE_URL;
  const projectName = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const sections = [
    "highlights",
    "client",
    "product",
    "goals",
    "challenge",
    "solution",
    "results",
  ];
  const sectionRefs = useRef(
    sections.reduce((acc, value) => {
      acc[value] = React.createRef();
      return acc;
    }, {})
  );

  const [activeSection, setActiveSection] = useState("highlights");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef(null);

  // Incase user visit casseStudies directly
  useEffect(() => {
    if (card == undefined) {
      getcasestudy()
        .then((res) => {
          dispatch(setcasestudyData(res?.data));
          const response = res?.data?.find(
            (item) => item?.title.trim() == removeHyphen(projectName)
          );
          setProject(response);
        })
        .catch((err) => console.log(err));
    } else {
      setProject(card);
    }
  }, [card]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4;
      sections.forEach((section) => {
        const ref = sectionRefs.current[section];
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleButtonClick = () => {
    const scrollPosition = window.innerHeight * 0.8;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const handleNavClick = (section) => {
    const ref = sectionRefs.current[section];
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (!project) {
    // return <RainbowLoader />;
    return <WaveLoader />;
  }

  return (
    <div>
      {/* Header Start */}
      <div
        ref={headerRef}
        className="w-full md:h-[450px] h-60 mb-20 flex justify-center object-fill items-start relative"
        style={{
          backgroundImage: `url(${BASE_URL}/file/${project.projectImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: "95%",
        }}
      >
        <div className="p-8 bg-cust-blue-100 bg-opacity-70 w-full h-full flex flex-col justify-center items-start">
          <h1 className="text-white  text-3xl  md:text-4xl font-bold leading-none tracking-normal mx-10">
            {project.title.toUpperCase()}
          </h1>
          {project.projectLink && (
            <button
              className="border border-white rounded-full mx-10 mt-4 py-2 px-5 text-white hover:bg-white hover:text-custom-purple"
              onClick={() => window.open(project.projectLink, "_blank")}
            >
              View Demo
            </button>
          )}
          <div className="flex flex-col  gap-2 mt-[20%] absolute md:mx-[70%] mx-56 ">
            {project?.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-custom-lightBlue text-white rounded-full md:px-8 md:py-1 md:text-sm px-4 py-1 text-xs "
              >
                {`#${tag}`}
              </span>
            ))}
          </div>
        </div>
        <button
          className="absolute bottom-4 left-20 flex items-center gap-2 text-custom-white hover:text-custom-purple"
          onClick={handleButtonClick}
        >
          <FaArrowDown className=" font-bold text-sm" />
          <div className=" font-bold text-sm"> Discover More</div>
        </button>
      </div>
      {/* Header End */}
      <div className="bg-inherit w-full flex flex-col md:flex-row">
        {/* Sticky Sidebar */}
        {window.innerWidth > 768 && (
          <aside className="hidden  py-4 md:block">
            <div className="sticky top-12 flex flex-col gap-2 py-14  rounded-xl ml-28 w-40">
              {sections.map((section) => (
                <button
                  key={section}
                  className={`px-3 py-1 font-semibold text-left w-full rounded-md ${
                    activeSection === section
                      ? "text-custom-purple font-extrabold"
                      : "text-webDescrip opacity-65 font-bold"
                  }`}
                  onClick={() => handleNavClick(section)}
                >
                  <div className="flex flex-row gap-3 text-lg ">
                    <label>•</label>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </div>
                </button>
              ))}
            </div>
          </aside>
        )}
        <main className="md:w-2/3 lg:w-3/4 w-full  min-h-screen">
          <div className="p-2 md:p-4">
            <div className="md:ml-28 ml-0 md:p-0 p-4 md:w-[65%] text-justify w-full">
              {/* highlights */}
              <section ref={sectionRefs.current.highlights} className="mb-20">
                <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2 ">
                  Highlights
                </h2>
                {project?.highlights?.map((highlight, index) => (
                  <div key={index} className="mt-2">
                    <label className="text-custom-purple text-xl">•</label>{" "}
                    <label className="text-webHeading font-semibold">
                      {highlight.heading}
                    </label>
                    {" : "}
                    <label className="text-webDescrip">
                      {highlight.description}
                    </label>
                  </div>
                ))}
                <hr className="mt-20 " />
              </section>
            </div>
            <div className="md:ml-28 ml-0 md:p-0 p-4 text-justify flex ">
              {/* client */}
              <section ref={sectionRefs.current.client} className="mb-20">
                <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2 ">
                  Client
                </h2>
                <div className="flex xl:flex-row lg:flex-row 2xl:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col gap-4">
                  <div className="lg:w-[100%] xl:w-[100%] md:w-[100%] sm:w-full xs:w-full xss:w-full mt-2">
                    <p className="text-webDescrip ">
                      {project?.client[0]?.description
                        ?.split(" \\n")
                        ?.map((item) => {
                          return (
                            <>
                              {item}
                              <br />
                            </>
                          );
                        })}
                    </p>
                  </div>
                  <div className="lg:w-[40%] xl:w-[40%] md:w-[40%] sm:w-full xs:w-full xss:w-full">
                    <div className="border border-custom-grey rounded-lg">
                      <div className="p-4">
                        <div className="flex flex-row mb-2 mt-2">
                          <div className="w-[60%] flex flex-row gap-2">
                            <IoMdGlobe className="text-custom-purple text-xl" />
                            <span className="text-sm">Country</span>
                          </div>
                          <div className="flex w-[40%]">
                            <span className="text-sm ">
                              {project?.client[0]?.country}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div className="flex flex-row mb-2 mt-2">
                          <div className="w-[60%] flex flex-row gap-2">
                            <MdBusinessCenter className="text-custom-purple text-xl" />
                            <span className="text-sm">Industry</span>
                          </div>
                          <div className="flex w-[40%]">
                            <span className="text-sm ">
                              {project?.client[0]?.industry}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div className="flex flex-row mb-2 mt-2">
                          <div className="w-[60%] flex flex-row gap-2">
                            <FaUsers className="text-custom-purple text-xl" />
                            <span className="text-sm">Team</span>
                          </div>
                          <div className="flex w-[40%]">
                            <span className="text-sm ">
                              {project?.client[0]?.teamSize}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div className="flex flex-row mb-2 mt-2">
                          <div className="w-[60%] flex flex-row gap-2">
                            <CgUserlane className="text-custom-purple text-xl" />
                            <span className="text-sm">Name</span>
                          </div>
                          <div className="flex w-[40%]">
                            <span className="text-sm ">
                              {project?.client[0]?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-20  w-[70%]" />
              </section>
            </div>
            <div className="md:ml-28 ml-0 md:p-0 p-4 md:w-[65%] text-justify w-full">
              {/* product */}
              <section ref={sectionRefs.current.product} className="mb-20">
                <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2 ">
                  Product
                </h2>
                <div className="mt-2">
                  <p className="text-webDescrip ">
                    {project?.product?.split("\\n").map((item, index) => (
                      <React.Fragment key={index}>
                        {item}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <hr className="mt-20 " />
              </section>
              {/* goals */}
              <section
                ref={sectionRefs.current.goals}
                className="mb-20 text-justify"
              >
                <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2 ">
                  Goals and Objectives
                </h2>
                {project?.goals?.map((goal, index) => (
                  <div key={index}>
                    <div className="mt-2">
                      <label className="text-custom-purple text-xl">•</label>{" "}
                      <label className="text-webHeading font-semibold">
                        {goal.heading}
                      </label>
                    </div>
                    <div className="mt-1">
                      <label className="text-webDescrip">
                        {goal.description}
                      </label>
                    </div>
                  </div>
                ))}
                <hr className="mt-20 " />
              </section>
              {/* chanllenges */}
              <section ref={sectionRefs.current.challenge} className="mb-20">
                <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2 ">
                  Project Challenge
                </h2>
                {project?.challenges?.map((challenge, index) => (
                  <div className="mt-4 text-justify" key={index}>
                    <div className="flex flex-row  items-center gap-4">
                      <div className="w-[10%]">
                        <div className="w-8 h-8 bg-custom-purple opacity-80 flex justify-center items-center rounded-lg">
                          <span className="text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-webHeading font-semibold">
                          {challenge.heading}
                          {" : "}
                        </span>{" "}
                        <span className="text-webDescrip">
                          {challenge.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <hr className="mt-20 " />
              </section>
            </div>

            <div className="md:ml-28 ml-0 xl:p-0 lg:p-0 md:p-0 p-4 text-justify">
              {/* solution */}
              <section ref={sectionRefs.current.solution} className="mb-20">
                <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2 ">
                  Solution
                </h2>
                <div className="flex xl:flex-row lg:flex-row 2xl:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col gap-4">
                  <div className="lg:w-[100%] xl:w-[100%] md:w-[100%] sm:w-full xs:w-full xss:w-full text-justify">
                    <p className="text-webDescrip ">
                      {project?.solution?.split("\\n").map((item, index) => (
                        <React.Fragment key={index}>
                          {item}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                  <div className="lg:w-[40%] xl:w-[40%] md:w-[40%] sm:w-full xs:w-full xss:w-full">
                    <div className="">
                      <div>
                        <h2 className="text-xl font-semibold text-custom-purple">
                          Tech Stack
                        </h2>
                        {project.techStack &&
                          project.techStack
                            .reduce((unique, tech) => {
                              if (!unique.includes(tech.type)) {
                                unique.push(tech.type);
                              }
                              return unique;
                            }, [])
                            .map((type, index) => (
                              <div key={index} className="p-4">
                                <div className="mb-3">
                                  <span className="text-base font-semibold text-custom-blue ">
                                    {type}
                                  </span>
                                </div>
                                <div className="flex flex-wrap flex-row justify-start items-center gap-2 ">
                                  {project.techStack
                                    .filter((t) => t.type === type)
                                    .map((filteredTech, idx) => (
                                      <div
                                        key={idx}
                                        className="flex flex-col justify-center "
                                      >
                                        <div className="mx-auto bg-custom-lightBlue w-10 h-10 rounded-md flex justify-center items-center">
                                          <img
                                            src={`${BASE_URL}/file/${filteredTech.image}`}
                                            alt={filteredTech.name}
                                            className="w-6 h-6 "
                                            onError={(e) => {
                                              e.target.onerror = null;
                                              e.target.src =
                                                "your-404-image-url";
                                            }}
                                          />
                                        </div>
                                        <div className="text-xs mx-auto text-webDescrip ">
                                          {filteredTech.name}
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-20  w-[70%]" />
              </section>
            </div>
            <div className="md:ml-28 ml-0 md:p-0 p-4 md:w-[65%] w-full">
              <section ref={sectionRefs.current.results} className="mb-20">
                <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2 ">
                  Our Results
                </h2>
                <p className="text-webDescrip ">
                  {project?.results?.description
                    ?.split("\\n")
                    .map((item, index) => (
                      <React.Fragment key={index}>
                        {item}
                        <br />
                      </React.Fragment>
                    ))}
                </p>
                <div className="mt-4 text-justify">
                  {project?.results?.subHeadings?.map((subHeading, index) => (
                    <div className="mt-4 text-justify" key={index}>
                      <div className="flex flex-row gap-4 items-center">
                        <div className="w-[10%]">
                          <div className="w-8 h-8 bg-custom-purple opacity-80 flex justify-center items-center rounded-lg">
                            <span className="text-white">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-webHeading font-semibold">
                            {subHeading.heading}
                          </span>{" "}
                          <span className="text-webDescrip">
                            {subHeading.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="mt-20 " />
              </section>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {project?.images &&
                  project?.images.map((image, index) => (
                    <img
                      key={index}
                      src={`${BASE_URL}/file/${image}`}
                      alt={`Project image ${index}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
