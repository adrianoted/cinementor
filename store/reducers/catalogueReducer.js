import * as actionType from 'actions/actionTypes';

const initialState = {
    movTopRated: {},
    movUpcoming: {},
    movPopular: {},
    tvPopular: {},
    trending: {},
    trendingWeekAllFiltered: [],
    heroSelection: {}
};

{/* Example of trending object structure
initialState = {
    trending: { 
        $time: { 
            $media: [...]
        }
    }
}
*/}

// helper function
const updateObject = (oldObject, updatedProps) => {
    return {
        ...oldObject,
        ...updatedProps
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionType.FETCH_MOV_TOP_RATED_SUCCESS: return updateObject(state, { movTopRated: action.payload })
        case actionType.FETCH_MOV_UPCOMING_SUCCESS: return updateObject(state, { movUpcoming: action.payload })
        case actionType.FETCH_MOV_POPULAR_SUCCESS: return updateObject(state, { movPopular: action.payload })
        case actionType.FETCH_TV_POPULAR_SUCCESS: return updateObject(state, { tvPopular: action.payload })

        case actionType.FETCH_TRENDING_SUCCESS:
            // 1. STORE TRENDING RESULTS 

            // Alternative without updateObject function (two sublevel state)
            const trendingState = { ...state };
            const trendingStateTrending = { ...trendingState.trending };
            const timeUpdate = { ...trendingStateTrending[action.payload.time] };

            // update the last prop, the $media one, with the results
            timeUpdate[action.payload.media] = action.payload.data;

            // update the second level prop ($time)
            trendingStateTrending[action.payload.time] = timeUpdate;

            // updated the first level prop ($trending)
            trendingState.trending = trendingStateTrending;


            // 2. STORE FILTERED RESULTS (EXCLUDE PERSONS)
            // Exclude possible person records
            if (trendingStateTrending.week.all) {
                const trendingWeekAllFiltered = trendingStateTrending.week.all.results.filter(el => !el.known_for);
                trendingState.trendingWeekAllFiltered = trendingWeekAllFiltered;
            }

            return {
                ...trendingState
            }

        case actionType.SET_TRENDING_HERO_IMAGE_SUCCESS:
            // Get the hero image getting a random image between movie or tv trending week results 

            let heroResults, media_type;

            const trendingHeroState = { ...state };
            const mediaTypeFlag = action.payload.dailyMedia;

            // select an image from trending results (as fallback set top rated movie)
            if (state.trending.week[mediaTypeFlag] !== undefined) {
                heroResults = state.trending.week[mediaTypeFlag].results;
                media_type = action.payload.dailyMedia;
            } else {
                // Fallback
                heroResults = state.movTopRated;
                media_type = "movie";
            }
            // get a random image for the hero section
            const getRandomElement = heroResults[Math.floor(Math.random() * heroResults.length)];

            // add media_type prop to the result (needed for detail request);
            trendingHeroState.heroSelection = { ...getRandomElement, media_type };

            return {
                ...trendingHeroState
            }
            
        case actionType.IS_LOADED_HERO_IMAGE:

            const isLoadedHeroState = { ...state };
            const isLoadedHeroStateTrending = { ...isLoadedHeroState.trending };

            isLoadedHeroStateTrending.isLoaded = true;
            isLoadedHeroState.trending = isLoadedHeroStateTrending;

            return {
                ...isLoadedHeroState
            }

        default: return state;
    }
}

export default reducer;