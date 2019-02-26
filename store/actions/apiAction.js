require('dotenv').config();
// import fetch from 'isomorphic-unfetch';
import * as actionType from './actionTypes';
import * as helper from 'utils/helpers';
import * as constant from 'constants';


// ==================  
// MULTI SEARCH
// ==================  
export const fetchMultiSearch = (value) => {
    return async (dispatch) => {
        const url = `${constant.MULTI_SEARCH}&query=${value}`;
        const data = await helper.fetchData(url)
        await dispatch(helper.fetchStatus(actionType.FETCH_MULTI_SEARCH_SUCCESS, data));
    }
};


// ==================  
// CATALOGUE
// ==================  
export const fetchMovTopRated = (page) => {
    return async (dispatch) => {
        const url = constant.MOV_TOP_RATED;
        const data = await helper.fetchData(url, page)
        await dispatch(helper.fetchStatus(actionType.FETCH_MOV_TOP_RATED_SUCCESS, data));
    }
};

export const fetchMovUpcoming = (page) => {
    return async (dispatch) => {
        const url = constant.MOV_UPCOMING;
        const data = await helper.fetchData(url, page)
        await dispatch(helper.fetchStatus(actionType.FETCH_MOV_UPCOMING_SUCCESS, data));
    }
};

export const fetchMovPopular = (page) => {
    return async (dispatch) => {
        const url = constant.MOV_POPULAR;
        const data = await helper.fetchData(url, page)
        await dispatch(helper.fetchStatus(actionType.FETCH_MOV_POPULAR_SUCCESS, data));
    }
};
export const fetchTvPopular = (page) => {
    return async (dispatch) => {
        const url = constant.TV_POPULAR;
        const data = await helper.fetchData(url, page)
        await dispatch(helper.fetchStatus(actionType.FETCH_TV_POPULAR_SUCCESS, data));
    }
};

export const fetchTrending = (time, media, page) => {
    return async (dispatch) => {

        const getPathname = `trending/${media}/${time}`;
        const url = constant.customUrl(getPathname);

        const data = await helper.fetchData(url, page);
        const payload = { data, time, media };
        await dispatch(helper.fetchStatus(actionType.FETCH_TRENDING_SUCCESS, payload));

    }
};


// Select a random image from movie or tv trending week results (alternated by day)  
export const setTrendingHeroImage = () => {
    return async (dispatch) => {

        // get the number of the current day 
        const getDay = new Date().getDay();

        // switch between odd or even 
        let dailyMedia = getDay % 2 === 0 ? "movie" : "tv";

        // pass the payload to the reducer
        const payload = { dailyMedia };
        await dispatch(helper.fetchStatus(actionType.SET_TRENDING_HERO_IMAGE_SUCCESS, payload));
    }
};

export const isLoadedHeroImage = () => ({ type: actionType.IS_LOADED_HERO_IMAGE });

// ==================  
// CATEGORIES
// ==================  
export const fetchGenresMovLabel = () => {
    return async (dispatch) => {
        const url = constant.GENRES_MOV_LABEL
        const data = await helper.fetchData(url)
        await dispatch(helper.fetchStatus(actionType.FETCH_GENRES_MOV_LABEL_SUCCESS, data));
    }
};

export const fetchGenresTvLabel = () => {
    return async (dispatch) => {
        const url = constant.GENRES_TV_LABEL
        const data = await helper.fetchData(url)
        await dispatch(helper.fetchStatus(actionType.FETCH_GENRES_TV_LABEL_SUCCESS, data));
    }
};

export const fetchSingleGenre = (cat, id, page) => {
    return async (dispatch) => {

        // switch bewtween movie and tv, based on input select
        const genre = `discover/${cat}`;
        const param = `with_genres=${id}`;

        const url = constant.customUrl(genre, param);
        const data = await helper.fetchData(url, page);
        await dispatch(helper.fetchStatus(actionType.FETCH_SINGLE_GENRE_SUCCESS, data));
    }
};


// ==================  
// DETAIL
// ==================  
export const fetchDetail = (cat, id) => {
    return async (dispatch) => {
        const getPathname = `${cat}/${id}`;
        const url = constant.customUrl(getPathname);
        const data = await helper.fetchData(url + '&append_to_response=videos,images,credits&include_image_language=en,null');
        await dispatch(helper.fetchStatus(actionType.FETCH_DETAIL_SUCCESS, data));
    }
};

export const fetchLanguageCode = () => {
    return async (dispatch) => {
        const url = constant.LANG_CODE
        const data = await helper.fetchData(url)
        await dispatch(helper.fetchStatus(actionType.FETCH_LANGUAGE_CODE_SUCCESS, data));
    }
};