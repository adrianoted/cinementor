import fetch from 'isomorphic-unfetch';


export const fetchData = async (url, page = 1) => {

    // Add page param if exists
    page = page ? "&page=" + page : null;
    url = page ? url + page : url;
    
    // Make request
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchStatus = (action, payload) => {
    return {
        type: action,
        payload
    }
}