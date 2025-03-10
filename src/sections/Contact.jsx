import React, { useEffect, useRef } from 'react';
import PhoneIcon from '../assets/svg/smartphone.svg';
import EmailIcon from '../assets/svg/mail.svg';
import LocationIcon from '../assets/svg/location.svg';
import Smile from '../assets/svg/Smile.svg';

const Contact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        const updateMarginBottom = () => {
            if (window.innerWidth >= 1024) {
                const windowHeight = window.innerHeight;
                const contactHeight = contactRef.current?.offsetHeight || 0;
                const maxMarginBottom = 300;
                const minMarginBottom = 10;

                const availableHeight = windowHeight - contactHeight;
                let marginBottom = Math.min(maxMarginBottom, availableHeight * 0.7);
                marginBottom = Math.max(minMarginBottom, marginBottom);

                if (contactRef.current) {
                    contactRef.current.style.marginBottom = `${marginBottom}px`;
                }
            }
        };

        updateMarginBottom();
        window.addEventListener('resize', updateMarginBottom);

        return () => {
            window.removeEventListener('resize', updateMarginBottom);
        };
    }, []);

    return (
        <div
            ref={contactRef}
            id="contact"
            className="lg:col-start-4 lg:col-end-10 max-sm:mx-auto text-left mx-[30px] lg:mt-[400px] md:mb-4 sm:mb-4 max-sm:mb-4 lg:top-0  md:mt-[250px] sm:mt-[200px] max-sm:mt-[260px] max-w-[800px] md:w-[650px] max-sm:w-[355px]"
        >
            <p className="lg:text-[22px] lg:w-[800px] md:text-[20px] sm:text-[18px] max-sm:text-[18px] lg:leading-[40px] md:leading-[40px] sm:leading-[35px] max-sm:leading-[30px] font-firaSansRegular font-normal leading-relaxed text-[#282B26]">
                I would love to hear from you, especially if you are interested in working
                together to make beautiful, valuable, and impactful products.
            </p>
            <div className="flex flex-col lg:gap-4 max-sm:gap-2 md:gap-3 mt-[50px] text-lg">
                <div className="flex items-center">
                    <img src={PhoneIcon} alt="Phone" className="mr-2 w-[20px] h-[20px]" />
                    <span className="max-sm:text-[16px] lg:text-[22px] md:text-[20px] sm:text-[18px] max-sm:text-[18px] font-firaSansRegular text-[#282B26]">
                        +49 (0) 1525 1936697
                    </span>
                </div>
                <div className="flex items-center">
                    <img src={EmailIcon} alt="Email" className="mr-2 w-[20px] h-[20px]" />
                    <span className="max-sm:text-[16px] lg:text-[22px] md:text-[20px] sm:text-[18px] max-sm:text-[18px] font-firaSansRegular text-[#282B26]">
                        charlesthorburn@protonmail.com
                    </span>
                </div>
                <div className="flex items-center">
                    <img src={LocationIcon} alt="Location" className="mr-2 w-[20px] h-[20px]" />
                    <span className="max-sm:text-[16px] lg:text-[22px] md:text-[20px] sm:text-[18px] max-sm:text-[18px] font-firaSansRegular text-[#282B26]">
                        Friedrichshain, Berlin, Germany
                    </span>
                </div>
            </div>
            <div>
                <img
                    src={Smile}
                    alt="‘A close-up image of a round, white sticker with a friendly, minimalist yellow smiley face at its center. The phrase (LET'S TALK) is printed in a continuous loop around the edge of the circle, emphasising an open invitation to communicate with the above contact details.’"
                    className="lg:w-[260px] lg:h-[260px] max-md:w-[170px] max-md:h-[170px] mt-[50px] max-sm:w-[150px] max-sm:h-[150px] md:w-[200px] md:h-[200px] border-[1.5px] border-gray-200 rounded-full"
                />
            </div>
        </div>
    );
};

export default Contact;