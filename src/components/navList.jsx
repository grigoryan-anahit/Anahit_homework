import React from 'react';
import { NavLink } from 'react-router-dom';

const NavList = ({ navItems, isAuth, setIsAuth }) => {


    const navItemsJsx = navItems.map(item => {
        if (!isAuth && (item.content === 'Posts' || item.content === 'Friends' || item.content === 'Clients' || item.content === 'Count' )) {
            return null;
        }
        else if (isAuth && (item.content === 'Login' || item.content === 'Registration')) {
            return null;
        }
        else {
            return <li className="nav_item" key={item.id}>
                <NavLink className="nav_link"
                    to={item.href}
                    activeClassName="navActive"
                    exact={item.href === '/' ? true : false}
                >
                    {item.content}
                </NavLink>
            </li>
        }
    })

    return (
        <ul style={{ listStyle: 'none', display: 'flex' }}>
            {navItemsJsx}
            {
                isAuth && <li className="nav_item">
                    <button className="btn" onClick={(e) => setIsAuth(false)} >LogOut </button>
                </li>
            }

        </ul>
    )
}

export default NavList;
