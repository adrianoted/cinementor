import * as actionType from 'actions/actionTypes';

const initialState = {
    isLoaded: false,
    // flag to set the overflow hidden on the body
    isLocked: false,
    // store the id of the current carousel. This prop is used as flag for the blur filter in css 
    activeCarousel: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CAROUSEL_LOAD:
            return {
                ...state,
                isLoaded: true
            }
        case actionType.CAROUSEL_SCROLL_ON:
            return {
                ...state,
                isLocked: !state.isLocked,
                activeCarousel: state.isLocked ? "" : action.payload
            }
        case actionType.CAROUSEL_SCROLL_OFF:
            return {
                ...state,
                isLocked: false,
                activeCarousel: ""
            }
        default: return state;
    }
}

export default reducer;