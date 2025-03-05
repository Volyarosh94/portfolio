import portrait from '../assets/CharlesPortrait.png'
import pen from '../assets/PencilPng.png'
import line from '../assets/Outline.png'

const Intro = () => {
    return (
        <div id="intro" className='lg:col-start-4 max-sm:mx-auto lg:col-end-10 mx-[30px] flex-1 max-w-[900px] max-sm:w-[360px]'>
            <div className='max-md:text-[80px] lg:w-[800px] font-crimsonProSemi font-normal lg:text-[110px] text-[#282B26] md:text-[80px] max-sm:text-[40px] max-sm:mb-8 mt-[50px] text-left md:text-[70px] max-sm:text-[50px] leading-none'>
                <span className='relative inline-block'>
                    <span className='relative z-10 text-semibold'>Regenerative</span>
                    <img src={line} alt="" className='absolute top-[84%] color-[#F2E74E]' />
                </span>
                <br />
                <span className='text-semibold'>Product Designer</span>
            </div>

            <div className='lg:flex sm:flex-col lg:w-[800px] sm:items-center lg:flex-row md:w-[650px] lg:gap-[95px] md:gap-[40px] max-sm:justify-start'>
                <div className='relative max-sm:flex max-sm:flex-col max-md:flex max-md:mb-[50px] md:items-start max-md:items-start max-sm:items-start md:flex md:justify-start md:mb-[70px] max-sm:mt-[50px] md:mt-[70px] max-md:mt-[70px]'>
                    <img className="lg:left-[77%] lg:bottom-[80%] absolute lg:w-[80px] lg:h-[80px] md:w-[80px] md:h-[80px] md:left-[25%] md:bottom-[85%] md:w-[70px] md:h-[70px] sm:left-[25%] sm:bottom-[85%] sm:w-[90px] sm:h-[90px] max-sm:w-[80px] max-sm:h-[80px] max-sm:left-[46%] max-sm:bottom-[80%] drop-shadow-lg" src={pen} alt="pencil" />
                    <img className="lg:w-[165px] lg:h-[165px] object-contain mx-2.5 max-sm:ml-[0px] md:w-[205px] md:h-[200px] sm:w-[205px] sm:h-[200px] max-sm:w-[205px] max-sm:h-[200px] object-cover object-center" src={portrait} alt="A circular profile photo of charles thorburn with a yellow border, being drawn by an interactive whiteboard style pencil icon. The photo shows charles wearing a black t-shirt, against a light background." />
                </div>
                <p className='lg:col-start-3 max-sm:text-left lg:text-[22px] lg:leading-[40px] md:leading-[40px] sm:leading-[35px] max-sm:leading-[30px] md:text-[20px] sm:text-[18px] lg:mt-[10px] max-sm:text-full lg:max-w-xl lg:w-[550px] md:w-[650px] text-left text-md font-firaSansRegular leading-relaxed text-[#282B26]'>
                    Hi there, I'm Charles Thorburn. I'm a Berlin based
                    digital product designer and leader helping
                    companies of all sizes meet business objectives for
                    long term user, environmental, and social prosperity.
                </p>
            </div>
        </div>
    )
}

export default Intro;
