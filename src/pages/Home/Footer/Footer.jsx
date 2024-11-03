import bgImg from '/public/assets/footer/bg_footer.jpg'
import timeIcon from '/public/assets/footer/time.svg'
import callIcon from '/public/assets/footer/call.svg'
import emailIcon from '/public/assets/footer/email.svg'
import addressIcon from '/public/assets/footer/address.svg'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="mt-[120px] relative text-white bg-black/80 text-center">
            <img className="absolute -z-10 h-[100%] w-[100%] object-cover" src={bgImg} alt="" />
            <div className='container pt-[120px]'>
                <h2 className='xl:text-[62px] md:text-[40px] xl:leading-[64px] md:leading-[48px] bebas-neue-bold'>We ready to have you the best dining expriences</h2>
                <div className='mt-12 grid grid-cols-4'>
                    <div>
                        <img className='mb-6 mx-auto' src={timeIcon} alt="" />
                        <h3 className='mb-3 text-2xl bebas-neue-bold uppercase'>Openning Hours</h3>
                        <p>Monday - Sunday <br /> 9:00 Am to 11:30 PM</p>
                    </div>
                    <div>
                        <img className='mb-6 mx-auto' src={callIcon} alt="" />
                        <h3 className='mb-3 text-2xl bebas-neue-bold uppercase'>Lets Talk</h3>
                        <p>Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545</p>
                    </div>
                    <div>
                        <img className='mb-6 mx-auto' src={emailIcon} alt="" />
                        <h3 className='mb-3 text-2xl bebas-neue-bold uppercase'>Book A Table</h3>
                        <p>Email: demo@website.com <br /> Support: support@website.com</p>
                    </div>
                    <div>
                        <img className='mb-6 mx-auto' src={addressIcon} alt="" />
                        <h3 className='mb-3 text-2xl bebas-neue-bold uppercase'>Our Address</h3>
                        <p>123 Stree New york  City, United <br /> States of America.</p>
                    </div>
                </div>
                <div className='grid justify-center gap-[25px] py-[120px]'>
                    <div className='flex items-center gap-6 mx-auto'>
                        <div className='btn_social'>
                            <FaFacebook />
                        </div>
                        <div className='btn_social'>
                            <FaSquareXTwitter />
                        </div>
                        <div className='btn_social'>
                            <FaInstagramSquare />
                        </div>
                        <div className='btn_social'>
                            <FaLinkedin />
                        </div>
                    </div>
                    <p>© 2023 Niomax All Rights Reserved </p>
                </div>
            </div>
        </div>

    );
};

export default Footer;