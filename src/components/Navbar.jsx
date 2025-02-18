import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;

      const sections = ["intro", "approach", "experience", "work", "outcomes", "contact"];
      const scrollPosition = window.scrollY;

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
      {isVisible && (
        <div className={`fixed top-0 left-0 p-1 z-20 lg:hidden flex items-center w-full bg-gray-100 py-4 transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-black text-2xl font-crimsonProSemi">Charles</h3>
          <button
            onClick={toggleMenu}
            className={`text-black text-2xl ml-auto ${isOpen ? "invisible" : "visible"}`}
          >
            ☰
          </button>
        </div>
      )}
      {isOpen && (
        <div className="fixed inset-0 bg-[#F5F5F5] z-30 flex flex-col items-start justify-start lg:hidden w-full h-full overflow-hidden">
          <h3 className="text-black text-2xl font-crimsonProSemi ml-4 mt-4">Charles</h3>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black text-2xl"
          >
            ✖
          </button>
          <ul className="mt-16 space-y-4 text-center text-left ml-6">
            {["Intro", "Approach", "Experience", "Work", "Outcomes", "Contact"].map((section) => (
              <li
                key={section}
                className={`text-left font-firaSansRegular cursor-pointer hover:text-black ${activeSection.toLowerCase() === section.toLowerCase() ? "text-black font-bold" : ""}`}
                onClick={() => scrollToSection(section.toLowerCase())}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
      <nav className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 navbar-text text-white lg:p-6 lg:text-left lg:ml-[20px] md:ml-[25px] md:mt-[10px] hidden lg:block">
        <div className="group inline-flex items-center space-x-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-bold">Charles</span>
          <span className="font-bold overflow-hidden transition-all duration-200 w-0 group-hover:w-auto">
            Thorburn
          </span>
        </div>


        <ul className="mt-[100px] space-y-4">
          {
            ["Intro", "Approach", "Experience", "Work", "Outcomes", "Contact"].map((section) => (
              <li
                key={section}
                className={`cursor-pointer hover:text-black ${activeSection.toLowerCase() === section.toLowerCase() ? "text-black font-bold" : ""}`}
                onClick={() => scrollToSection(section.toLowerCase())}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))
          }
        </ul>
        <div className="mt-8 hidden lg:flex justify-start">
          <a
            href="https://www.linkedin.com/in/charles-thorburn-871b8a193/"
            className="font-bold underline cursor-pointer z-10 text-xl lg:mt-[150px]"
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






















