import styled from 'styled-components';

const input = styled.div`
    width: 100%;
    position: relative;
    font-weight: normal;
    font-style: normal;
    display: inline-flex;
    /* color: rgba(0, 0, 0, 0.87); */

    input {
        margin: 0em;
        max-width: 100%;
        flex: 1 0 auto;
        outline: none;
        text-align: left;
        line-height: 1.21428571em;
        padding: 0.67857143em 1em;
        border-radius: 1em;
        transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
        transition: box-shadow 0.1s ease, border-color 0.1s ease;
        transition: box-shadow 0.1s ease, border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
        box-shadow: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        
  
        /* font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif; */
        /* background: #FFFFFF; */
        border: 1px solid rgba(34, 36, 38, 0.15);
        /* color: rgba(0, 0, 0, 0.87); */
    }

    /*--------------------
            Placeholder
    ---------------------*/


    /* browsers require these rules separate */

    input::-webkit-input-placeholder {
        color: rgba(191, 191, 191, 0.87);
    }

    input::-moz-placeholder {
        color: rgba(191, 191, 191, 0.87);
    }

    input:-ms-input-placeholder {
        color: rgba(191, 191, 191, 0.87);
    }


    /*******************************
                States
    *******************************/


    /*--------------------
            Disabled
    ---------------------*/

    .disabled,
    :not(.disabled) input[disabled] {
        opacity: 0.45;
    }

    .disabled input,
    :not(.disabled) input[disabled] {
        pointer-events: none;
    }


    /*--------------------
            Active
    ---------------------*/

    input:active,
    .down input {
        border-color: rgba(0, 0, 0, 0.3);
        background: #FAFAFA;
        color: rgba(0, 0, 0, 0.87);
        -webkit-box-shadow: none;
        box-shadow: none;
    }


    /*--------------------
            Loading
    ---------------------*/

    .loading.loading>i.icon:before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        margin: -0.64285714em 0em 0em -0.64285714em;
        width: 1.28571429em;
        height: 1.28571429em;
        border-radius: 500rem;
        border: 0.2em solid rgba(0, 0, 0, 0.1);
    }

    .loading.loading>i.icon:after {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        margin: -0.64285714em 0em 0em -0.64285714em;
        width: 1.28571429em;
        height: 1.28571429em;
        animation: button-spin 0.6s linear;
        animation-iteration-count: infinite;
        border-radius: 500rem;
        border-color: #767676 transparent transparent;
        border-style: solid;
        border-width: 0.2em;
        box-shadow: 0px 0px 0px 1px transparent;
    }


    /*--------------------
            Focus
    ---------------------*/

    .focus input,
    input:focus {
        box-shadow: none;
        color: rgba(0, 0, 0, 0.8);
        /* background: #FFFFFF; */
        /* border-color: #85B7D9; */
    }

    .focus input::-webkit-input-placeholder,
    input:focus::-webkit-input-placeholder {
        color: rgba(115, 115, 115, 0.87);
    }

    .focus input::-moz-placeholder,
    input:focus::-moz-placeholder {
        color: rgba(115, 115, 115, 0.87);
    }

    .focus input:-ms-input-placeholder,
    input:focus:-ms-input-placeholder {
        color: rgba(115, 115, 115, 0.87);
    }


    /*--------------------
            Error
    ---------------------*/

    .error input {
        background-color: #FFF6F6;
        border-color: #E0B4B4;
        color: #9F3A38;
        -webkit-box-shadow: none;
        box-shadow: none;
    }


    /* Error Placeholder */

    .error input::-webkit-input-placeholder {
        color: #e7bdbc;
    }

    .error input::-moz-placeholder {
        color: #e7bdbc;
    }

    .error input:-ms-input-placeholder {
        color: #e7bdbc !important;
    }


    /* Focused Error Placeholder */

    .error input:focus::-webkit-input-placeholder {
        color: #da9796;
    }

    .error input:focus::-moz-placeholder {
        color: #da9796;
    }

    .error input:focus:-ms-input-placeholder {
        color: #da9796 !important;
    }

`;

export default input;