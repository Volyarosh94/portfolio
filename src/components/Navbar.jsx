import React, { useState, useEffect } from "react";
import close from "../assets/svg/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 129;
    const sectionTop = section.offsetTop - offset;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
    setTimeout(() => {
      setActiveSection(id);
      setIsOpen(false);
    }, 600);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;

      const sections = ["intro", "approach", "experience", "work", "outcomes", "contact"];
      const scrollPosition = window.scrollY + 131;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
          }
        }
      });

      const lastSection = sections[sections.length - 1];
      const lastSectionElement = document.getElementById(lastSection);
      if (lastSectionElement) {
        const lastSectionTop = lastSectionElement.offsetTop;
        const lastSectionHeight = lastSectionElement.clientHeight;

        if (scrollPosition + window.innerHeight >= lastSectionTop + lastSectionHeight) {
          setActiveSection(lastSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`fixed top-0 left-0 w-full bg-[#F0F0EF] py-1 z-20 lg:hidden py-4 transition-transform duration-200 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between mx-auto max-w-[700px] max-sm:max-w-[395px] sm:max-w-[650px] md:w-[650px] md:pl-8 w-full max-sm:pl-[16px] pr-3 ">
          <h3
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-crimsonProSemi text-black text-2xl"
          >
            Charles
          </h3>
          <button
            onClick={toggleMenu}
            className={`text-black text-2xl`}
          >
            ☰
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 bg-[#F5F5F5] z-30 flex flex-col items-start justify-start lg:hidden w-full h-full overflow-hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between mx-auto max-w-[700px] max-sm:max-w-[395px] sm:max-w-[650px] md:w-[650px] w-full max-sm:pl-[16px] pr-3">
          <h3 className="text-black text-2xl font-crimsonProSemi mt-4">Charles</h3>
          <button
            onClick={toggleMenu}
            className="text-black text-2xl mt-4"
          >
            <img src={close} alt="close" className="w-8 h-8" />
          </button>
        </div>
        <ul className="mt-8 space-y-2 text-left mx-auto max-w-[700px] max-sm:max-w-[395px] sm:max-w-[650px] md:w-[650px] w-full px-[30px]">
          {["Intro", "Approach", "Experience", "Work", "Outcomes", "Contact"].map((section) => (
            <li
              key={section}
              className={`font-firaSansRegular font-light cursor-pointer hover:text-black relative ${activeSection.toLowerCase() === section.toLowerCase() ? "text-black font-firaSansRegular font-medium" : "text-[#6D6D69]"}`}
              onClick={() => scrollToSection(section.toLowerCase())}
            >
              {activeSection.toLowerCase() === section.toLowerCase() && (
                <span className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 w-[6px] h-[6px] bg-black rounded-[32%]"></span>
              )}
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <nav className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 navbar-text text-white lg:p-6 lg:text-left lg:ml-[20px] md:ml-[25px] md:mt-[10px] hidden lg:block">
        <div className="group inline-flex items-center space-x-2 cursor-pointer relative"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h3 className="font-crimsonProSemi text-black text-2xl ml-3">Charles</h3>
          <h3 className="font-crimsonProSemi text-black text-2xl ml-3 opacity-0 group-hover:opacity-100 duration-300">
            Thorburn
          </h3>
        </div>

        <ul className="mt-[60px]">
          {
            ["Intro", "Approach", "Experience", "Work", "Outcomes", "Contact"].map((section) => (
              <li key={section} className="font-firaSansRegular font-light w-fit p-2 relative cursor-pointer hover:text-black focus:border-blue-500">
                {activeSection.toLowerCase() === section.toLowerCase() && (
                  <span className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-[7px] h-[7px] bg-black rounded-[32%]"></span>
                )}
                <span
                  tabIndex="0"
                  className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 p-1 rounded-sm ${activeSection.toLowerCase() === section.toLowerCase() ? "text-black font-firaSansRegular font-medium" : ""}`}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      scrollToSection(section.toLowerCase());
                    }
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </li>
            ))
          }
        </ul>
        <div className="absolute bottom-8 w-full p-2">
          <a
            href="https://www.linkedin.com/in/charles-thorburn-871b8a193/"
            className="font-medium font-firaSansRegular text-black underline cursor-pointer z-10 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded-sm"
            target="_blank"
            alt="LinkedIn deep Link
                to personal LI page.
                Locked bottom left corner
                of the desktop screen"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;






















