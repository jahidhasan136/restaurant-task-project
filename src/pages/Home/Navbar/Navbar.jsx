import { Link } from "react-router-dom";
import logo from '/public/assets/logo.svg'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-[60px]">
                <div className="flex items-center gap-[6px]">
                    <img src={logo} alt="" />
                    <p className="text-[28.44px] poppins-semibold">Restau<span className="font-normal">rant</span></p>
                </div>
                <div className="flex gap-10">
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Portfolio</Link>
                    <Link to='/'>Clients</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Contact</Link>
                </div>
            </div>
            <div>
                <button className="btn">Book A Table</button>
            </div>
        </div>
    );
};

export default Navbar;