import square from '../assets/Square.png'

const Outcomes = () => {
    return (
        <div id="outcomes" className="text-left lg:ml-[240px] mt-[200px]">
            <div className="mt-[20px]">
                <p className="lg:w-[700px] text-[#282B26] font-fira-sans lg:text-lg text-lg font-normal leading-relaxed md:w-[650px]">
                    Product design should always deliver value. Here are some key outcomes I contributed towards on my product design journey so far.
                </p>
            </div>
            <div className="mt-[20px] lg:p-8 lg:w-[700px] md:w-[650px] md:p-2 lg:ml-[30px] max-sm:ml-[50px] lg:relative">
                <div className="grid grid-cols-3 max-sm:grid-cols-2 lg:gap-[90px] md:gap-[40px]">
                    <div>
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi md:text-3xl max-sm:text-3xl">3M+</h2>
                        <p className="mt-2 text-gray-600 md:text-sm max-sm:text-[10px] md:w-[24px]">Euros Raised</p>
                    </div>
                    <div>
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi md:text-3xl max-sm:text-3xl">9M+</h2>
                        <p className="mt-2 text-gray-600 md:text-sm max-sm:text-[10px] md:w-[24px]">Users Served</p>
                    </div>
                    <div>
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi md:text-3xl max-sm:text-3xl">4.8</h2>
                        <p className="mt-2 text-gray-600 md:text-sm max-sm:text-[10px] md:w-[35px]">Ø App Store Rating</p>
                    </div>
                    <div className="lg:col-start-2 lg:col-span-3 md:col-start-2 md:col-span-3">
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi md:text-3xl max-sm:text-3xl">-28%</h2>
                        <p className="mt-2 text-gray-600 md:text-sm max-sm:text-[10px] lg:w-[30px] max-sm:w-[15px] md:w-[27px]">Household Energy Consumption</p>
                    </div>
                </div>
                <div>
                    <img
                        className='max-sm:w-[150px] max-sm:h-[100px] max-sm:ml-[70px] max-sm:mt-[20px] lg:w-[200px] lg:h-[130px] md:w-[200px] md:h-[130px] lg:absolute lg:left-[400px] lg:top-[250px] '
                        src={square} alt="An interactive whiteboard style yellow sticky note over-which three cursors pointing to the outcome values: an orange cursor labeled 'Business' at the top, a purple cursor labeled 'People' on the left, and a blue cursor labeled 'Planet' on the right." />
                </div>
            </div >
        </div >
    )
}

export default Outcomes