import styled from 'styled-components';

const Overlay = styled.div`
    position: ${props => props.pos || 'fixed'};
    mix-blend-mode: ${props => props.blend || null}; 
    background-color: ${props => props.bgDefault ? `rgba(${props.theme.bg.mainAlpha}, ${props.alpha || "0.75"})` : null};
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
 
    @supports not (mix-blend-mode: overlay) {
        background-color: ${props => `rgba(${props.theme.bg.mainAlpha}, 0.2)` || null};
    } 

`;

export default Overlay;