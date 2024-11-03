import Hero from "./Home/Hero/Hero";
import Navbar from "./Home/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#BD1F17] from-100% via-[#A51D13] via-100% to-[#8E1B0F] to-100% text-white">
                <div className="container pt-8">
                    <Navbar />
                    <Hero />
                </div>
            </div>
        </div>
    );
};

export default Home;