import square from '../assets/Square.png'

const Outcomes = () => {
    return (
        <div id="outcomes" className="lg:col-start-3 lg:col-end-9 max-sm:mx-auto  text-left mx-[30px] lg:mt-[460px] md:mt-[250px] sm:mt-[200px] max-sm:mt-[150px] max-w-[800px]] md:w-[650px] max-sm:w-[355px]">
            <div>
                <p className="lg:w-[800px] text-[#282B26] lg:text-[22px] md:text-[20px] sm:text-[18px] font-firaSansRegular font-normal leading-relaxed md:w-[650px]">
                    Product has to deliver value. Here are some key outcomes I have contributed towards throughout my time in product design and leadership roles.
                </p>
            </div>
            <div className="mt-[20px] lg:py-8 lg:w-[800px] md:w-[550px] md:py-2 max-sm:relative lg:relative">
                <div className="grid grid-cols-3 max-sm:grid-cols-2 lg:gap-[60px] md:gap-[40px] justify-items-center">
                    <div className="flex flex-col items-center">
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi max-md:text-4xl md:text-3xl max-sm:text-4xl">3M+</h2>
                        <p className="mt-1 text-gray-600 md:text-sm max-sm:text-[10px] font-firaSansRegular">Euros Raised</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi max-md:text-4xl md:text-3xl max-sm:text-4xl">9M+</h2>
                        <p className="mt-1 text-gray-600 md:text-sm max-sm:text-[10px] font-firaSansRegular">Users Served</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi max-md:text-4xl md:text-3xl max-sm:text-4xl">4.8</h2>
                        <p className="mt-1 text-gray-600 md:text-sm max-sm:text-[10px] font-firaSansRegular">Ø App Store Rating</p>
                    </div>
                    <div className="lg:col-span-3 md:col-span-3 max-sm:col-span-1 max-md:col-span-3 max-md:mt-[20px] max-sm:mt-[0px] flex flex-col items-center">
                        <h2 className="lg:text-5xl font-bold font-crimsonProSemi max-md:text-4xl md:text-3xl max-sm:text-4xl">-28%</h2>
                        <p className="mt-1 text-gray-600 md:text-sm max-sm:text-[10px] font-firaSansRegular">Household Energy Consumption</p>
                    </div>
                </div>
                <div>
                    <img
                        className='max-sm:w-[150px] max-sm:h-[100px] max-md:w-[220px] max-sm:absolute max-md:h-[140px] max-sm:left-[40%] max-sm:top-[110%] lg:w-[200px] lg:h-[130px] md:w-[200px] md:h-[130px] lg:absolute lg:left-[70%] lg:top-[90%]'
                        src={square} alt="An interactive whiteboard style yellow sticky note over-which three cursors pointing to the outcome values: an orange cursor labeled 'Business' at the top, a purple cursor labeled 'People' on the left, and a blue cursor labeled 'Planet' on the right." />
                </div>
            </div >
        </div >
    )
}

export default Outcomes