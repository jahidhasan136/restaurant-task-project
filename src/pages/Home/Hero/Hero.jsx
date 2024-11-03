import heroImg from '/public/assets/hero/hero_img.svg'
import flower from '/public/assets/hero/flower.svg'

const Hero = () => {
    return (
        <div className='grid lg:grid-cols-2 items-center xl:mt-[130px] lg:mt-[65px] md:mt-[32px] md:gap-8'>
            <div className=''>
                <h1 className="xl:text-[120px] lg:text-6xl md:text-[48px] lg:leading-[130px] md:leading-[56px] uppercase font-bold mb-4 bg-gradient-to-r from-[#BD1F17] from-0% to-[#BD1F17] to-70% text-nowrap relative z-10">
                    Taste The Authentic <br /> Saudi Cuisine
                </h1>
                <p className="xl:mb-[38px] lg:mb-9 md:mb-8">
                    Among the best Saudi chefs in the world, serving you something beyond flavor.
                </p>
                <button className="btn">Explore Menu </button>
            </div>
            <div className='relative'>
                <img className='bg-cover' src={heroImg} alt="" />
                <img className='absolute -top-9 md:-top-5 right-0 md:right-10' src={flower} alt="" />
            </div>
        </div>
    );
};

export default Hero;