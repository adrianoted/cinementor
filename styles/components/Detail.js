import styled from 'styled-components';

const Detail = styled.div`
    position: relative;
     p {
        line-height: 1.2;
        font-size: 1.1em;
    }
    .lazy-hero > div:first-child {
        background-position-y: -50px !important;
        border-bottom-left-radius: 400px;
        border-top-right-radius: 400px;
        
        @media (max-width: 768px) {
            border-radius: 0;
        }

    }   

/*================================================*/

    .detail-content {
        color: ${props => props.theme.color.mainInv};
        position: relative;
        z-index: 62;
        max-width: 1080px;
        margin: -15vh auto 0;
        padding: 20px;
    } 

    .detail-header {
        position: relative;
        z-index: 56;
        padding: 10px 0 10px 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-color: ${props => props.theme.color.one};
        display: flex;
        justify-content: space-between;

        h1 {
            font-size: 3.6em;
        }

        .tagline {
            font-family: ${props => props.theme.font.subtitle};
            font-size: 1.6em;
            font-style: italic;
            opacity: 0.7;
            line-height: 1.2;
        }   

        .isvg {
            width: 100%;
            height: auto;
            max-width: 100px;
            .st0 {
                fill: rgba(${props => props.theme.bg.mainAlpha}, 0.7);
            }
         
        }

        @media (max-width: 520px) {
            .isvg {  max-width: 80px;}
        }

    } 

    .detail-body {
        grid-template-columns: 300px 1fr;
        padding: 70px 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: ${props => props.theme.bg.detail};

        .info-title {
            background-color: var(--clrOne);
            padding: 10px;
        }

        .overview-row > div {
            flex-grow: 1;
            text-align: center;
            padding:5px;
        }

        .info-label {
            font-style: italic;
            margin-bottom: 10px;
        }

        .info-data {
            font-size: 1.1em;
            
            &.word-break {
              word-break: break-all; 
            }
        }

        .genre-icons{
            width: 100px;
            text-align: center;
        }

        .cast-label-box {
            min-height: 90px;
        }
    } 

    .isvg svg .st0{
        fill: rgba(var(--clrOneAlpha), 1);
    }

    .videoWrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        padding-top: 25px;
        height: 0;
        overflow: hidden;
    }
    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        .detail-content { margin-top: -30vh; padding: 10px;}
        .detail-header h1 { font-size: 2.1em;}
        .detail-header .tagline { font-size: 1.2em;}

        .detail-body { grid-template-columns:1fr; padding: 10px;}
        .detail-body .overview-row > div {  flex-basis: auto; margin-bottom: 30px;}
   
        .detail-body .overview-genre-icons { margin-bottom: 30px;}
        .detail-body .overview-genre-icons > div, .detail-body .ratings > div{ 
            flex-basis: 50%; 
            align-items: center;
        }

    }
`;

export default Detail;