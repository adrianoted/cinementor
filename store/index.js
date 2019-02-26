import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import catalogueReducer from './reducers/catalogueReducer';
import genreReducer from './reducers/genreReducer';
import detailReducer from './reducers/detailReducer';
import searchReducer from './reducers/searchReducer';
import carouselReducer from './reducers/carouselReducer';

const rootReducers = combineReducers({
    catalogue: catalogueReducer,
    genre: genreReducer,
    search: searchReducer,
    detail: detailReducer,
    carousel: carouselReducer
});

// Use the extension redux dev tools only in development
const composeEnhancers = process.env.NODE_ENV === "development" ? composeWithDevTools : null || compose;

const initializeStore = (initialState = {}) => {
    return createStore(rootReducers, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)))
}

export default initializeStore;