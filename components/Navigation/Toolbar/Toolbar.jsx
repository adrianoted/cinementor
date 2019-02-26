import React from 'react'
import Link from 'next/link'
import SVG from 'react-inlinesvg';
import Wrapper from 'styles/components/Navigation/Toolbar';
import Menu from '../Menu/Menu';
import DrawerToggleBtn from './DrawerToggleBtn';

const Toolbar = (props) => {

    return (
        <Wrapper>
            <Link href="/"><a className="brand"><SVG src={`/static/img/brand_cinementor.svg`} /></a></Link>
            <DrawerToggleBtn toggleHandler={props.toggleHandler} isOpen={props.isOpen}/>
            <Menu handleItemClick={props.handleItemClick} activeNavItem={props.activeNavItem} />
        </Wrapper>
    )

}
export default Toolbar;