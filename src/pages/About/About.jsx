import aboutImg from '/public/assets/about/about.svg'
import { FiPhoneCall } from "react-icons/fi";
import fastDeliveryImg from '/public/assets/about/delivery.svg'
import absoluteImg from '/public/assets/about/absolute.svg'
import pickupDeliveryImg from '/public/assets/about/pickup.svg'
import bgImg from '/public/assets/about/bg_img.svg'

const About = () => {
    return (
        <div className='relative'>
            <img className='absolute right-0 bottom-0' src={bgImg} alt="" />
            <div className='container mt-[120px]'>
                <div className='grid  lg:grid-cols-2 gap-20 items-center'>
                    <div>
                        <img className='bg-cover w-full h-full' src={aboutImg} alt="" />
                    </div>
                    <div className="grid gap-8">
                        <div className="flex gap-4">
                            <button className="px-4 py-[6px] bg-[#B52B1D] text-white text-sm">About</button>
                            <button>Experience</button>
                            <button>Contact</button>
                        </div>
                        <div className='grid gap-4'>
                            <h2 className="uppercase xl:text-[62px] md:text-[40pxs] xl:leading-[62px] font-bold">
                                Exceptional Culinary Experience And Delicious Food
                            </h2>
                            <p className='text-[#333333]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
                            </p>
                        </div>
                        <div className="flex items-center gap-8">
                            <button className="btn">About More</button>
                            <div className='flex items-center gap-2'>
                                <FiPhoneCall />
                                <p>+88 3426 739 485</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-2 justify-between mt-[74px]'>
                    <div className='flex gap-4 items-center'>
                        <img className='px-[27.5px] py-[28.33px] rounded-full shadow' src={fastDeliveryImg} alt="" />
                        <div className='grid gap-[2px]'>
                            <h3 className='text-[30px] font-bold leading-[36px] text-[#0A1425] bebas-neue-bold'>Fast Delivery</h3>
                            <p className='text-[#0A1425] text-xl'>Within 30 minutes</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img className='px-[27.5px] py-[28.33px] rounded-full shadow' src={absoluteImg} alt="" />
                        <div className='grid gap-[2px]'>
                            <h3 className='text-[30px] font-bold leading-[36px] text-[#0A1425] bebas-neue-bold'>Absolute Dining</h3>
                            <p className='text-[#0A1425] text-xl'>Best buffet restaurant </p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img className='px-[27.5px] py-[28.33px] rounded-full shadow' src={pickupDeliveryImg} alt="" />
                        <div className='grid gap-[2px]'>
                            <h3 className='text-[30px] font-bold leading-[36px] text-[#0A1425] bebas-neue-bold'>Pickup Delivery</h3>
                            <p className='text-[#0A1425] text-xl'>Grab your food order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;