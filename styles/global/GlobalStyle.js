import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --bgMain: ${props => props.theme.bg.main};
    --bgMainAlpha: ${props => props.theme.bg.mainAlpha};
    --bgMainInvAlpha: ${props => props.theme.bg.mainInvAlpha};
    --clrMain: ${props => props.theme.color.main};
    --clrMainAlpha: ${props => props.theme.color.mainAlpha};
    --clrOne: ${props => props.theme.color.one};
    --clrOneAlpha: ${props => props.theme.color.oneAlpha};
    --clrTwo: ${props => props.theme.color.two};
    --clrTwoAlpha: ${props => props.theme.color.twoAlpha};

    --fontTitle: ${props => props.theme.font.title};
    --fontTitleBold: ${props => props.theme.font.titleBold};
    --fontBody: ${props => props.theme.font.body};
    --fontLink: ${props => props.theme.font.link};
    --fontButton: ${props => props.theme.font.button};
    --fontInfoDetail: ${props => props.theme.font.infoDetail};
}

  
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 16px;
	font: inherit;
	font-family: var(--fontBody);
	outline: 0;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body, html {
	-webkit-overflow-scrolling: touch!important;
	-webkit-font-smoothing: antialiased;
	height: 100%;
}
html {
	width: 100%
}
body {
	line-height: 1;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	overflow-y: ${props => props.noScroll ? "hidden" : null};
	background-color: ${props => props.theme ? props.theme.bg.main  : (props.bg || null)};
	color: ${props => props.theme ? props.theme.color.main : (props.clr ? props.clr : null)}
}

*, :after, :before {
	-webkit-box-sizing: border-box;
	box-sizing: border-box
}

.cf:after, .cf:before {
	content: "";
	display: table
}
.cf:after {
	clear: both
}
.cf {
	zoom: 1
}
.clear {
	clear: both
}

img { width: 100%; }

input {
	margin: 0;
	padding: 0;
}

/*LIST*/
ol, ul, li {
	list-style: none;
}

.ul-horiz li {
	float: left;
	padding: 10px
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*  TYPOGRAPHY  */
h1, h2, h3 { font-family: ${props => props.theme.font.title}; }
h1 { font-size: 4.8em; line-height: 1.3;}
h2 { font-size: 2.4em; }
h3 { font-size: 1.5em; }
h4 { font-size: 1.2em; font-family:${props => props.theme.font.infoDetail}; line-height: 1.2em; }

strong { font-weight: bold; }

a {
	text-decoration: none;
	color: inherit;
	background-color: transparent;
	cursor: pointer
}
a:active, a:focus, a:hover {
	outline: 0;
	text-decoration: none;
	color: inherit
}

input{
	background-color: transparent;
}


/******** NProgress loading bar and spinner customization ***********/
.nprogress-busy > * { 	pointer-events: none; }
#nprogress {
		position: fixed;
	  top: 0;
    left: 0;
    z-index: 8902101;
    width: 100%;
    height: 100%;
		pointer-events: none;
		background-color: rgba(var(--bgMainAlpha), 0.7);
		background: linear-gradient(to bottom, rgba(var(--bgMainAlpha),0.97) 0%, rgba(var(--bgMainAlpha),0.76) 41%, rgba(var(--bgMainAlpha),0.57) 100%);

		.bar {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 8790210;
			width: 100%;
			height: 6px;
			background: var(--clrOne);
		}
		.spinner {
			display: block;
			position: fixed;
			top: 15px;
			right: 15px;
			z-index: 8790212;
		}
		.spinner-icon {
			width: 30px;
			height:30px;
			border: solid 3px transparent;
			border-top-color:  var(--clrOne);	
			border-left-color:  var(--clrOne);	
			border-radius: 50%;
			animation: nprogress-spinner 400ms linear infinite;
		}
}

	.nprogress-custom-parent {
		overflow: hidden;
		position: relative;
	}
	.nprogress-custom-parent #nprogress .spinner,
	.nprogress-custom-parent #nprogress .bar {
		position: absolute;
	}
	@-webkit-keyframes nprogress-spinner {
		0%   { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	}
	@keyframes nprogress-spinner {
		0%   { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	@media  (max-width: 1024px) {
		h1{font-size: 3.2em;}
	}

  @media  (max-width: 768px) {
		h1{font-size: 2.8em;}
		h2{font-size: 1.8em;}

		.hide-768 {
			display: none;
		}

		.alignCenterXS {
			text-align: center;
		}
  }
	
`;

export default GlobalStyle;