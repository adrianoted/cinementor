import styled from 'styled-components';

const Button = styled.button`
    min-width: 100px;
    display: ${props => props.display ? props.display : "inline-block"};
	padding: ${props => props.pdd ? props.pdd : "1rem 2rem"};
	border-radius: 50px;
    font-size: 1em;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
	-moz-appearance: none;
	outline: none;
    background: none;
    font-family: var(--fontButton);
    border: 2px solid ${props => props.clr ? props.clr : props.theme.color.one};
    color: ${props => props.clr ? props.clr : props.theme.color.main};

&:hover,
&:focus {
    background: ${props => props.clr ? props.clr : props.theme.color.one};
}

&.colorOneInv {
    color: ${props => props.clr ? props.clr : props.theme.color.one};
    font-family: ${props => props.theme.font.buttonBold};
    
    &:hover, &:focus { color: ${props => props.clr ? props.clr : props.theme.color.main};}
}

@media (max-width: 580px)  { 
    font-size: 1em;
    padding: 0.5em 1em;
}

`;

export default Button;