import portrait from '../assets/Portrait.png'

const Intro = () => {
    return (
        <div>
            <div id="intro" className='flex-1 mx-auto max-w-[700px] max-sm:w-[380px]'>
                <h1 className='tracking-[5px] font-crimsonProSemi lg:text-[85px] md:text-[50px] max-sm:text-[40px] mb-8 mt-[55px] text-left md:text-[70px]'>
                    <span>Regenerative</span>
                    <br />
                    <span>Product Designer</span>
                </h1>

                <div className='lg:flex sm:flex-col sm:items-center lg:flex-row lg:w-[700px] md:w-[650px] lg:gap-[100px] md:gap-[40px] mb-6 max-sm:justify-start'>
                    <div className='max-sm:flex max-sm:flex-col max-sm:items-center'>
                        <img className="lg:w-[120px] max-sm:ml-[0px] lg:h-[120px] md:w-[320px] md:h-[300px] max-sm:w-[250px] max-sm:h-[250px]" src={portrait} alt="A circular profile photo of charles thorburn with a yellow border, being drawn by an interactive whiteboard style pencil icon. The photo shows charles wearing a black t-shirt, against a light background." />
                    </div>
                    <p className='max-sm:text-left lg:text-[16px] max-sm:text-full lg:max-w-xl lg:w-[500px] md:w-[650px] text-left font-firaSansRegular lg:text-lg text-lg font-normal leading-relaxed text-[282B26] max-sm:pt-[60px]'>
                        Hi there, I'm Charles Thorburn. I'm a Berlin based
                        digital product designer and leader helping
                        companies of all sizes meet business objectives for
                        long term user, environmental, and social prosperity.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Intro;
