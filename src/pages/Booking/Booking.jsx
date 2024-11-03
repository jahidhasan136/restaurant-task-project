import bgImg from '/public/assets/booking/bg-booking.jpg'

const Booking = () => {
    return (
        <div className='relative mt-[120px]'>
            <img className='absolute -z-10 bg-cover w-[100%] h-[100%]' src={bgImg} alt="" />
            <div className='text-white container pt-[120px]'>
                <div className='flex items-center gap-[10px] mb-4'>
                    <div className='w-[10px] h-[10px] bg-[#BD1F17]'></div>
                    <p className='text-[#BD1F17] font-bold'>Book Now</p>
                </div>
                <h2 className='bebas-neue-bold xl:text-[62px] md:text-[40px] xl:mb-4 md:mb-1'>Book Your Table</h2>
                <p className='mb-10'>Enim tempor  eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                <form action="" className='grid gap-6'>
                    <div className='xl:flex md:grid gap-10 md:gap-4'>
                        <input className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] w-[302px] h-[46px]' placeholder='Your Name*' type="text" />
                        <input className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] w-[302px] h-[46px]'
                            placeholder='Your Email*' type="email" />
                    </div>
                    <div className='xl:flex md:grid gap-10 md:gap-4'>
                        <input className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] w-[302px] h-[46px]'
                            placeholder='Reservation
                        Date' type="date" />
                        <input className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] w-[302px] h-[46px]'
                            placeholder='Total People' type="number" />
                    </div>
                    <textarea className='px-4 py-3 text-sm bg-transparent border border-[#E5E7EB] xl:w-[644px] md:w-[302px] h-[140px] xl:mb-8 md:mb-6' placeholder='Message' name="" id=""></textarea>
                    <div className='xl:pb-[86px] md:pb-[30px]'>
                        <button className='btn text-lg'>Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;