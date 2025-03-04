import portrait from '../assets/Portrait.png'
import pen from '../assets/PencilPng.png'

const Intro = () => {
    return (
        <div id="intro" className='flex-1 lg:mx-[275px] mx-auto max-w-[800px] max-sm:w-[360px] mt-[10px]'>
            <div className='max-md:text-[80px] lg:w-[750px] font-crimsonProSemi font-normal lg:text-[100px] text-[#282B26] md:text-[85px] max-sm:text-[40px] max-sm:mb-8 mt-[55px] text-left md:text-[70px] max-sm:text-[50px] leading-none'>
                <span className='relative inline-block'>
                    <span className='absolute inset-0 bg-[#F2E74E] lg:h-[10px] lg:top-[80px] md:h-[10px] md:top-[85px] sm:h-[10px] sm:top-[70px] max-sm:h-[5px] max-sm:top-[42px] left-0'></span>
                    <span className='relative z-10 text-semibold'>Regenerative</span>
                </span>
                <br />
                <span className='text-semibold'>Product Designer</span>
            </div>

            <div className='lg:flex sm:flex-col lg:w-[750px] sm:items-center lg:flex-row lg:w-[700px] md:w-[650px] lg:gap-[70px] md:gap-[40px] max-sm:justify-start'>
                <div className='relative max-sm:flex max-sm:flex-col max-md:flex max-md:mb-[50px] md:items-start max-md:items-start max-sm:items-start md:flex md:justify-start md:mb-[70px] max-sm:mt-[50px] md:mt-[70px] max-md:mt-[70px]'>
                    <img className="lg:left-[75%] lg:bottom-[82%] absolute lg:w-[70px] lg:h-[70px] md:w-[80px] md:h-[80px] md:left-[23%] md:bottom-[85%] md:w-[70px] md:h-[70px] sm:left-[22%] sm:bottom-[85%] sm:w-[90px] sm:h-[90px] max-sm:w-[80px] max-sm:h-[80px] max-sm:left-[40%] max-sm:bottom-[88%] drop-shadow-lg" src={pen} alt="pencil" />
                    <img className="lg:w-[142px] lg:h-[140px]  border-8 border-[#F2E74E] rounded-[50%] max-sm:ml-[0px] md:w-[205px] md:h-[200px] sm:w-[205px] sm:h-[200px] max-sm:w-[205px] max-sm:h-[200px] object-cover object-center" src={portrait} alt="A circular profile photo of charles thorburn with a yellow border, being drawn by an interactive whiteboard style pencil icon. The photo shows charles wearing a black t-shirt, against a light background." />
                </div>
                <p className='max-sm:text-left lg:text-[20px] md:text-[20px] sm:text-[18px] lg:mt-[10px] max-sm:text-full lg:max-w-xl lg:w-[510px] md:w-[650px] text-left text-md font-firaSansRegular leading-relaxed text-[282B26]'>
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
