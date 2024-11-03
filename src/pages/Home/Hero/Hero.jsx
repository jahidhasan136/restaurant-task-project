import heroImg from '/public/assets/hero/hero_img.svg'
import flower from '/public/assets/hero/flower.svg'

const Hero = () => {
    return (
        <div className='grid grid-cols-2 items-center mt-[130px]'>
            <div className=''>
                <h1 className="xl:text-[120px] lg:text-6xl md:text-[48px] leading-[130px] uppercase font-bold mb-4 bg-gradient-to-r from-[#BD1F17] from-0% to-[#BD1F17] to-70% text-nowrap  relative z-10">
                    Taste The Authentic <br /> Saudi Cuisine
                </h1>
                <p className="xl:mb-[38px] lg:mb-9 md:mb-8">
                    Among the best Saudi chefs in the world, serving you something beyond flavor.
                </p>
                <button className="btn">Explore Menu </button>
            </div>
            <div className='relative'>
                <img className='bg-cover' src={heroImg} alt="" />
                <img className='absolute -top-9 right-0' src={flower} alt="" />
            </div>
        </div>
    );
};

export default Hero;