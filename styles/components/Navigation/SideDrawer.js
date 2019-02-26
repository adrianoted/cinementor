import styled from 'styled-components';

const SideDrawer = styled.div`

    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 70px;
    z-index: 200;
    padding: 32px 16px;
    transition: transform 0.3s ease-out;
    background-color: rgba(${props => props.theme.bg.mainAlpha}, 0.95);

    @media (min-width: 768px) {
        display: none;
    }

    &.Open {
        transform: translateX(0);
    }

    &.Close {
        transform: translateX(-100%);
    }

    .menu{
        width: 100%;
        flex-direction: column;
    }

    .Logo {
        height: 11%;
        margin-bottom: 32px;
    }

    .react-autosuggest__input,
    .react-autosuggest__input:focus { width: 100% !important;}

`;

export default SideDrawer;