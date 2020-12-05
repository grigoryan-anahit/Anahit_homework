import React from 'react';
import logo from '../images/logo.png';
import NavList from '../components/navList';

const Nav = (props) => {
    const imgAlt = 'Logo';
    return (

        <nav className="nav">
            <div className="navbar_brand" onClick={props.toggleAsideOpen}>
                <img src={logo} alt={imgAlt} />
            </div>
            <NavList navItems={props.navItems} />
        </nav>
    )
}

export default Nav;