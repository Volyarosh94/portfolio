import tado from '../assets/tado.png'
import citizenTech from '../assets/CitTech.png'
import javelin from '../assets/Javelin.png'
import keyWord from '../assets/KeyWord.png'
import n26 from '../assets/N26.png'

const Experience = () => {
    return (
        <div id="experience" className="text-left mx-auto mt-[150px] max-w-[700px] w-full md:w-[650px] max-sm:w-[355px]">
            <div className="mt-[20px]">
                <p className="text-[#282B26] lg:w-[700px] font-fira-sans lg:text-md text-md font-firaSansRegular leading-relaxed md:w-[650px] max-sm:w-[360px]">
                    I work across finance, social media, AI, governance, and IoT sectors at fledgling startups, rapidly growing scale ups, and established corporate organisations.
                </p>
            </div>
            <div className="flex flex-col items-center mt-[40px] justify-center">
                <div className="flex w-full justify-center lg:gap-[80px] md:gap-[60px]">
                    <img src={n26} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                    <img src={javelin} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                    <img src={keyWord} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                </div>
                <div className="flex justify-center mt-10 lg:gap-[80px] md:gap-[20px]">
                    <img src={citizenTech} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                    <img src={tado} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                </div>
            </div>
        </div>
    )
}

export default Experience;
