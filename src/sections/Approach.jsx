import approach from '../assets/Appr.png'

const Approach = () => {
    return (
        <div id="approach" className="text-left mx-auto mt-[150px] max-w-[700px] md:w-[650px] w-full max-sm:w-[360px]">
            <div className="mb-4 font-normal leading-relaxed text-[#282B26] lg:w-[700px] lg:text-md text-md font-firaSansRegular leading-normal md:w-[650px]">
                <p>I collaborate with cross-functional teams through continuous discovery to build a deep understanding of the problem space, so we can deliver product outcomes that are viable, valuable, feasible, usable and ethical.</p>
            </div>
            <div className="flex-none lg:w-[450px] lg:h-[300px] max-md:flex max-md:justify-center mx-auto">
                <img src={approach} className='w-full h-full object-cover' alt="A diagram showing the product development process that Charles takes in his work. At the centre is 'HMW' (How Might We) with four key stages arranged in a diamond shape: Discover, Define, Develop, and Deliver. The left side represents the Problem Space, containing Discover and Define stages, while the right side shows the Solution Space with Develop and Deliver stages. The process begins with (OPPORTUNITY) and ends with (OUTCOME). An overarching arc labeled (CONTINUOUS DISCOVERY) joins OUTCOMES to new OPPORTUNITIES. Curved arrows indicate the flow between stages, and the importance of revisiting opportunities and the HMW when new insight is discovered. The diagram emphasises an iterative, collaborative approach." />
            </div>
        </div>
    )
}

export default Approach;