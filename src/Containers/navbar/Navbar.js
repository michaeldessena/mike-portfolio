import React from "react";
import './Navbar.css'
import { Link } from "react-scroll";

export default function NavBar() {

    return (
        <nav>
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