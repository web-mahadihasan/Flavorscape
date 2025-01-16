import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import useAuth from '../../hooks/useAuth';
import { IoCartOutline } from 'react-icons/io5';
import { GoHome } from 'react-icons/go';
import { Icon } from '@iconify/react/dist/iconify.js';
import { PiListStarFill } from 'react-icons/pi';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { GrShop } from 'react-icons/gr';
import { NavLink } from 'react-router';
import { BiLogOutCircle } from 'react-icons/bi';

const DashboardSidebar = () => {
    const {user} = useAuth()


    const usersLinks = [
        {name: "Dashboard Home", path: "/dashboard",  icon: <GoHome size={24} className=''/>},
        {name: "Reservation", path: "/dashboard/reservation",  icon: <Icon icon="solar:calendar-outline" width="24" height="24" />},
        {name: "Payment History", path: "/dashboard/payment-history",  icon: <Icon icon="arcticons:mymoney-pro" width="24" height="24" />},
        {name: "My Cart", path: "/dashboard/my-cart",  icon: <IoCartOutline size={24}/>},
        {name: "Add Review",path: "/dashboard/add-review",  icon: <PiListStarFill size={24} />},
        {name: "My Booking", path: "/dashboard/my-booking",  icon: <MdOutlineCalendarMonth size={24} className=''/>},
    ]
    const dashboardCommonLinks = [
        {name: "Home", path: "/", icon: <GoHome size={24} className=''/>},
        {name: "Menu", path: "/our-menu", icon: <HiMenu size={24} className=''/>},
        {name: "Shop", path: "/order/dessert", icon: <GrShop size={24} />},
        {name: "Contact", path: "/contact", icon: <Icon icon="mdi-light:email" width="24" height="24" />}
    ]
    return (
        <div className="flex min-h-screen flex-col justify-between h-full p-3 px-6 w-full dark:bg-yellow text-black/80 font-inter">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className='font-bold text-xl font-cinzel'>Flavorscape</h2>
                    <button className="p-2">
                        <HiMenu size={26} />
                    </button>
                </div>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center py-4">
                        <button type="submit" className="p-2 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-600">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border- rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-3 text-sm">
                        {
                           usersLinks.map(link =>   
                                <li className="rounded-sm dashboard text-base" key={link.name}>
                                    <NavLink to={link.path} rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </NavLink>
                                </li>
                            )
                        }
                        <div className='divider'></div>
                        {
                           dashboardCommonLinks.map(link =>   
                                <li className="rounded-sm" key={link.name}>
                                    <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            )
                        }
                        <li className="rounded-sm">
                             <button rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <BiLogOutCircle size={24} className='text-red-500' />
                                 <span>Log out</span>
                             </button>
                         </li>
                        
                    </ul>
                </div>
            </div>
            <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                <img src={user?.photoUrl} alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
                <div>
                    <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                    <span className="flex items-center space-x-1">
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">View profile</a>
                    </span>
                </div>
            </div>
        </div>
            );
};

export default DashboardSidebar;