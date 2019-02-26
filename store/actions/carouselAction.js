import * as actionType from 'actions/actionTypes';

export const carouselLoad = () => {
    return {
        type: actionType.CAROUSEL_LOAD
    }
}
export const carouselScrollOn = (payload) => {
    return {
        type: actionType.CAROUSEL_SCROLL_ON,
        payload
    }
}
export const carouselScrollOff = () => {
    return {
        type: actionType.CAROUSEL_SCROLL_OFF
    }
}
