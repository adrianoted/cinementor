
export const limitCharTitle = (title, limitChar = 70) => {
    charCount = 0;
    const ATitle = [];
    let ATitleSplit, charCount, newTitle;
    ATitleSplit = title.split(' ');
    ATitleSplit.forEach(el => {
        charCount = charCount + el.length;
        charCount <= limitChar ? ATitle.push(el) : null;
    });
    newTitle = ATitle.join(' ') + '...';
    return newTitle;
}

// Calculates an approximate percentage based on the popularity score divided by 360 (which corresponds to the degrees of circulare chart)
export const calcPopularityPercentage = (value) => {
    let transformedValue;

    // Round the value and add an extra delta value
    value = Math.ceil(value) + 80;

    // If there is no value retunr null
    if (value <= 0) {
        return null;
    }

    // This is an approximate calc.We can not have a score that goes beyond the degrees of the circle 
    // Therefore the maximum value will be 320, to not close the circle completely
    switch (true) {

        case value >= 270: transformedValue = 302;
            break;

        case value >= 300: transformedValue = 346;
            break;

        default:
            transformedValue = value;
            break;
    }

    //Get a percentage value from the circle degrees
    const getPercentage = Number(((transformedValue / 360) * 10).toFixed(2));
    return getPercentage;
}

export const formatCurrency = (el) => {
    return parseFloat(el).toLocaleString('en-EN', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
}


export const formatDate = (date, lang="en-US") => {
    if(date === "" || date === undefined) return; 
    const rawFormatDate = new Date(date);
    const formatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const finalFormatDate = rawFormatDate.toLocaleDateString(lang, formatOptions);
    return finalFormatDate;
}