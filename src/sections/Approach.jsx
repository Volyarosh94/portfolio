import discovery from '../assets/DiscoveryImg.png'

const Approach = () => {
    return (
        <div id="approach" className="lg:col-start-4 lg:col-end-10 max-sm:mx-auto  text-left mx-[30px] lg:mt-[180px] md:mt-[200px] sm:mt-[170px] max-sm:mt-[150px] max-w-[800px] md:w-[650px] max-sm:w-[360px]">
            <div className="mb-4 font-normal text-[#282B26] lg:leading-[40px] md:leading-[40px] sm:leading-[35px] max-sm:leading-[30px] lg:w-[800px] lg:text-[22px] md:text-[20px] sm:text-[18px] max-sm:text-[18px] font-normal font-firaSansRegular leading-normal md:w-[650px]">
                <p>I collaborate with cross-functional teams through continuous discovery to build a deep understanding of the problem space, so we can deliver product outcomes that are viable, valuable, feasible, usable and ethical.</p>
            </div>
            <div className="lg:col-start-3 lg:col-end-7 lg:text-left lg:flex lg:justify-start lg:w-[600px] lg:h-[480px] sm:w-full sm:h-full max-sm:w-full max-sm:h-full mt-[50px] lg:mt-[75px] md:w-[300px] md:h-[250px] sm:w-[250px] sm:h-[200px] max-sm:w-[200px] max-sm:h-[260px] max-sm:w-[320px]">
                <img src={discovery} className='w-full h-full' alt="A diagram showing the product development process that Charles takes in his work. At the centre is 'HMW' (How Might We) with four key stages arranged in a diamond shape: Discover, Define, Develop, and Deliver. The left side represents the Problem Space, containing Discover and Define stages, while the right side shows the Solution Space with Develop and Deliver stages. The process begins with (OPPORTUNITY) and ends with (OUTCOME). An overarching arc labeled (CONTINUOUS DISCOVERY) joins OUTCOMES to new OPPORTUNITIES. Curved arrows indicate the flow between stages, and the importance of revisiting opportunities and the HMW when new insight is discovered. The diagram emphasises an iterative, collaborative approach." />
            </div>
        </div>
    )
}

export default Approach;