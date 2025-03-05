import React from 'react';
import n26 from '../../assets/N26(2).png';
import tado2 from '../../assets/tado2.png';
import keyward2 from '../../assets/KeyWord.png';
import javelin2 from '../../assets/Javelin2.png';


const Card = ({ title, text, technologies, logo }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="space-y-4">
                <h2 className="lg:text-[40px] md:text-[30px] sm:text-[28px] max-sm:text-[24px] font-semibold text-[#282B26] text-left lg:mb-5 mb-2 font-crimsonProSemi leading-none">{title}</h2>
                <p className="text-[16px] lg:text-[19px] text-[#282B26] text-left pb-2 lg:mb-5 font-normal leading-relaxed font-firaSansRegular">{text}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-2 lg:text-[14px] text-xs font-firaSansRegular bg-customGray text-white rounded-[5px]">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-auto lg:mt-5">
                {
                    logo === n26 ? (
                        <img src={logo} className="lg:w-[60px] lg:h-[85px] md:w-[80px] md:h-[100px] max-md:w-[80px] max-md:h-[80px] max-sm:w-[70px] max-sm:h-[70px] lg:pb-6 md:pb-4" alt="Company logo" />
                    ) : logo === tado2 ? (
                        <img src={logo} className="lg:w-[60px] lg:h-[85px] md:w-[80px] md:h-[100px] max-md:w-[80px] max-md:h-[80px] max-sm:w-[70px] max-sm:h-[70px] lg:pb-6 md:pb-4" alt="Company logo" />
                    ) : logo === keyward2 ? (
                        <img src={logo} className="w-[180px] h-[40px] lg:mb-8 md:mb-4" alt="Company logo" />
                    ) : logo === javelin2 ? (
                        <img src={logo} className="w-[180px] h-[40px] lg:mb-8 md:mb-4" alt="Company logo" />
                    ) : (
                        <img src={logo} className="w-[160px] h-[50px] lg:mb-8 md:mb-4" alt="Company logo" />
                    )
                }
            </div>
        </div>
    );
};

export default Card;