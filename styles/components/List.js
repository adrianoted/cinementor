import styled from 'styled-components';


export const ListHeader = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (max-width: 580px)  { 
        h1 {
            font-size: 2em;
        }
    }
`;


export const ListTile = styled("div")`
    position:relative;
    transition: all 250ms ease-in-out;
    transform-origin: center center;
    cursor: pointer;

    a {
        display: grid;
        height: 100%;
        width: 100%;
    }

    .image {
        position: relative;
    }

    .image:after {
        content:"";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 250ms ease-in-out;
        background-color: none;
    }

    img { 
        border-radius:${props => props.theme.border.listTile};
    }

    .title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        z-index: 72;
        background: linear-gradient(to right, rgba(var(--bgMainAlpha), 1) 1%, rgba(var(--bgMainAlpha), 1) 17%, rgba(var(--bgMainAlpha), 0.56) 48%, rgba(var(--bgMainAlpha),0.30) 86%, rgba(var(--bgMainAlpha),0.16) 100%);
    }

    &:hover{
        transform: scale(1.1);
        z-index: 122;
       
        & .image:after{
            background-color: ${props => `rgba(${props.theme.bg.mainAlpha}, 0.5)`};
        }
    }

`;
