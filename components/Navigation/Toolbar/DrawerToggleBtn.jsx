import React from 'react';
import DrawerToggle from 'styles/components/Navigation/DrawerToggle';

const DrawerToggleBtn = (props) => {
    let classes = "";

    if (props.isOpen) {
        classes = "is-active";
    }

    return (
        <DrawerToggle onClick={props.toggleHandler} className={classes} >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </DrawerToggle>
    )
}

export default DrawerToggleBtn;