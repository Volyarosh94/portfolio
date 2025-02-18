import square from '../assets/Square.png'

const Outcomes = () => {
    return (
        <div id="outcomes" className="text-left mx-auto mt-[150px] max-w-[700px] md:w-[650px] max-sm:w-[355px]">
            <div className="mt-[20px]">
                <p className="lg:w-[700px] text-[#282B26] font-fira-sans lg:text-lg text-lg font-firaSansRegular leading-relaxed md:w-[650px]">
                    Product design should always deliver value. Here are some key outcomes I contributed towards on my product design journey so far.
                </p>
            </div>
            <div className="mt-[20px] lg:py-8 lg:w-[600px] md:w-[550px] md:py-2 lg:relative">
                <div className="grid grid-cols-3 max-sm:grid-cols-2 lg:gap-[90px] md:gap-[40px]">
                    <div className="flex flex-col items-center">
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi md:text-3xl max-sm:text-3xl">3M+</h2>
                        <p className="mt-1 text-gray-600 md:text-sm max-sm:text-[10px]">Euros Raised</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi md:text-3xl max-sm:text-3xl">9M+</h2>
                        <p className="mt-1 text-gray-600 md:text-sm max-sm:text-[10px]">Users Served</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi md:text-3xl max-sm:text-3xl">4.8</h2>
                        <p className="mt-1 text-gray-600 md:text-sm max-sm:text-[10px]">Ø App Store Rating</p>
                    </div>
                    <div className="lg:col-span-3 md:col-span-3 flex flex-col items-center">
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi md:text-3xl max-sm:text-3xl">-28%</h2>
                        <p className="mt-1 text-gray-600 md:text-sm max-sm:text-[10px]">Household Energy Consumption</p>
                    </div>
                </div>
                <div>
                    <img
                        className='max-sm:w-[150px] max-sm:h-[100px] max-sm:ml-[70px] max-sm:mt-[20px] lg:w-[200px] lg:h-[130px] md:w-[200px] md:h-[130px] lg:absolute lg:left-[450px] lg:top-[200px] '
                        src={square} alt="An interactive whiteboard style yellow sticky note over-which three cursors pointing to the outcome values: an orange cursor labeled 'Business' at the top, a purple cursor labeled 'People' on the left, and a blue cursor labeled 'Planet' on the right." />
                </div>
            </div >
        </div >
    )
}

export default Outcomes