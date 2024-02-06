/* Navbar.jsx */

import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import appStore from "../../zustand/appStore";

export default function Navbar({ windowWidth }) {
    const nav = appStore((state) => state.nav);
    const handleNav = appStore((state) => state.handleNav);

    return (
        <>

            <div className="navbar-main">
                <h1 className="heading">REACT.</h1>

                <ul className={nav  && windowWidth <= 768 ? 'navbar-ul-hidden' : 'navbar-ul'}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Resources</li>
                </ul>

                <div onClick={handleNav} className="nav-icon">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <ul  className=  { nav && windowWidth <=768 ? "navbar-ul-responsive-show" : 'navbar-ul-responsive-show-hidden'}>
                    <h1 className="heading" >REACT.</h1>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Resources</li>

                </ul>
            </div>

        </>
    );
}
