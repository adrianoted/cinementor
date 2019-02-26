import * as actionType from 'actions/actionTypes';

const initialState = {
    data: {},
    lang: {}
};


// helper function
const updateState = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
  
        case actionType.FETCH_DETAIL_SUCCESS: return updateState(state, { data: action.payload })
        case actionType.FETCH_LANGUAGE_CODE_SUCCESS: return updateState(state, { lang: action.payload })

        default: return state;
    }
}

export default reducer;