import React from 'react';
import n26 from '../../assets/N26(2).png';
import tado2 from '../../assets/tado2.png';
import keyward2 from '../../assets/KeyWord.png';
import javelin2 from '../../assets/Javelin2.png';


const Card = ({ title, text, technologies, logo }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="space-y-4">
                <h2 className="text-[34px] font-bold text-black text-left mb-2 font-crimsonProSemi">{title}</h2>
                <p className="text-[12px] text-gray-700 text-left pb-2 font-normal leading-relaxed font-firaSansRegular">{text}</p>
                <div className="flex flex-wrap gap-2 pb-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="px-4 py-1 text-sm bg-customGray text-white rounded-[5px]">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-auto">
                {
                    logo === n26 ? (
                        <img src={logo} className="lg:w-[60px] lg:h-[85px] md:w-[80px] md:h-[100px] max-sm:w-[60px] max-sm:h-[70px] lg:pb-6 md:pb-4" alt="Company logo" />
                    ) : logo === tado2 ? (
                        <img src={logo} className="lg:w-[60px] lg:h-[85px] md:w-[80px] md:h-[100px] max-sm:w-[60px] max-sm:h-[70px] lg:pb-6 md:pb-4" alt="Company logo" />
                    ) : logo === keyward2 ? (
                        <img src={logo} className="w-[220px] h-[50px] lg:mb-8 md:mb-4" alt="Company logo" />
                    ) : logo === javelin2 ? (
                        <img src={logo} className="w-[220px] h-[50px] lg:mb-8 md:mb-4" alt="Company logo" />
                    ) : (
                        <img src={logo} className="w-[160px] h-[50px] lg:mb-8 md:mb-4" alt="Company logo" />
                    )
                }
            </div>
        </div>
    );
};

export default Card;