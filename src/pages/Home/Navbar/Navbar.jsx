import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const handleBarClick = () => {
        console.log('handle click')
        setIsActive(true);
    }
    const handleBarClose = () => {
        console.log('handle close')
        setIsActive(false);
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[60px]">
                    <div className="flex items-center gap-[6px]">
                        <img src={logo} alt="" />
                        <p className="text-[28.44px] poppins-semibold">Restau<span className="font-normal">rant</span></p>
                    </div>
                    <div className="lg:flex md:hidden sm:hidden gap-10">
                        <Link to='/'>Home</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>Portfolio</Link>
                        <Link to='/'>Clients</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Contact</Link>
                    </div>
                </div>
                <div className="lg:block md:hidden sm:hidden">
                    <button className="btn">Book A Table</button>
                </div>
                <div className="lg:hidden md:block sm:block">
                    <FaBars onClick={handleBarClick} className="text-2xl cursor-pointer" />
                </div>
            </div>
            <div className={`${isActive ? 'active' : 'closed'} offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-white/90 top-0 lg:hidden -left-[250px] transition-all`}>
                <FaTimesCircle className='absolute right-[15px] top-[40px] z-10 text-black text-[24px]  cursor-pointer' onClick={handleBarClose}></FaTimesCircle>
                <div className="grid gap-5 text-black font-semibold mt-5">
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Portfolio</Link>
                    <Link to='/'>Clients</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Contact</Link>
                </div>
                <div className="mt-5">
                    <button className="btn">Book A Table</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;