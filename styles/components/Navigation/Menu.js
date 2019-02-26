import styled from 'styled-components';

const Menu = styled.ul`

    &.menu, .menu {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;   
    }

    .menu.right{ margin-left: auto!important; }
    
    .menu__item { margin: 1em 0.5em; }

    .menu__link {
        font-size: 18px;
        font-family: var(--fontLink);
        display: block;
        padding: 1em;
        cursor: pointer;
        position: relative;
        text-align: center;
        transition: opacity 350ms ease-in-out 0s, color 350ms ease-in-out 0s;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .menu__link:hover,  .menu__link:focus { opacity: .6; }

    .menu__link::before,
    .menu__link::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 1px;
        transform: scale3d(0, 1, 1);
        transition: transform 0.2s;
        background: ${props => `${props.theme.color.one}`};
    }

    .menu__link::before {
        top: 0;
        transform-origin: 0 50%;
    }

    .menu__link::after {
        bottom: 0;
        transform-origin: 100% 50%;
    }

    .menu__item.active .menu__link { font-family: var(--fontTitleBold); text-transform: uppercase;}
    .menu__item.active .menu__link::before,
    .menu__item.active .menu__link::after {
        transform: scale3d(1, 1, 1);
        transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
        transition-duration: 0.4s;
    }

    .ico-github {
        fill: ${props => props.theme.color.main};
        transition: all 0.4s ease-in-out;
        &:hover { fill: ${props => props.theme.color.two}; }
    }

    @media (max-width: 768px) {
        .menu__item {
            width: 70%;            
            .react-autosuggest__container { width: 100%;  }
        }
    }

    @media (max-width: 580px) {
        .menu__item  {
            width: 100%;
        }
    }

`;

export default Menu;