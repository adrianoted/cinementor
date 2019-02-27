import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';


const Backdrop = styled.div`
    width: 100%;
    display: grid;
    align-content: center;
    justify-items: center;
    
    position: ${props => props.pos ? props.pos : "relative"};

    background:
        radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0,
        radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 50px 50px,
        radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 50px 0,
        radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 50px,
        radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 50px 0,
        radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 100px 50px,
        radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0,
        radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 50px 50px,
        linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0,
        linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0;
    background-color: #300;
    background-size: 100px 100px;
`;


const BackdropHome = styled(Backdrop)`
    min-height: 80vh;
    background-color: #300;
    background-size: 100px 100px;

    &:after {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-color: rgba( ${props => props.theme.bg.mainAlpha}, 0.2);
    }

    .isvg {
        max-width: 500px;
        width:100%;
        display: block;
        position:relative;
        z-index: 78;
        
        .st0{
            fill: ${props => props.theme.color.one};
        }
    }
`;



const BackdropDetail = styled(Backdrop)`
    min-height: 80vh;
    border-bottom-left-radius: 400px;
    border-top-right-radius: 400px;
  
    background-color: #300;
    background-size: 100px 100px;

    &:after {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-color: rgba( ${props => props.theme.bg.mainAlpha}, 0.2);
    }

    .isvg {
        max-width: 500px;
        width:100%;
        display: block;
        position:relative;
        z-index: 78;
    }

    @media (max-width: 768px) {
        align-content: baseline;
        border-bottom-left-radius: 0;
        border-top-right-radius: 0; 
        .isvg{
            max-width: 300px;
        }
    }

`;

const BackdropTile = styled(Backdrop)`
    height: 100%;
    border-radius: ${props => props.theme.border.listTile};

    &:after {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-color: rgba( ${props => props.theme.bg.mainAlpha}, 0.5);
    }
    
    .isvg {
        max-width: 150px;
        width:100%;
        display: block;
        position:relative;
        z-index: 78;
       
	    .st0{
            fill: ${props => props.theme.color.one};
        }
    }

`;

const Poster = styled.div`
    background-color: ${props => props.theme.bg.mainInv};
    height: 100%;

    .isvg{
        display: grid;
        height: 100%;
        align-items: center; 
        .st0{
            fill: ${props => props.theme.color.one};
        }
    }
`;

const Actor = styled.div`
    background-color: rgba(${props => props.theme.bg.mainAlpha}, 1);
    width: 100%;
    max-width: 300px;
    height: 100%;
    padding-top: 25%; 
    padding-bottom: 25%;  
    
    .isvg{
        display: grid;
        height: 100%;
        align-items: center; 
        .st0{
            fill: ${props => props.theme.color.one};
        }
    }
`;

const Placeholder = (props) => {
    const { type, cat, position, noIcon } = props;

    const categoryIcon = cat === "movie" ? "filmcamera" : "tv";

    switch (type) {
        case "backdropHome": return <BackdropHome><SVG src={`/static/img/icons-placeholders/ico-${categoryIcon}.svg`} />{props.children}</BackdropHome>; break;
        case "actor": return <Actor><SVG src={`/static/img/icons-placeholders/ico-cinema-chair.svg`} /></Actor>; break;
        case "poster": return <Poster><SVG src={`/static/img/icons-placeholders/ico-ciak.svg`} /></Poster>; break;
        case "backdropDetail": return <BackdropDetail><SVG src={`/static/img/icons-placeholders/ico-${categoryIcon}.svg`} /></BackdropDetail>; break;
        case "backdropTile":
            return (
                <BackdropTile pos={position}>
                    { !noIcon && <SVG src={`/static/img/icons-placeholders/ico-${categoryIcon}.svg`} /> }
                </BackdropTile>
            ); break;

        default: break;
    }
};

export default Placeholder;