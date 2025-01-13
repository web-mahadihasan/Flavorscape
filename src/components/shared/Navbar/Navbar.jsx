
import React, {useState} from "react";

import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const {user, logOutUser} = useAuth()

    const navLinks =  <ul className="items-center gap-4 font-semibold text-[1rem] text-white lg:flex hidden font-inter">
            <li className="uppercase before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer"> <Link>Home</Link></li>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer uppercase"> <Link>Contact us</Link></li>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer uppercase"> <Link>Dashboard</Link></li>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer uppercase"> <Link to={"/our-menu"}>Our Menu</Link></li>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer uppercase"> <Link to={"/order/dessert"}>Our shop</Link></li>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer uppercase"> <Link to={"/auth/login"}>Our shop</Link></li>
        </ul>

        const handleLogout = async () =>  {
           try {
            const result  = await logOutUser()
            toast.success("Successfully Logout!")
           } catch (error) {
            toast.error("Failed to Logout! Try again")
           }
        }
    return (
        <div className="w-full border-b py-2 bg-black bg-opacity-30 text-white">
            <nav
            className="flex items-center justify-between container mx-auto px-4 xl:px-0 relative  boxShadow py-[8px]">
                <h3 className="text-4xl font-cinzel font-bold">Flavorscape</h3>
            {/* <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[55px] "/> */}
            
            
            <div className="flex items-center font-inter gap-6">
               {navLinks}
                <div className="items-center gap-[10px] flex">
                    {
                        user ? <button onClick={handleLogout} className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-yellow text-white hover:bg-[#1f2937] transition-all duration-300 sm:flex hidden">Sign out</button>:  <Link to={"/auth/login"}>
                            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-yellow text-white hover:bg-[#1f2937] transition-all duration-300 sm:flex hidden">Log in</button>
                        </Link>
                    }
                   
                    <div  onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex">
                        <Hamburger size={32} />
                    </div>
                    
                </div>
            </div>

            <aside
                className={`font-inter ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[400px] hidden opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                <div className="relative mb-5">
                    <input
                        className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]"/>
                </div>
                <div>
                    {navLinks}
                </div>
            </aside>
        </nav>
        </div>
    );
};

export default Navbar;
          