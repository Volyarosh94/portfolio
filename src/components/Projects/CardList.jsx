import Card from './Card';
import tado2 from '../../assets/tado2.png';
import keyward2 from '../../assets/KeyWord.png';
import parry from '../../assets/Parry.png';
import javelin2 from '../../assets/Javelin2.png';
import n26 from '../../assets/N26(2).png';

const CardInfo = [
    {
        id: 1,
        title: (
            <>
                HUMANIZED CUSTOMER
                SERVICE
            </>
        ),
        text: (
            <>
                Designing a clear UI for customers to know when they are speaking to a helper bot, or to a human specialist.
            </>
        ),
        technologies: ["UX", "UX Research", "Service Design"],
        logo: n26,
        logoAlt: "Image of N26 Logo"
    },
    {
        id: 2,
        title: (
            <>
                A PLATFORM FOR VIDEO
                CURATORS
            </>
        ),
        text: (
            <>
                Creating an entire UX, UI & business model for video content communities.
            </>
        ),
        technologies: ["Founding Design", "Business Design", "Humane Technology"],
        logo: javelin2,
        logoAlt: "Image of Javelin Logo"
    },
    {
        id: 3,
        title: (
            <>
                FOCUSING AI ON DATA AUTOMATION
            </>
        ),
        text: "Leading Key Ward’s product team to a focused value proposition.",
        technologies: ["Business Strategy", "UX Product Leadership", "User Research"],
        logo: keyward2,
        logoAlt: "Image of KeyWard Logo"
    },
    {
        id: 4,
        title: (
            <>
                PLURAL VOTING FOR
                CITY CYCLING
            </>
        ),
        text: (
            <>
                Building platform for the Berlin cycling community to prioritize road infrastructure repairs and improvements.
            </>
        ),
        technologies: ["Founding Design", "Design Systems", "UX Leadership"],
        logo: parry,
        logoAlt: "Image of Parry Logo"
    },
    {
        id: 5,
        title: (
            <>
                SMART HEAT PUMP
                OPTIMIZATION
            </>
        ),
        text: (
            <>
                Designing the fundamental controls for tado’s Heat Pump app.
            </>
        ),
        technologies: ["Design Systems", "UX", "User Research"],
        logo: tado2,
        logoAlt: "Image of tado Logo"
    },

];

const CardList = ({ index }) => {
    const card = CardInfo[index - 1];
    return (
        <div>
            <Card {...card} />
        </div>
    );
};

export default CardList;