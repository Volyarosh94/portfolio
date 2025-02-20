import CardList from '../components/Projects/CardList';
import ImageList from '../components/Projects/ImageList';

const Work = () => {
    return (
        <div id="work" className="text-left mx-auto mt-[150px] max-w-[800px] lg:w-[800px] w-full md:w-[650px] max-sm:w-[355px]">
            <div className="space-y-10">
                {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="bg-[#F9F9F9] rounded-xl px-8 pt-8 border-[1.5px] border-gray-200">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="w-full md:w-[50%] max-sm:order-2 max-md:order-2">
                                <ImageList index={index} />
                            </div>
                            <div className="w-full md:w-[50%] max-sm:order-1 max-md:order-1">
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