import styled from 'styled-components';

const DrawerToggle = styled.div`
    width: 40px;
    height: 50px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    margin-left: auto;

    position: relative;
    transition: all 0.3s ease-in-out;
   
    &:hover{ opacity: 0.7; }
    
    &:before{
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        border: 3px solid transparent;
        border-radius: 100%;
        transition: all 0.3s ease-in-out;
    }
    
    .line{
        width: 80%;
        height: 3px;
        display: block;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        border-radius: 3px;
        background-color: ${props => props.theme.color.main};
    }

    &.is-active{ transform: rotate(45deg); }
    &.is-active:before{ border: 3px solid ${props => props.theme.color.one}; }

    &.is-active .line{ width: 20px; border-radius:3px; background-color: ${props => props.theme.color.one};}
    &.is-active .line:nth-child(2){ opacity: 0; }
    &.is-active .line:nth-child(1){ transform: translateY(10px); }
    &.is-active .line:nth-child(3){ transform: translateY(-10px) rotate(90deg); }

    @media (min-width: 768px) {
        display: none;
    }

`;

export default DrawerToggle;