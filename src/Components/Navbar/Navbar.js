import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import appStore from "../../zustand/appStore";

export default function Navbar({ windowWidth }) {
    const nav = appStore((state) => state.nav);
    const handleNav = appStore((state) => state.handleNav);


    return (
        <>
            <div className="navbar-main">
                <div className="navbar-heading">
                    <h1>REACT.</h1>
                </div>
                
                <ul className="navbar-ul">
                    <li>Home</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="navbar-icon" onClick={handleNav}>
                    {nav ? (<AiOutlineClose size={20} />) : <AiOutlineMenu size={20} />}
                </div>
            </div>

            {windowWidth < 768 && nav &&
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
