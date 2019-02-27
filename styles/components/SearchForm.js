import styled from 'styled-components';

const SearchForm = styled.div` 

    position: relative;
    width: 100%;
    position: relative;
    font-weight: normal;
    font-style: normal;
    display: inline-flex;

    .react-autosuggest__input {
        position: relative;
        z-index:122;
        max-width: 100%;
        width: 230px;
        flex: 1 0 auto;
        transition: width .125s ease .125s;
        margin: 0;
        font-size: 1em;
        text-align: left;
        border-radius: 50rem;
        outline: none;
        padding: 0.67857143em 1em;
        box-shadow: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

        background: ${props => props.theme.bg.main};
        border: 2px solid ${props => props.theme.color.one};
        color: ${props => props.theme.color.main};
    
        &.react-autosuggest__input--open, &:focus {
            width: 350px;
        }
        &::-webkit-input-placeholder {
            color: var(--clrMain);
            font-style: italic;
            font-family: ${props => props.theme.font.body};
            opacity: 0.6;
        }
        &::-moz-placeholder {
            color: var(--clrMain);
            font-family: ${props => props.theme.font.body};
            font-style: italic;
            opacity: 0.6;
        }
        &:-ms-input-placeholder {
            color: var(--clrMain);
            font-family: ${props => props.theme.font.body};
            font-style: italic;
            opacity: 0.6;
        }
    }

    .react-autosuggest__container--open .react-autosuggest__suggestions-container {
        display: block;
        position: absolute;
        top: 16px;
        padding: 34px 15px 15px;
        width: 100%;
        z-index:120;
        transition: position .125s ease .125s;

        overflow-y: auto;
        max-height: 90vh;

        border: 2px solid ${props => props.theme.color.one};
        background: rgba(var(--bgMainAlpha), 0.88);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }


    .react-autosuggest__section-container:first-child{
        margin-bottom: 20px;
    }

    .react-autosuggest__suggestions-list{
        margin-top: 10px;
    }

    .react-autosuggest__section-title{
        padding-top: 10px;
        text-transform: uppercase;
    }

    .react-autosuggest__suggestion {
        cursor: pointer;
        padding: 15px;

        span{
            display: block;
            padding-top: 5px;
            font-size: 0.89em;
            font-style: italic;
            opacity:0.8;
        }
    }

    .react-autosuggest__suggestion:not(:first-child) {
        border-top: 1px solid ${props => props.theme.color.one};
    }

    .react-autosuggest__suggestion--highlighted {
        transition: background-color .300s ease-in-out;
         background-color: ${props => props.theme.color.one};
    }
    
    @media (max-width: 580px) {
        .react-autosuggest__container--open .react-autosuggest__suggestions-container {
            max-height: 40vh;
        }
    }

`;
export default SearchForm;