import Image from './Image';
import balance from '../../assets/Balance (2).png';
import grafics from '../../assets/grafics.png';
import samsung from '../../assets/samsung.png';
import mySpots from '../../assets/My Spots (1).png';
import videoPlayer from '../../assets/videoPlayer.png';
import desktop from '../../assets/Desktop.png';
import woman from '../../assets/HandPng.png';
import manual from '../../assets/Manual.png';

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

const ImageList = ({ index }) => {
    const image = ImageInfo[index - 1];
    return (
        <div>
            <Image {...image} />
        </div>
    );
};

export default ImageList;
