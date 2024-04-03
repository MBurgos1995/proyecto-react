/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div>
                // eslint-disable-next-line react/no-unescaped-entities, react/no-unescaped-entities
                <a href="#">Men's Fashion Store</a>
                <ul>
                    <li><a href="#">Ropa</a></li>
                    <li><a href="#">Zapatos</a></li>
                    <li><a href="#">Accesorios</a></li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;


