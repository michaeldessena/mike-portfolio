import React from "react";
import './navbar.css'
import useWindowDimensions from "@/app/hooks/useWindowDim";
import ClosingX from "./closing_simbol.js";
import { Link } from "react-scroll";

export default function NavBar() {

    const dims = useWindowDimensions(window);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="section1" spy={true} smooth={true} offset={0} duration={500}>
                        Who I am
                    </Link>
                </li>
                <li>
                    <Link to="section2" spy={true} smooth={true} offset={0} duration={500}>
                        Education
                    </Link>
                </li>
                <li>
                    <Link to="section3" spy={true} smooth={true} offset={0} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="section4" spy={true} smooth={true} offset={0} duration={500}>
                        Skills
                    </Link>
                </li>
                {dims.width < 550 ? <li><ClosingX /></li> : null}
            </ul>
        </nav>
    );
}