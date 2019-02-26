import * as actionType from 'actions/actionTypes';

const initialState = {
    data: {}
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
  
        case actionType.FETCH_MULTI_SEARCH_SUCCESS: return updateState(state, { data: action.payload})

        default: return state;
    }
}

export default reducer;