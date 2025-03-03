import tado from '../assets/tado.png'
import citizenTech from '../assets/CitTech.png'
import javelin from '../assets/Javelin.png'
import keyWord from '../assets/KeyWord.png'
import n26 from '../assets/N26.png'

const Experience = () => {
    return (
        <div id="experience" className="lg:col-start-3 lg:col-end-9 max-sm:mx-auto  text-left mx-[30px] lg:mt-[460px] md:mt-[250px] sm:mt-[200px] max-sm:mt-[150px] max-w-[800px] md:w-[650px] max-sm:w-[355px]">
            <div>
                <p className="text-[#282B26] lg:w-[800px] lg:text-[24px] md:text-[20px] sm:text-[18px] text-md font-firaSansRegular font-normal leading-relaxed md:w-[650px] max-sm:w-[360px]">
                    I work across finance, social media, AI, governance, and IoT sectors at fledgling startups, rapidly growing scale ups, and established corporate organisations.
                </p>
            </div>
            <div className="flex flex-col lg:w-[800px] items-center mt-[40px] justify-center">
                <div className="flex w-full justify-center lg:gap-[90px] md:gap-[60px] max-md:gap-[30px]">
                    <img src={n26} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-14 md:h-[40px] max-md:h-[20px] sm:h-[40px] max-sm:h-[28px] mx-2" />
                    <img src={javelin} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-[40px] max-md:h-[20px] sm:h-[40px] mx-2" />
                    <img src={keyWord} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-[40px] max-md:h-[20px] sm:h-[40px] mx-2" />
                </div>
                <div className="flex justify-center mt-10 lg:gap-[70px] md:gap-[20px] max-md:gap-[40px]">
                    <img src={citizenTech} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-[40px] max-md:h-[20px] max-sm:h-[28px] sm:h-[40px] mx-2" />
                    <img src={tado} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-[40px] max-md:h-[20px] max-sm:h-[24px] sm:h-[40px] mx-2" />
                </div>
            </div>
        </div>
    )
}

export default Experience;
