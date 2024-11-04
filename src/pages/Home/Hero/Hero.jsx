import heroImg from '../../../assets/hero/hero_img.svg'
import flower from '../../../assets/hero/flower.svg'
import textImg from '../../../assets/hero/text_banner.png'

const Hero = () => {
    return (
        <div className='grid md:grid-cols-2 items-center lg:mt-[130px] md:mt-[65px] sm:mt-[32px] lg:pb-[130px] sm:pb-[30px] sm:gap-8'>
            <div className=''>
                <h1 className="xl:text-[120px] md:text-6xl sm:text-[48px] xl:leading-[130px] sm:leading-[56px] uppercase font-bold mb-4 bg-gradient-to-r from-[#BD1F17] from-0% to-[#BD1F17] to-70% relative z-10 xl:text-nowrap md:text-nowrap break">
                    <img className='absolute md:block xl:top-5 xl:-right-96 lg:-right-60 md:-right-80 top-1 sm:hidden -z-10' src={textImg} alt="" />
                    Taste The Authentic <br /> Saudi Cuisine
                </h1>
                <p className="lg:mb-[38px] md:mb-9 sm:mb-8">
                    Among the best Saudi chefs in the world, serving you something beyond flavor.
                </p>
                <button className="btn">Explore Menu </button>
            </div>
            <div className='relative'>
                <img className='bg-cover' src={heroImg} alt="" />
                <img className='absolute -top-9 sm:-top-5 right-0 sm:-right-0' src={flower} alt="" />
            </div>
        </div>
    );
};

export default Hero;