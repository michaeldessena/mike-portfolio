import React, { useState, useEffect } from "react";
import './Navbar.css'
import { Link } from "react-scroll";

export default function NavBar() {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setShow(false); 
          } else { // if scroll up show the navbar
            setShow(true);  
          }
    
          // remember current page location to use in the next move
          setLastScrollY(window.scrollY); 
        }
      };
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);

    return (
        <nav className={`active_navbar ${show ? '' : 'hidden_navbar'}`}>
            <ul>
                <li>
                    <Link className="nav_bar_link" to="section1" spy={true} smooth={true} offset={0} duration={500}>
                        Who I am
                    </Link>
                </li>
                <li>
                    <Link className="nav_bar_link" to="section2" spy={true} smooth={true} offset={0} duration={500}>
                        Education
                    </Link>
                </li>
                <li>
                    <Link className="nav_bar_link" to="section3" spy={true} smooth={true} offset={-100} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link className="nav_bar_link" to="section4" spy={true} smooth={true} offset={0} duration={500}>
                        Skills
                    </Link>
                </li>
            </ul>
        </nav>
    );
}