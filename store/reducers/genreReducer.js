import * as actionType from 'actions/actionTypes';

const initialState = {
    genresMovLabel: [],
    genresTvLabel: [],
    data: {}
};


// helper function
const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionType.FETCH_GENRES_MOV_LABEL_SUCCESS: return updateObject(state, { genresMovLabel: action.payload.genres })
        case actionType.FETCH_GENRES_TV_LABEL_SUCCESS: return updateObject(state, { genresTvLabel: action.payload.genres })

        case actionType.FETCH_SINGLE_GENRE_SUCCESS: return updateObject(state, { data: action.payload })

        default: return state;
    }
}

export default reducer;