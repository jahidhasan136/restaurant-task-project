import Title from "../../../components/Titile";
import burgerImg from '/public/assets/popular-food/burger.svg'
import pizzaImg from '/public/assets/popular-food/pizza.svg'
import frenchFriesImg from '/public/assets/popular-food/french-fries.svg'
import chickenImg from '/public/assets/popular-food/chicken.svg'
import bgImg from '/public/assets/popular-food/bg-img.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import PopularFoodButton from "./PopularFoodButton";


const PopularFood = () => {
    return (
        <div className="relative bg-[#FBF7F2] lg:mt-[120px] sm:mt-8 z-10">
            <img className="absolute bottom-0 -z-10 md:block sm:hidden" src={bgImg} alt="" />
            <div className="container lg:py-[120px] sm:py-8">
                <div className="grid lg:gap-4 sm:gap-2 mb-[30px] md:hidden">
                    <Title name="Cispy, Every Bite Taste" />
                    <h2 className="lg:text-[62px] sm:text-[40px] lg:leading-[62px] sm:leading-[48px] font-bold">Popular Food Items</h2>
                </div>
                {/* swiper */}
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* mobile device button */}
                    <div className="md:hidden mt-6 flex justify-center">
                        <PopularFoodButton />
                    </div>
                    {/* laptop device button */}
                    <div className="md:flex sm:hidden justify-between mb-[60px]">
                        <div className="grid lg:gap-4 sm:gap-2">
                            <Title name="Cispy, Every Bite Taste" />
                            <h2 className="lg:text-[62px] sm:text-[40px] lg:leading-[62px] sm:leading-[48px] font-bold">Popular Food Items</h2>
                        </div>
                        <PopularFoodButton />
                    </div>
                    <SwiperSlide>
                        <div className="text-center bg-white p-8">
                            <img className="mx-auto" src={burgerImg} alt="" />
                            <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                            <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Vegetables Burger</h3>
                            <p className="leading-[32px]">Barbecue italian cuisine pizza</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center bg-white p-8">
                            <img className="mx-auto" src={pizzaImg} alt="" />
                            <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                            <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Spacial Pizza</h3>
                            <p className="leading-[32px]">Barbecue italian cuisine p izza</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center bg-white p-8">
                            <img className="mx-auto" src={frenchFriesImg} alt="" />
                            <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                            <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Spacial French Fires</h3>
                            <p className="leading-[32px]">Barbecue italian cuisine pizza</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center bg-white p-8">
                            <img className="mx-auto" src={chickenImg} alt="" />
                            <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                            <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Cuisine Chicken</h3>
                            <p className="leading-[32px]">Barbecue italian cuisine pizza</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center bg-white p-8">
                            <img className="mx-auto" src={burgerImg} alt="" />
                            <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                            <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Vegetables Burger</h3>
                            <p className="leading-[32px]">Barbecue italian cuisine pizza</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center bg-white p-8">
                            <img className="mx-auto" src={pizzaImg} alt="" />
                            <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                            <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Spacial Pizza</h3>
                            <p className="leading-[32px]">Barbecue italian cuisine p izza</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center bg-white p-8">
                            <img className="mx-auto" src={frenchFriesImg} alt="" />
                            <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                            <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Spacial French Fires</h3>
                            <p className="leading-[32px]">Barbecue italian cuisine pizza</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center bg-white p-8">
                            <img className="mx-auto" src={chickenImg} alt="" />
                            <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                            <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Cuisine Chicken</h3>
                            <p className="leading-[32px]">Barbecue italian cuisine pizza</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default PopularFood;