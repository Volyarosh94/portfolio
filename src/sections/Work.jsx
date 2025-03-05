import CardList from '../components/Projects/CardList';
import ImageList from '../components/Projects/ImageList';

const Work = () => {
    return (
        <div id="work" className="lg:col-start-3 lg:col-end-11 text-left mx-auto lg:mt-[350px] md:mt-[250px] sm:mt-[200px] max-sm:mt-[150px] max-w-[1000px] lg:w-[1000px] w-full md:w-[670px] max-sm:w-[355px]">
            <div className="space-y-10 max-md:mx-6">
                {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="bg-[#F9F9F9] rounded-xl px-8 pt-8 border-[1.5px] border-gray-200">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="w-full lg:col-start-2 lg:col-end-5 md:w-[40%] max-sm:order-2 max-md:order-2">
                                <ImageList index={index} />
                            </div>
                            <div className="w-full lg:col-start-5 lg:col-end-10 md:w-[60%] max-sm:order-1 max-md:order-1">
                                <CardList index={index} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;