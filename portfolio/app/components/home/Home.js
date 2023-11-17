import './Home.css'
import { COLORS } from '../../constants/colors';
import Image from 'next/image';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BiLogoFacebookCircle } from 'react-icons/bi';

export default function Home() {
    return (
        <div className='home p-5 d-flex'
            style={{ backgroundColor: COLORS.primary }}
        >
            <div className='homeleft p-4'>
                <h6>Hello, Sajid Choudhary</h6>
                <h1>I have Creative Design Experience</h1>
                <p>I'm Sajid Choudhary, a creative Product Designer.I've been helping businesses to solve their problems with my design for 5+ years.</p>
                <h4>Check out my</h4>
                <div className='icon d-flex'>
                    <AiFillInstagram size={30} />
                    <BiLogoFacebookCircle size={30} />
                    <IoLogoWhatsapp size={30} />
                    <AiFillTwitterCircle size={30} />
                </div>
            </div>
            <div className='homeright'>
                <Image
                    src='/images/pic.png'  // Replace with the actual path to your image
                    alt="Description of the image"
                    width={400}  // Set the desired width
                    height={100}  // Set the desired height
                />
            </div>
        </div>
    )
}