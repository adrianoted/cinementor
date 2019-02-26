import styled from 'styled-components';

const ToggleSwitchButton = styled.div`

    margin-left: 30px;
    position: relative;
    cursor: pointer;
    a {
       display: block;
    }
    .label {
        margin-top: -4px;
        margin-bottom: 10px;
        text-align: center;
        font-style: italic;
        opacity: 0.6;
     }

    .toggle-switch {
        position: relative;
    }

    .slider {
        height: 6px;
        width: 60px;
        display: inline-block;
        border-radius: 40px;
        transition: all 200ms ease-in-out;
    }

    .circle {
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        left: 0;
        top: -2px;
        z-index: 2;
        background: ${props => props.theme.color.main};
        transition: all 200ms ease-in-out;
    }

    .slider_is-off {
        background-color: ${props => props.theme.color.toggleOff};
    } 

    .slider_is-on, .circle_position-right  {
        background-color: ${props => props.theme.color.toggleOn};
    }

    .circle_position-left {
        transform: translateX(0);
    }

    .circle_position-right {
        transform: translateX(35px);
    }

`;

export default ToggleSwitchButton;