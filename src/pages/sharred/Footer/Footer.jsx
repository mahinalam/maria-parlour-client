import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#F63E7B] text-white">
            <nav>
                {/* <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a> */}
                <div className='flex gap-2'>
                    <FaLocationDot size={20} ></FaLocationDot>
                    <div className='-mt-2'>
                        <p>3rd Floor, Road:#1234</p>
                        <p>New DOH, New Market,Dhaka</p>
                    </div>
                </div>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Quick Links</header>
                <a className="link link-hover">Rentals</a>
                <a className="link link-hover">Sales</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Our Blog</a>
            </nav>
            <nav>
                <header className="footer-title ">About Us</header>
              <p>Dedicated to provide top quality <br /> service to our customers. for more <br /> information  visit our social media</p>
              <div className='flex gap-4 justify-between items-center'>
              <FaFacebook size={20}  /> <FaInstagram size={20} /> <AiFillLinkedin size={20} /> <RiYoutubeFill size={20} />
              </div>
            </nav>
        </footer>
    );
};

export default Footer;