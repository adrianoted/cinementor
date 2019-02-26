import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    /** Three cases: padding props with values, props without values (set default) and no padding props **/
    padding: ${props => props.pdd ? (props.pdd.length > 0 ? props.pdd : "35px") : null}; 
    margin: ${props => props.mrg ? (props.mrg.length > 0 ? props.mrg : "20px 0") : null}; 
    max-width: ${props => props.maxWidth} ;
    background-color: ${props => props.bg ? (props.bg.length > 0 ? props.bg : props.theme.bg.main) : null} ;
    
    @media (max-width: 768px) {
        padding: 0px;
    }

`;

export const Grid = styled.div`
    display: grid;

    height: ${props => props.height ? props.height : null};

    /* select template grid */
    grid-template-rows: ${props => props.rows || null};
    grid-template-columns: ${props => props.cols || null};
   
    grid-template-areas: ${props => props.areas || null};

    /* deafult is set on rows*/
    grid-auto-flow: ${props => props.autoFlow || null};    
    /* set the size of the extra rows (ex. in grid-template-rows are set two rows, all those that come later will have the size of the value passed in this props) */
    grid-auto-rows: ${props => props.autoRows || null};
    /* For grid auto columns set first auto-flow*/
    grid-auto-columns: ${props => props.autoCols || null};

    grid-gap: ${props => props.gap || null}; 

    justify-items: ${props => props.justifyItems || null};
    justify-content: ${props => props.justifyContent || null};
    align-items: ${props => props.alignItems || null};

    background-color: ${props => props.bg ? (props.bg.length > 0 ? props.bg : props.theme.bg.main) : null} ;

    margin: ${props => props.mrg || null}; 
    padding: ${props => props.pdd ? (props.pdd.length > 0 ? props.pdd : "0 10px") : null}; 


    @media (max-width: 768px) {
        grid-template-columns: ${props => props.colsXS ? "1fr" : null};
        /* margin: ${props => props.mrgXS ? (props.mrgXS.length > 0 ? props.mrgXS : "0") : null};  */
    }

    /* ======= As Child ======= */
    grid-column: ${props => props.gridCol || null};
    grid-area: ${props => props.gridArea || null};

`;

export const GridItem = styled.div`
     background-color: ${props => props.bg ? (props.bg.length > 0 ? props.bg : props.theme.bg.main) : null} ;
    
     grid-column: ${props => props.gridCol || null};
     grid-row: ${props => props.gridRow || null};
     grid-area: ${props => props.gridArea || null};

     justify-self: ${props => props.justifySelf || null};
     align-self: ${props => props.alignSelf || null};

     position: ${props => props.pos || null};

     margin: ${props => props.mrg || null}; 
     padding: ${props => props.pdd ? (props.pdd.length > 0 ? props.pdd : "0 10px") : null}; 

     text-align: ${props => props.textAlign || null};

     border-radius: ${props => props.brdRadius ? (props.brdRadius.length > 0 ? props.brdRadius : props.theme.border.box) : null};
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || null};
    flex-wrap: ${props => props.wrap || null};
    align-items: ${props => props.alignItems || null};
    align-self: ${props => props.alignSelf || null};
    justify-content: ${props => props.justifyContent || null};
    flex-basis: ${props => props.flexBasis || null};
   
    margin: ${props => props.mrg || null}; 

    /* CHILD */
    .item {
        width: ${props => props.childWidth || null};
        flex-basis: ${props => props.childBasis || null};
    }
`;