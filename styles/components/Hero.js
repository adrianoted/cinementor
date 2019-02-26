import styled from 'styled-components';

const Hero = styled.div`

  width: 100%; 
  position: relative;
  z-index: 51;

  .hero-content {
    width: 100%;
    height: 102%;
    position: absolute;
    top: 0;
    left: 0;
    z-index:1110;
    background-color: rgba(var(--bgMainAlpha), 0.4);
    background: linear-gradient(to right, rgba(var(--bgMainAlpha), 1) 1%, rgba(var(--bgMainAlpha), 1) 17%, rgba(var(--bgMainAlpha), 0.56) 48%, rgba(var(--bgMainAlpha),0.16) 76%, rgba(var(--bgMainAlpha),0) 100%);

    .box {
        max-width: 60%;
        position: absolute;
        bottom: 15%;
        left: 5%;
        
        .ratings {
            max-width: 60%;
            margin-bottom: 40px;
        }

        .title {
            margin-bottom: 15px;
            font-family: var(--fontTitle); 
            font-size: 4em;
        }
        .overview{
            margin-bottom: 30px;
            font-family: ${props => props.theme.font.subtitle}; 
            font-size: 1.6em;
            font-style: italic;
            line-height: 1.2;
        }
        
        a{
          display: block;
        }

        button{
            font-size: 1.2em;
        }
        
      @media (max-width: 980px)  { 
          max-width: 100%;
          bottom: 50%;
          transform: translate(0, 50%);
          
          .title {
            font-size: 2.6em;
          }
          .overview {
            font-size: 1.3em;
          }
      }

      @media (max-width: 768px)  {
        left: 0;
        padding: 15px;

        .ratings {
          max-width: 100%;
        }
        a {
          text-align: center;
        }
       }

       @media (max-width: 580px)  { 
          .title {
            font-size: 2em;
          }
          .overview {
            font-size: 1.2em;
          }
      }

    }

    @media (max-width: 768px)  {
       background: rgba(var(--bgMainAlpha), 0.85);
    }

  } 

  .lazy-hero > div:first-child {
      background-position-x: ${props => props.isInfo ? "150px" : null};

    @media  (max-width: 1366px) {
      background-position-x: ${props => props.isInfo ? "-25%" : null};
      }

    @media (max-width: 980px)  {
      background-position-x: ${props => props.isInfo ? "0" : null};
    }
    @media (max-width: 768px)  {
      background-position-x: ${props => props.isInfo ? "center" : null};
    }
  }

`;

export default Hero;