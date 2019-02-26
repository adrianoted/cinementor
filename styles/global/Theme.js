{/* Theme variables
    Alpha prop allows to change alpha channel in rgb mode (example for background color).
*/}

const defaultColors = {
    background: "5,5,24",
    foreground: "248, 247, 242",
}


// Color selection
const color = { 
    first: "rgb(204, 56, 67)", // red
    firstAlpha: "204, 56, 67",
    second: "#0098EB", // light blue
    secondAlpha: "0,152,235",
    third: "#fecd35", // yellow
    thirdAlpha: "254,205,53",
}

// Fonts selection: first font si self-hosted: you have to save as css variable to avoid FOUC issue
const font = {
    first: 'Nexa_Light, sans-serif',
    firstBold: 'Nexa_Bold, sans-serif',
    second: 'Lato, sans-serif'
}

// FINAL OBJECT
const theme = {
    bg:{
        main: `rgb(${defaultColors.background})`,
        mainAlpha: defaultColors.background,
        mainInv: `rgb(${defaultColors.foreground})`,
        mainInvAlpha: defaultColors.foreground,
        catTilesAlpha: defaultColors.foreground,
        detail: `rgb(${defaultColors.foreground})`,
    },

    color:{
        main: `rgb(${defaultColors.foreground})`,
        mainAlpha: defaultColors.foreground,
        mainInv: `rgb(${defaultColors.background})`,
        mainInvAlpha: defaultColors.background,
        
        one: color.first,
        oneAlpha: color.firstAlpha,
        two: color.second,
        twoAlpha: color.secondAlpha,
        
        ratingStar: color.third,
        toggleOff: color.first,
        toggleOn: color.third,
        carouselArrow: color.first
    },

    font: {
        title: font.first,
        titleBold: font.firstBold,
        subtitle: font.second,
        body: font.second,
        link: font.first,
        button: font.first,
        buttonBold: font.firstBold,
        infoDetail: font.firstBold,
    },

    border: {
        poster: "20px",
        box: "20px",
        listTile: "10px",
    }
};

export default theme;