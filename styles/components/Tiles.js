import styled from 'styled-components';

export const CategoryTile = styled('a')`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url( ${props => props.bgImg || null} );
    background-size: cover;
    background-position: center center;
    transition: all 250ms ease-in-out;
    opacity: 0.4;
    transform-origin: center center; 
    transform: scale(.95);
    border-radius: ${props => props.theme.border.box};

    > * {
        border-radius: ${props => props.theme.border.box};
    }

    &:before{
        content:'';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 12;
        border-radius: 20px;
        background-color: ${props => `rgba(${props.theme.bg.mainAlpha}, 0.2)`};
    }

    &[data-category=${props => props.isSelected || 1}] {
        opacity: 1;
        transform: scale(1) !important;
        font-size: 20px;
        background-position: center center !important;
        border: 2px solid var(--clrOne);
    }

    &:hover {
        opacity: 1;
        transform: scale(1.05);
        font-size: 20px;
        background-position: center top;
    }
    h1 {
        text-transform: uppercase;
        z-index:23;
    }
`;

export const GenreTile = styled("a")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.border.box || null};
    background-color: ${props => props.bg && props.bg.length > 0 ? `rgba(${props.bg}, 0.6)` : `rgba(${props.theme.color.oneAlpha}, 0.6)`};
    opacity: 0.6;
    transition: all 150ms ease-in-out;
    
    &:hover{
        opacity: 1;
        background-color: ${props => props.bg && props.bg.length > 0 ? `rgba(${props.bg}, 1)` : `rgba(${props.theme.color.oneAlpha}, 1)`};
    }

    .isvg {
        width: 150px;
        svg .st0{
            fill: rgba(var(--clrMainAlpha), 1);
        }
    } 
    h3 {
        text-align: center;
    }
`;