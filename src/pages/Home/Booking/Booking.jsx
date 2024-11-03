import Title from '../../../components/Titile';
import bgImg from '/public/assets/booking/bg-booking.jpg'

const Booking = () => {
    return (
        <div className='relative mt-[120px]'>
            <img className='absolute -z-10 bg-cover w-[100%] h-[100%]' src={bgImg} alt="" />
            <div className='text-white container pt-[120px]'>
                <Title name='Book Now' />
                <h2 className='bebas-neue-bold lg:text-[62px] md:text-[40px] lg:mb-4 md:mb-1'>Book Your Table</h2>
                <p className='mb-10'>Enim tempor  eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                <form action="" className='grid gap-6'>
                    <div className='lg:flex md:grid gap-10 md:gap-4'>
                        <input className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] w-[302px] h-[46px]' placeholder='Your Name*' type="text" />
                        <input className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] w-[302px] h-[46px]'
                            placeholder='Your Email*' type="email" />
                    </div>
                    <div className='lg:flex md:grid gap-10 md:gap-4'>
                        <input className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] w-[302px] h-[46px]'
                            placeholder='Reservation
                        Date' type="date" />
                        <input className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] w-[302px] h-[46px]'
                            placeholder='Total People' type="number" />
                    </div>
                    <textarea className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] lg:w-[620px] sm:w-[302px] h-[140px] lg:mb-8 md:mb-6' placeholder='Message' name="" id=""></textarea>
                    <div className='lg:pb-[86px] md:pb-[30px]'>
                        <button className='btn text-lg'>Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;