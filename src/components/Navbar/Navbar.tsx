import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
        // <nav>
        //     <div className="container">
        //         <p className="gradient shimmer"><span>amazon</span></p>
        //         <div className="nav-list">
        //             <Link to="/products">
        //                 <span /* className="a" */ >Collections</span>
        //             </Link>
        //             <span>Brands</span>
        //             <span>New</span>
        //             <span>Sales</span>
        //         </div>
        //     </div>
        // </nav>

        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        const animation = ()=>{
            //Animate Links
            document.querySelector(".nav-links")?.classList.toggle("open");
            document.querySelectorAll(".nav-links li").forEach(link => {
                link.classList.toggle("fade");
            });

            //Hamburger Animation
            document.querySelector(".hamburger")?.classList.toggle("toggle");
        }

const Navbar = (): JSX.Element => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="logo.svg" alt="Logo"/>
                </div>
                <div className="hamburger" onClick={animation} >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-links">
                    <li><span>Home</span></li>
                    <li><span>Solutions</span></li>
                    <li><span>Products</span></li>
                    <li><span>Services</span></li>
                    <li><span>Contact Us</span></li>
                    <li><button className="login-button">Login</button></li>
                    <li><button className="join-button">Join</button></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;