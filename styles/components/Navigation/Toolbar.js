import styled from 'styled-components';

const Toolbar = styled.nav`
    padding: 25px; 
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 86px;
    z-index: 50001;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 350ms ease-in-out 0s;
    
    color: ${props => props.theme.color.main};
    background-color: ${props => `rgba(${props.theme.bg.mainAlpha}, 0.85)`};

    > .menu {
        width: 90%;
    }

    .brand {
        width: 150px;
        height: auto;
        margin: 0 20px 0 0; 
    
        .isvg { 
            .st0 {transition: fill 300ms ease-in-out; fill: ${props => `rgba(${props.theme.color.twoAlpha}, 0.65)`};}
            .st1 {fill: ${props => `rgba(${props.theme.color.mainAlpha}, 0.95)`};}
            
            .first {
                opacity:0.5;
            }
            
            &:hover .st0 {fill: ${props => `rgba(${props.theme.color.twoAlpha}, 1)`};}
        }
    }


     @media (max-width: 767px) {
        height: auto;
        padding: 10px 20px;
        
        .menu{
            display: none !important;
        }
     }

`;

export default Toolbar;