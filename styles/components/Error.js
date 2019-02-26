import styled from 'styled-components';

const Error = styled.div`
    display: block;
    padding: 30px;
    text-align: center;
    
    div {
        display: block;
    }

    .box {
        padding: 20px;
        margin: 30px;
    }

    .brand {
        display: block;
        max-width: 300px;
        width: 100%;
        height: auto;
        margin: 0 auto; 
    
        .st0 {transition: fill 300ms ease-in-out; fill: ${props => `rgba(${props.theme.color.twoAlpha}, 0.65)`};} 
        .st1 {fill: ${props => `rgba(${props.theme.color.mainAlpha}, 0.95)`};}          
    }

    button {
        text-transform: uppercase;
    }
`;

export default Error;