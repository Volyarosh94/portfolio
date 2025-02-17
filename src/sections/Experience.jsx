import tado from '../assets/tado.png'
import citizenTech from '../assets/CitTech.png'
import javelin from '../assets/Javelin.png'
import keyWord from '../assets/KeyWord.png'
import n26 from '../assets/N26.png'

const Experience = () => {
    return (
        <div id="experience" className="text-left lg:ml-[240px] mt-[200px] max-w-[700px] md:w-[650px] w-full">
            <div className="mt-[20px]">
                <p className="text-[#282B26] lg:w-[700px] font-fira-sans lg:text-lg text-lg font-normal leading-relaxed md:w-[650px] max-sm:">
                    I work across finance, social media, AI, governance, and IoT sectors at fledgling startups, rapidly growing scale ups, and established corporate organisations.
                </p>
            </div>
            <div className="flex md:ml-[100px] flex-col items-center mt-[40px]">
                <div className="flex w-full lg:gap-[80px] md:gap-[60px]">
                    <img src={tado} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                    <img src={citizenTech} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                    <img src={keyWord} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                </div>
                <div className="flex lg:justify-center lg:ml-[100px] md:mr-[200px] max-sm:mr-[25px] mt-10 lg:gap-[80px] md:gap-[20px]">
                    <img src={javelin} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                    <img src={n26} alt="five company logos arranged in two rows: Top row shows N26 (stylized with a line above), Javelin, and Key Ward. Bottom row displays CitizenTech (with a globe icon) and tado° (styled with a degree symbol). All logos are presented in black against a light background." className="lg:h-10 md:h-6 max-md:h-6 mx-2" />
                </div>
            </div>
        </div>
    )
}

export default Experience;
