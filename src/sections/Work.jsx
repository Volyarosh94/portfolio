import CardList from '../components/Projects/CardList';
import ImageList from '../components/Projects/ImageList';

const Work = () => {
    return (
        <div id="work" className="text-left lg:ml-[240px] mt-[200px] lg:w-[700px] md:w-[650px]">
            <div className="space-y-10">
                {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="bg-[#F9F9F9] rounded-2xl p-8 shadow-lg">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="w-full md:w-[50%] max-sm:order-2">
                                <ImageList index={index} />
                            </div>
                            <div className="w-full md:w-[50%] max-sm:order-1">
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