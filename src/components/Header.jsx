import React from "react";

import logoUD from '../assets/UD.png';
// import { HiUserCircle } from 'react-icons/hi';

import '../styles/Header.css';

const Header = () => {
	// const [toggle, setToggle] = useState(false);
	
    // const handleToggle = () => {
	// 	setToggle(!toggle);
	// }

    return(
        <div className="header"> 
            <img className="header__logo" src={logoUD} alt="Universidad Distrital Francisco Jose de Caldas"/>
            
            <nav className="header__nav">
                <a href="/">Home</a>
                <a href="/ComparativeGraph">Comparative graph</a>
                <a href="/ProcessGraph">Process graph</a>
            </nav>

            {/* <div className="header__menu">
                <span className="header__menu--profile" onClick={handleToggle}>
                    <HiUserCircle />
                </span>
                {toggle && <a className="header__menu--window" href="/">Cerrar Sesión</a>}
            </div> */}
        </div>
    );
}




export default Header;