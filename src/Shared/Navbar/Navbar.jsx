import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-3xl font-bold uppercase">
                    <Link to="/"  >School</Link>
                </div>

                {/* Mobile Menu Toggler */}
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-gray-300 focus:outline-none"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 transform rotate-180 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 transform transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">
                        মূল পাতা
                    </Link>
                    {/* Services with dropdown */}
                    <div className="relative group">
                        <span
                            onClick={toggleServices}
                            className="flex items-center  text-white hover:text-gray-300 cursor-pointer"
                        >
                            বিদ্যালয়ের তথ্য <IoIosArrowDown />
                        </span>
                        {/* Dropdown Menu */}
                        {isServicesOpen && (
                            <div className="absolute w-96 top-full left-0 bg-blue-500 shadow-xl rounded-lg text-white py-2 mt-2 space-y-2">
                                <Link to="/" className="block px-4 py-2 hover:text-gray-300">
                                    শিক্ষক শিক্ষিকার তথ্য
                                </Link>
                                <Link to="/" className="block px-4 py-2 hover:text-gray-300">
                                    ছাত্র-ছাত্রীর তথ্য
                                </Link>
                                <Link to="/" className="block px-4 py-2 hover:text-gray-300">
                                    ম্যানেজিং কমিটি
                                </Link>
                            </div>
                        )}
                    </div>
                    {/* End of Dropdown */}

                    <Link to="/" className="text-white hover:text-gray-300">
                        পাঠ্যসূচী(রুটিন)
                    </Link>


                    <Link to="/" className="text-white hover:text-gray-300">
                        ই-লাইব্রেরী
                    </Link>
                    <Link to="/" className="text-white hover:text-gray-300">
                        যোগাযোগ
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute top-[61px] left-0  w-full bg-blue-500  transform origin-top transition-transform ${isOpen ? 'scale-y-100' : 'scale-y-0'
                        }`}
                >
                    <Link to="/" className="block px-4 py-2 text-white hover:text-gray-300" >
                        মূল পাতা
                    </Link>


                    {/* Services with dropdown */}
                    <div className="relative group">
                        <span
                            onClick={toggleServices}
                            className="flex items-center px-4 py-2 text-white hover:text-gray-300 cursor-pointer"
                        >
                            বিদ্যালয়ের তথ্য <IoIosArrowDown />
                        </span>
                        {/* Dropdown Menu */}
                        {isServicesOpen && (
                            <div className="absolute top-full left-0 bg-blue-500 shadow-xl rounded-lg text-white py-2 mt-2 space-y-2">
                                <Link to="/service1" className="block px-4 py-2 hover:text-gray-300">
                                    শিক্ষক শিক্ষিকার তথ্য
                                </Link>
                                <Link to="/service2" className="block px-4 py-2 hover:text-gray-300">
                                    ছাত্র-ছাত্রীর তথ্য
                                </Link>
                                <Link to="/service3" className="block px-4 py-2 hover:text-gray-300">
                                    ম্যানেজিং কমিটি
                                </Link>
                            </div>
                        )}
                    </div>
                    {/* End of Dropdown */}
                    <Link to="/" className="block px-4 py-2 text-white hover:text-gray-300">
                        পাঠ্যসূচী(রুটিন)
                    </Link>
                    <Link to="/" className="block px-4 py-2 text-white hover:text-gray-300">
                        ই-লাইব্রেরী
                    </Link>
                    <Link to="/" className="block px-4 py-2 text-white hover:text-gray-300">
                        যোগাযোগ
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
