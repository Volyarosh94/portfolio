import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="fixed top-0 right-0 p-4 z-20 lg:hidden">
        <button
          onClick={toggleMenu}
          className={`text-black text-2xl ${isOpen ? "invisible" : "visible"}`}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-[#F5F5F5] z-30 flex flex-col items-center justify-start lg:hidden w-full h-full overflow-hidden">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black text-2xl"
          >
            ✖
          </button>
          <ul className="mt-16 space-y-4 text-center">
            {
              ["Intro", "Approach", "Experience", "Work", "Outcomes", "Contact"].map((section) => (
                <li
                  key={section}
                  className={`cursor-pointer hover:text-black ${activeSection === section.toLowerCase() ? "text-black font-bold" : ""}`}
                  onClick={() => scrollToSection(section.toLowerCase())}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))
            }
          </ul>
        </div>
      )}
      <nav className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 navbar-text text-white lg:p-6 lg:text-left lg:ml-[80px] md:ml-[50px] md:mt-[10px] hidden lg:block">
        <div class="group inline-flex items-center space-x-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span class="font-bold">Charles</span>
          <span class="font-bold overflow-hidden transition-all duration-200 w-0 group-hover:w-auto">
            Thorburn
          </span>
        </div>


        <ul className="mt-[100px] space-y-4">
          {
            ["Intro", "Approach", "Experience", "Work", "Outcomes", "Contact"].map((section) => (
              <li
                key={section}
                className={`cursor-pointer hover:text-black ${activeSection === section.toLowerCase() ? "text-black font-bold" : ""}`}
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






















