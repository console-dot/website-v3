import React, { useState, useEffect, useRef } from "react";

export const PrivacyPolicyPage = () => {
  const sections = [
    "introduction",
    "informationWeCollect",
    "howWeUseInformation",
    "sharingOfInformation",
    "security",
    "yourRights",
    "thirdPartyLinks",
    "changesToPolicy",
    "contactUs",
  ];

  const sectionRefs = useRef(
    sections.reduce((acc, value) => {
      acc[value] = React.createRef();
      return acc;
    }, {})
  );

  const [activeSection, setActiveSection] = useState(sections[0]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef(null);

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
        if (ref && ref.current) {
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

  const handleNavClick = (section) => {
    const ref = sectionRefs.current[section];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="bg-inherit w-full flex flex-col md:flex-row">
        {/* Sticky Sidebar */}
        {window.innerWidth > 768 && (
          <aside className="hidden py-4 md:block">
            <div className="sticky top-12 flex flex-col gap-2 py-14 rounded-xl ml-28 ">
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
                  <div className="flex flex-row gap-3 text-lg">
                    <label>•</label>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </div>
                </button>
              ))}
            </div>
          </aside>
        )}
        <main className="md:w-1/3 lg:w-3/4 w-full min-h-screen">
          <div className="p-8 md:p-4">
            <section ref={headerRef} className="mb-20">
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                Welcome to ConsoleDot!
              </h2>
              <p className="text-webDescrip">
                This Privacy Policy explains how we handle your information when
                you use our services. By using ConsoleDot, you agree to the
                terms outlined in this policy.
              </p>
              <hr className="mt-20" />
            </section>
            <section ref={sectionRefs.current.introduction} className="mb-20">
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                Introduction
              </h2>
              <p className="text-webDescrip">
                Welcome to ConsoleDot! This Privacy Policy explains how we
                handle your information when you use our services. By using
                ConsoleDot, you agree to the terms outlined in this policy.
              </p>
              <hr className="mt-20" />
            </section>
            <section
              ref={sectionRefs.current.informationWeCollect}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                Information We Collect
              </h2>
              <h3 className="text-2xl font-semibold text-custom-purple mb-2">
                Personal Information
              </h3>
              <p className="text-webDescrip">
                We may collect details such as:
                
                  <li>Names</li>
                  <li>Contact Information (email, phone)</li>
                  <li>Company Information</li>
                  <li>Billing Details</li>
                  <li>Any other information you share with us</li>
                
              </p>
              <h3 className="text-2xl font-semibold text-custom-purple mb-2">
                Non-Personal Information
              </h3>
              <p className="text-webDescrip">
                We also collect non-personal information including:
                
                  <li>Browser Type</li>
                  <li>Operating System</li>
                  <li>IP Address</li>
                  <li>How you use our services</li>
                
              </p>
              <hr className="mt-20" />
            </section>
            <section
              ref={sectionRefs.current.howWeUseInformation}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                How We Use Information
              </h2>
              <p className="text-webDescrip">
                We use your information to:
                
                  <li>Improve and provide our services</li>
                  <li>Customize your experience</li>
                  <li>Communicate with you</li>
                  <li>Conduct analytics and research</li>
                
              </p>
              <hr className="mt-20" />
            </section>
            <section
              ref={sectionRefs.current.sharingOfInformation}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                Sharing of Information
              </h2>
              <p className="text-webDescrip">
                We may share your information with:
                
                  <li>Trusted service providers</li>
                  <li>Business partners</li>
                  <li>Authorities when required by law</li>
                
              </p>
              <hr className="mt-20" />
            </section>
            <section ref={sectionRefs.current.security} className="mb-20">
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                Security
              </h2>
              <p className="text-webDescrip">
                We implement standard security measures to protect your data.
                However, no internet transmission is 100% secure, so we cannot
                guarantee absolute security.
              </p>
              <hr className="mt-20" />
            </section>
            <section ref={sectionRefs.current.yourRights} className="mb-20">
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                Your Rights
              </h2>
              <p className="text-webDescrip">
                You have the right to:
                
                  <li>Access and correct your information</li>
                  <li>Withdraw consent</li>
                  <li>Request deletion of your data</li>
                
              </p>
              <hr className="mt-20" />
            </section>
            <section
              ref={sectionRefs.current.thirdPartyLinks}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                Third-Party Links
              </h2>
              <p className="text-webDescrip">
                Our website may contain links to other sites. We are not
                responsible for their content or privacy practices.
              </p>
              <hr className="mt-20" />
            </section>
            <section
              ref={sectionRefs.current.changesToPolicy}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                Changes to this Privacy Policy
              </h2>
              <p className="text-webDescrip">
                We may update this policy periodically. The latest version will
                always be available on our website, along with the effective
                date.
              </p>
              <hr className="mt-20" />
            </section>
            <section ref={sectionRefs.current.contactUs} className="mb-20">
              <h2 className="text-3xl font-bold text-custom-purple md:mb-5 mb-2">
                Contact Us
              </h2>
              <p className="text-webDescrip">
                If you have any questions or concerns about your privacy, please
                reach out to us at:
                <br />
                <span className="text-webDescrip font-semibold"> Email{" "}:</span>{" "}
                <a href="mailto:info@consoledot.com" className="text-custom-blue1">info@consoledot.com</a>
              </p>
              <hr className="mt-20" />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};
