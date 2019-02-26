import React from 'react';
import Link from 'next/link';
import {PROJECT_URL} from 'constants';
import Wrapper from 'styles/components/Footer';  

const Footer = () => {
    return (
        <Wrapper>
            <p><i style={{fontStyle: "italic"}}>CineMentor</i> by Adriano Tedesco  ||  <Link href={PROJECT_URL}><a target="_blank"> View on GitHub</a></Link></p>
        </Wrapper>
    );
};

export default Footer;