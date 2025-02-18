import PhoneIcon from '../assets/svg/smartphone.svg'
import EmailIcon from '../assets/svg/mail.svg'
import LocationIcon from '../assets/svg/location.svg'
import Smile from '../assets/Smiles.png'

const Contact = () => {
    return (
        <div id="contact" className="text-left mx-auto mt-[150px] max-w-[700px] md:w-[650px] max-sm:w-[355px]">
            <p className='font-fira-sans lg:text-lg text-lg font-firaSansRegular leading-relaxed text-[282B26]'>I would love to hear from you, especially if you are interested in working
                together to make beautiful, valuable, and impactful products. </p>
            <div className="flex flex-col lg:gap-4 mt-[50px] text-lg">
                <div className="flex items-center mb-[20px]">
                    <img src={PhoneIcon} alt="Phone" className="mr-2 w-[18px] h-[18px]" />
                    <span className='max-sm:text-[16px]'>+49 (0) 1525 1936697</span>
                </div>
                <div className="flex items-center mb-[20px]">
                    <img src={EmailIcon} alt="Email" className="mr-2 w-[18px] h-[18px]" />
                    <span className='max-sm:text-[16px]'>charlesthorburn@protonmail.com</span>
                </div>
                <div className="flex items-center">
                    <img src={LocationIcon} alt="Location" className="mr-2 w-[18px] h-[18px]" />
                    <span className='max-sm:text-[16px]'>Friedrichshain, Berlin, Germany</span>
                </div>
            </div>
            <div>
                <img src={Smile} alt="‘A close-up image of a round, white sticker with a friendly, minimalist yellow smiley face at its center. The phrase (LET'S TALK) is printed in a continuous loop around the edge of the circle, emphasising an open invitation to communicate with the above contact details.’"
                    className="lg:w-[200px] lg:h-[200px] mt-[50px] max-sm:w-[100px] max-sm:h-[100px] md:w-[100px] md:h-[100px]" />
            </div>
        </div>
    )
}

export default Contact;
