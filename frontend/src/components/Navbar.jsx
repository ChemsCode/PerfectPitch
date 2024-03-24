import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-around items-center h-20 max-w-[1750px] mx-auto px-10 text-white">
            <h1 className="w-full text-3xl font-bold text-indigo-500">PerfectPitch.</h1>
            <ul className="hidden md:flex">
                <li className="p-4 hover:text-indigo-400"><Link to="/">Home</Link></li>
                <li className="p-4 hover:text-indigo-400"><Link to="/">About</Link></li>
                <li className="p-4 hover:text-indigo-400"><Link to="/">Contact</Link></li>
                <li className="p-4 hover:text-indigo-400"><Link to="/login">Login</Link></li>
                <li className="p-4 hover:text-indigo-400"><Link to="/register">Register</Link></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "ease-in-out duration-500 fixed left-[-100%]"
                }
            >
                <h1 className="w-full text-3xl font-bold text-indigo-500 m-4">PerfectPitch.</h1>
                <li className="p-4 border-b border-gray-600 hover:text-indigo-400"><Link to="/">Home</Link></li>
                <li className="p-4 border-b border-gray-600 hover:text-indigo-400"><Link to="/">About</Link></li>
                <li className="p-4 border-b border-gray-600 hover:text-indigo-400"><Link to="/">Contact</Link></li>
                <li className="p-4 border-b border-gray-600 hover:text-indigo-400"><Link to="/login">Login</Link></li>
                <li className="p-4 hover:text-indigo-400"><Link to="/register">Register</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;