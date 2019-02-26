import React from 'react';
import Menu from './Menu/Menu';
import Wrapper from 'styles/components/Navigation/SideDrawer';

const SideDrawer = (props) => {
    let attachedClasses = "Close";

    if (props.open) {
        attachedClasses = "Open";
    }

    return (
        <Wrapper className={`SideDrawer ${attachedClasses}`}>
            <Menu handleItemClick={props.handleItemClick}  activeNavItem={props.activeNavItem} />
        </Wrapper>
    );
};

export default SideDrawer;