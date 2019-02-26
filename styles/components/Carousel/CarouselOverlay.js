import styled from 'styled-components';

const CarouselOverlay = styled.div`
    opacity: 0;
    transition: all 450ms;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 12234;
    background: linear-gradient(0deg, rgba(var(--bgMainAlpha),1) 0%, rgba(var(--bgMainAlpha),1) 21%, rgba(var(--bgMainAlpha),0.3) 63%, rgba(var(--bgMainAlpha),0.7) 100%);
    padding: 10px;
    border-radius: ${props => props.theme.border.poster || null};

    &:hover {
        opacity:1;
    }

    p {
        grid-column: 1/-1;
        font-family: ${props => props.theme.font.subtitle};
        font-style: italic;
        font-size: 0.95em;
        margin-top: 5px;
    }

    .rating {
        display: grid;
        grid-template-columns: repeat(5,40px);
        justify-content: center;

        .star {
            font-size: 35px;
            width:28px;
            height: auto;
            color: ${props => props.theme.color.ratingStar};
            position: relative;
            justify-self: center;

            &::after{
                content: '';
                overflow: hidden;
                position: absolute;
                top: 0; left: 0;
            }   

            &.full:after, &.half:after{ content: '★'; }
            &.full:after{ width:100%; }
            &.half:after{  width:50%; }
        }
    } 
`;

export default CarouselOverlay;