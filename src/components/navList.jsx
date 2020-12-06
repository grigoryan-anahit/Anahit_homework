import React from 'react';
import { NavLink } from 'react-router-dom';

const NavList = ({ navItems }) => {

    const navItemsJsx = navItems.map(item => {
        return <li className="nav_item" key={item.id}>
            <NavLink className="nav_link"
                to={item.href}
                activeClassName="navActive"
                exact={item.href==='/'?true:false}
            >
                {item.content}
            </NavLink>
        </li>
    })

    return (
        <ul style={{ listStyle: 'none', display: 'flex' }}>
            {navItemsJsx}
        </ul>
    )
}

export default NavList;
