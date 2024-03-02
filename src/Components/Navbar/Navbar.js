import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import appStore from "../../zustand/appStore";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar({ windowWidth }) {
    const nav = appStore((state) => state.nav);
    const handleNav = appStore((state) => state.handleNav);
    console.log(windowWidth, 'windowwidth nav')

    const Menu  = () => {
        return (
            <>
                <li><Link to="#home" >Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#contact">Contacts</Link></li>
                <li><Link to="#resources">Resources</Link></li>
            </>
        )
    }

    return (
        <>
            <div className="navbar-main">
                <h1 className="heading">REACT.</h1>

                <ul className={nav && windowWidth <= 870 ? 'navbar-ul-hidden' : 'navbar-ul'}>
                    <Menu /> 
                </ul>

                <div onClick={handleNav} className="nav-icon">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <ul className={nav && windowWidth <= 870 ? "navbar-ul-responsive-show" : 'navbar-ul-responsive-show-hidden'}>
                    <h1 className="heading" >REACT.</h1>
                    <Menu /> 
                    <div className="nav-icon-on-menu"   onClick={handleNav}><AiOutlineClose size={20} /></div>

                </ul>
            </div>

        </>
    );
}