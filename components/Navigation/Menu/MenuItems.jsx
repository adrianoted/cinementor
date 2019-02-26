import React from 'react';
import Link from 'next/link';

const MenuItems = (props) => {
    const { link, name, label, activeItem, handleItemClick } = props;

    let activeClass = activeItem === name ? "active" : "";

    return (
        <li
            className={`${activeClass} menu__item`}
            onClick={() => handleItemClick(name)}
        >
            <Link prefetch href={link} >
                <a className="menu__link">{label}</a>
            </Link >
        </li>
    )
};

export default MenuItems;