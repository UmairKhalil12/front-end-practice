import { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className="navbar-main">
                <ul className="navbar-ul">
                    <li>REACT .</li>
                    <li>Home</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="navbar-heading">
                    <h1>REACT.</h1>
                </div>
                <div className="navbar-icon" onClick={handleNav}>
                    {nav ? (<AiOutlineClose size={20} />) : <AiOutlineMenu size={20} />}
                </div>
            </div>

            {nav &&
                <div className={'navbar-ul-responsive-show '}>
                    <ul>
                        <li className="li">Home</li>
                        <li className="li">Resources</li>
                        <li className="li">About</li>
                        <li className="li">Contact</li>
                    </ul>
                </div>
            }

        </>
    );
}
