import React from 'react';
import n26 from '../../assets/N26(2).png';
import tado2 from '../../assets/tado2.png';

const Card = ({ title, text, technologies, logo }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black text-left mb-2 font-crimsonProSemi">{title}</h2>
                <p className="text-md text-gray-700 text-left pb-2 lg:text-lg text-lg font-normal leading-relaxed font-firaSansRegular">{text}</p>
                <div className="flex flex-wrap gap-2 pb-4">
                    {technologies.map((tech, index) => (
                        <span key={index} className="px-4 py-1 text-sm bg-customGray text-white rounded-[5px]">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-auto">
                {
                    logo === n26 || logo === tado2 ? (
                        <img src={logo} className="w-[80px] h-[80px]" alt="Company logo" />
                    ) : (
                        <img src={logo} className="w-[180px] h-[50px]" alt="Company logo" />
                    )
                }
            </div>
        </div>
    );
};

export default Card;