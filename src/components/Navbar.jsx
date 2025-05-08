import React from "react";
import { Link } from 'react-router';

const Navbar = () => {

    return ( 
        <nav className="bg-black text-white top-0 left-0 right-0 border-b border-white/10">
            <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div>
                      <Link to="/" className="text-xl font-bold text-yellow-400">WasteXchange</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                          <a href="#" class="block py-2 px-3 text-white bg-yellow-700 rounded-sm md:bg-transparent md:text-yellow-700 md:p-0 md:dark:text-yellow-500" aria-current="page">Home</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                      </ul>
                    </div>

                    {/* Auth btn */}
                    <div className="hidden md:flex items-center space-x-4">
                      <Link to="/login" className="hover:text-gray-300 hidden xl:block">Log in</Link>
                      <Link 
                        to="/get-started" 
                        className="bg-yellow-600 px-4 py-2 rounded-md hover:bg-white-700 text-black"
                      >
                        Get started — it's free
                      </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">Mobile menu</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;