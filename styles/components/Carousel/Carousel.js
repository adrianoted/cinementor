import styled from 'styled-components';

const Carousel = styled.div`
   margin-bottom: 70px;
   position: relative; 
   margin-top: 50px;
   
   .zIndex {
     z-index: 143;
   }
   
   .slick-list {
      padding: 38px !important;
   }

   .slick-slide {
      transition: 450ms transform,  450ms box-shadow;
      transform-origin: center left;
      position:relative;
      cursor: pointer;
      border-radius: ${props => props.theme.border.poster || null};

      &:not(:last-child) {
        margin-right:10px;
      }

      &:after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 150;
        top: 0;
        display: flex;
      }

      &:hover {
        transform: scale(1.15);
        box-shadow: 0px 0px 15px rgba(var(--clrTwoAlpha), 1);
      }
  }

  .slick-slide:hover ~ .slick-slide {
      transform: translate3d(35px, 0, 0) ;
    }

  .slick-arrow {
      display:flex !important;
      z-index: 151;
      width: 60px;
      align-items: center;
      height: 90%;
      text-align: center;
      background-color: rgba(var(--bgMainAlpha), 0.85);
      transition: 300ms all;
      
      &:before{
          padding: 20px;
          transition: 300ms all;
      }
      &:hover{
        background-color: rgba(var(--bgMainAlpha), 1);
      }

      &.slick-prev:before, &.slick-next:before{
        font-size: 40px;
        padding: 12px;
        color: ${props => props.theme.color.carouselArrow};
      }

      /*Icons: Black Rightwards Equilateral Arrowhead - U+2B9E */
      &.slick-prev{
        border-right: 3px solid ${props => props.theme.color.carouselArrow};
      }
      &.slick-next{
        border-left: 3px solid ${props => props.theme.color.carouselArrow};
      }

      @media (max-width: 768px)  {
        display: none !important;
      }
  }

`;

export const Poster = styled.div`
  width: ${props => props.width || "230px"} !important;
  height: ${props => props.heigth || "345px"} !important;
  overflow: hidden;
  
  border-radius: ${props => props.theme.border.poster || null};
`;


export default Carousel;