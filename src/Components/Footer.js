import React from "react";
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa'

function Footer() {
    return (
        <footer className="bg-[#1E232A] text-gray-300">
            <div className="container mx-auto py-14 px-6">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
                    <div className="lg:col-span-5 col-span-12">
                        <h1 className='md:text-3xl text-xl text-white'>Grocify</h1>
                        <p className="mt-6 max-w-[450px]">
                            Welcome to Grocify! We are your one-stop destination for all your grocery needs. Our mission is to provide fresh, high-quality products to our customers while ensuring a seamless shopping experience.
                        </p>
                        <div className="flex justify-between md:w-[200px] w-[150px] pt-2 md:text-2xl text-xl">
                            <FaFacebookSquare />
                            <FaLinkedin />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-4 col-span-12 cursor-pointer">
                        <h5 className="tracking-wide">COMPANY</h5>
                        <div className="list-none mt-6 space-y-4">
                            <li className="hover:text-gray-400 transiton-all duration-500 ease-in-out">About us</li>
                            <li className="hover:text-gray-400 transiton-all duration-500 ease-in-out">Our customers</li>
                            <li className="hover:text-gray-400 transiton-all duration-500 ease-in-out">Careers</li>
                            <li className="hover:text-gray-400 transiton-all duration-500 ease-in-out">News</li>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-4 col-span-12 cursor-pointer">
                        <h5 className="tracking-wide">SUPPORT</h5>
                        <div className="list-none mt-6 space-y-4">
                            <li className="hover:text-gray-400 transiton-all duration-500 ease-in-out">Help Center</li>
                            <li className="hover:text-gray-400 transiton-all duration-500 ease-in-out">Contact us</li>
                            <li className="hover:text-gray-400 transiton-all duration-500 ease-in-out">Privacy & terms</li>
                            <li className="hover:text-gray-400 transiton-all duration-500 ease-in-out">Cookie policy</li>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-12">
                        <h5 className="tracking-wide">NEWSLETTER</h5>
                        <p className="mt-6">Stay up to date with Grocify! Sign up for our newsletter to receive the latest updates and exclusive offers.</p>
                        <form className="">
                            <div className="my-3">
                                <input className="w-full py-2 px-3 bg-transparent oultine-none border border-gray-500" type="email" placeholder="Enter your email address" />
                            </div>
                            <button type="submit" className="py-2 px-5 tracking-wide border duration-500 bg-[#ba324f] hover:bg-[#9eb3c2] w-full rounded-md">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-600">
                <div className="md:text-left text-center container mx-auto py-7 px-6 text-center">
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} Grocify. All rights reserved
                    </p>
                </div>
            </div> 
        </footer>
    )
}

export default Footer;
