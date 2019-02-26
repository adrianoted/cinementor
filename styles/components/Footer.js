import styled from 'styled-components';

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    padding: 30px;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
   
    > * {
        color: rgba(var(--clrMainAlpha), 0.5);
    }

    a {
        transition: all 250ms ease-in-out;
        border-bottom: 1px solid rgba(var(--clrMainAlpha), 0.5);
    }
    &:hover a {
        color: rgba(var(--clrMainAlpha), 1);
   
    }
`;

export default Footer;