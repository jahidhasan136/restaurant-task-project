import Title from "../../../components/Titile";
import burgerImg from '/public/assets/popular-food/burger.svg'
import pizzaImg from '/public/assets/popular-food/pizza.svg'
import frenchFriesImg from '/public/assets/popular-food/french-fries.svg'
import chickenImg from '/public/assets/popular-food/chicken.svg'

const PopularFood = () => {
    return (
        <div className="bg-[#FBF7F2] lg:mt-[120px] sm:mt-8">
            <div className="container lg:py-[120px] sm:py-8">
                <div className="grid lg:gap-4 sm:gap-2">
                    <Title name="Cispy, Every Bite Taste" />
                    <h2 className="lg:text-[62px] sm:text-[40px] lg:leading-[62px] sm:leading-[48px] font-bold">Popular Food Items</h2>
                </div>
                <div className="lg:mt-[60px] sm:mt-[30px] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <div className="text-center bg-white p-8">
                        <img className="mx-auto" src={burgerImg} alt="" />
                        <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                        <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Vegetables Burger</h3>
                        <p className="leading-[32px]">Barbecue italian cuisine pizza</p>
                    </div>
                    <div className="text-center bg-white p-8">
                        <img className="mx-auto" src={pizzaImg} alt="" />
                        <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                        <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Spacial Pizza</h3>
                        <p className="leading-[32px]">Barbecue italian cuisine p izza</p>
                    </div>
                    <div className="text-center bg-white p-8">
                        <img className="mx-auto" src={frenchFriesImg} alt="" />
                        <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                        <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Spacial French Fires</h3>
                        <p className="leading-[32px]">Barbecue italian cuisine pizza</p>
                    </div>
                    <div className="text-center bg-white p-8">
                        <img className="mx-auto" src={chickenImg} alt="" />
                        <div className="w-[57px] h-1 bg-[#BD1F17] mx-auto my-6"></div>
                        <h3 className="bebas-neue-bolds font-bold text-2xl uppercase leading-[36px]">Cuisine Chicken</h3>
                        <p className="leading-[32px]">Barbecue italian cuisine pizza</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularFood;