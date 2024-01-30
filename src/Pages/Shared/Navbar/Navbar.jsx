import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/LOGO.png'
import { LuMenuSquare } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
    const location = useLocation()
    return (
        <div className="navbar bg-base-200 sm:px-10 ">
            <div className="navbar-start sm:justify-between md:justify-start s">
                <Link to='/'><img className='w-32' src={logo} alt="" /></Link>
                <div className="relative hidden sm:block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <GoSearch/>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-auto py-3 pl-10 text-sm rounded-md sm:w-96 md:w-60 xl:w-96 focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex gap-0 pr-10">
                    <ul className="menu menu-horizontal flex items-center px-1">
                        <Link  className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${ location.pathname === "/"
                         ? "!text-blue-500" : "text-gray-800"}`} to='/'>
                            <li><a>Home</a></li>
                        </Link>
                        <Link className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${ location.pathname === "/eletronics"
                         ? "!text-blue-500" : "text-gray-800"}`} to='eletronics'><li><a>Electronics</a></li></Link>
                        <Link className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${ location.pathname === "/gadget"
                         ? "!text-blue-500" : "text-gray-800"}`} to='gadget'><li><a>Tech Gadget</a></li></Link>
                        <Link className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${ location.pathname === "/contact"
                         ? "!text-blue-500" : "text-gray-800"}`} to='contact'><li><a>Contact</a></li></Link>
                    </ul>
                </div>
                <Link><TiShoppingCart className='text-2xl mr-5'/></Link>
                <Link to='login' className="btn">Login</Link>
                <div className="dropdown lg:hidden">
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer-4" className="drawer-button">
                                <LuMenuSquare className="btn btn-ghost text-6xl text-black"/>
                            </label>
                        </div> 
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 sm:w-80 md:w-72 w-60 min-h-full bg-base-200 text-base-content">
                                <Link  className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${ location.pathname === "/"
                                ? "!text-blue-500" : "text-gray-800"}`} to='/'>
                                    <li><a>Home</a></li>
                                </Link>
                                <Link className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${ location.pathname === "/eletronics"
                                ? "!text-blue-500" : "text-gray-800"}`} to='eletronics'><li><a>Electronics</a></li></Link>
                                <Link className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${ location.pathname === "/gadget"
                                ? "!text-blue-500" : "text-gray-800"}`} to='gadget'><li><a>Tech Gadget</a></li></Link>
                                <Link className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${ location.pathname === "/contact"
                                ? "!text-blue-500" : "text-gray-800"}`} to='contact'><li><a>Contact</a></li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;