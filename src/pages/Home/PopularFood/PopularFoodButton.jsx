import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const PopularFoodButton = () => {
    const swiper = useSwiper();

    return (
        <div className="flex gap-11 pr-16">
            <button className="bg-white w-[60px] h-[60px] rounded-full shadow group" onClick={() => swiper.slidePrev()}>
                <MdKeyboardArrowLeft className="text-2xl mx-auto group-hover:text-[#BD1F17] transition-all duration-300" />
            </button>
            <button className="bg-white w-[60px] h-[60px] rounded-full shadow group" onClick={() => swiper.slideNext()}>
                <MdKeyboardArrowRight className="text-2xl mx-auto group-hover:text-[#BD1F17] transition-all duration-300" />
            </button>
        </div>
    );
};

export default PopularFoodButton;