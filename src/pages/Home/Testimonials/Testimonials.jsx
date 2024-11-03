import Title from "../../../components/Titile";
import personImg from '/public/assets/testimonials/person.svg'
import quoteImg from '/public/assets/testimonials/quote.svg'
import bgImg from '/public/assets/testimonials/bg-img.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialsButton from "./TestimonialsButton";

const Testimonials = () => {
    return (
        <div className="lg:mt-[120px] sm:mt-[30px]">
            <div className="container">
                <div className="md:hidden grid lg:gap-4 sm:gap-2">
                    <Title name="Cispy, Every Bite Taste" />
                    <h2 className="lg:text-[62px] sm:text-[40px] lg:leading-[62px] sm:leading-[48px] font-bold">What Some Of My Customers Say</h2>
                </div>

                {/* swiper */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* mobile device button */}
                    <div className="md:hidden mt-6 flex justify-center">
                        <TestimonialsButton />
                    </div>
                    {/* laptop device button */}
                    <div className="md:flex sm:hidden justify-between mb-[60px]">
                        <div className="grid lg:gap-4 sm:gap-2">
                            <Title name="Cispy, Every Bite Taste" />
                            <h2 className="lg:text-[62px] sm:text-[40px] lg:leading-[62px] sm:leading-[48px] font-bold">Popular Food Items</h2>
                        </div>
                        <TestimonialsButton />
                    </div>
                    <SwiperSlide>
                        <div className="lg:mt-[60px] sm:mt-[24px] bg-[#FEBF00] relative z-10">
                            <img className="absolute left-0 md:bottom-5 sm:bottom-0 -z-10" src={bgImg} alt="" />
                            <div className="flex md:flex-row sm:flex-col-reverse items-center h-full">
                                <div className="grid md:gap-[163px] sm:gap-10 md:py-[71px] md:px-[85px] sm:p-[25px]">
                                    <div className="relative">
                                        <p className="md:text-xl sm:text-lg leading-[34px]">
                                            You cant go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                        </p>
                                        <img className="absolute top-0 -left-5" src={quoteImg} alt="" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="uppercase bebas-neue-bold leading-[19px]">Khalid Al Dawsry</h3>
                                            <p className="leading-[13px]">Jeddah, Saudi</p>
                                        </div>
                                        <img className="w-[39px] h-[39px] rounded-full" src={personImg} alt="" />
                                    </div>
                                </div>
                                <iframe className="md:w-[763px] md:h-[555px] sm:w-[100%] sm:h-[240px]" src="https://www.youtube.com/embed/39tPdZx-kR4?si=IouLvTPA6WORM2kJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="lg:mt-[60px] sm:mt-[24px] bg-[#FEBF00] relative z-10">
                            <img className="absolute left-0 md:bottom-5 sm:bottom-0 -z-10" src={bgImg} alt="" />
                            <div className="flex md:flex-row sm:flex-col-reverse items-center h-full">
                                <div className="grid md:gap-[163px] sm:gap-10 md:py-[71px] md:px-[85px] sm:p-[25px]">
                                    <div className="relative">
                                        <p className="md:text-xl sm:text-lg leading-[34px]">
                                            You cant go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                        </p>
                                        <img className="absolute top-0 -left-5" src={quoteImg} alt="" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="uppercase bebas-neue-bold leading-[19px]">Khalid Al Dawsry</h3>
                                            <p className="leading-[13px]">Jeddah, Saudi</p>
                                        </div>
                                        <img className="w-[39px] h-[39px] rounded-full" src={personImg} alt="" />
                                    </div>
                                </div>
                                <iframe className="md:w-[763px] md:h-[555px] sm:w-[100%] sm:h-[240px]" src="https://www.youtube.com/embed/39tPdZx-kR4?si=IouLvTPA6WORM2kJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* <div className="lg:mt-[60px] sm:mt-[24px] bg-[#FEBF00] relative z-10">
                    <img className="absolute left-0 md:bottom-5 sm:bottom-0 -z-10" src={bgImg} alt="" />
                    <div className="flex md:flex-row sm:flex-col-reverse items-center h-full">
                        <div className="grid md:gap-[163px] sm:gap-10 md:py-[71px] md:px-[85px] sm:p-[25px]">
                            <div className="relative">
                                <p className="md:text-xl sm:text-lg leading-[34px]">
                                    You cant go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                </p>
                                <img className="absolute top-0 -left-5" src={quoteImg} alt="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="uppercase bebas-neue-bold leading-[19px]">Khalid Al Dawsry</h3>
                                    <p className="leading-[13px]">Jeddah, Saudi</p>
                                </div>
                                <img className="w-[39px] h-[39px] rounded-full" src={personImg} alt="" />
                            </div>
                        </div>
                        <iframe className="md:w-[763px] md:h-[555px] sm:w-[100%] sm:h-[240px]" src="https://www.youtube.com/embed/39tPdZx-kR4?si=IouLvTPA6WORM2kJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Testimonials;