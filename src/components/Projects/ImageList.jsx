import Image from './Image';
import balance from '../../assets/Balance.webp';
import grafics from '../../assets/grafics.webp';
import samsung from '../../assets/Samsung.webp';
import mySpots from '../../assets/MySpots.webp';
import videoPlayer from '../../assets/VideoPlayer.webp';
import desktop from '../../assets/Desktop.png';
import woman from '../../assets/WomanHand.webp';
import manual from '../../assets/Manual.webp';

const ImageInfo = [
    {
        id: 1,
        layout: "One",
        image1: woman,
    },
    {
        id: 2,
        layout: "columnTwo",
        image1: desktop,
        image2: videoPlayer,
    },
    {
        id: 3,
        layout: "column",
        image1: grafics,
    },
    {
        id: 4,
        layout: "phone",
        image1: samsung,
        image2: mySpots,
    },
    {
        id: 5,
        image1: balance,
        image2: manual,
    },
]

// eslint-disable-next-line react/prop-types
const ImageList = ({ index }) => {
    const image = ImageInfo[index - 1];
    return (
        <div>
            <Image {...image} />
        </div>
    );
};

export default ImageList;
