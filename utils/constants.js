require('dotenv').config();

const baseURL = process.env.BASE_URL;
const key = `?api_key=${process.env.API_KEY}`;

export const customUrl = (path, query) => query ? `${baseURL}${path}${key}&${query}` : `${baseURL}${path}${key}`;

export const IMAGE_URL = "https://image.tmdb.org/t/p";
export const LANG_CODE = `${baseURL}configuration/languages${key}`;

// CATALOGUE
export const MOV_TOP_RATED = `${baseURL}movie/top_rated${key}`
export const MOV_UPCOMING = `${baseURL}movie/upcoming${key}`
export const TRENDING_ALL_WEEK = `${baseURL}trending/all/week${key}`
export const TRENDING_MOV_WEEK = `${baseURL}trending/all/week${key}`
export const MOV_POPULAR = `${baseURL}movie/popular${key}`
export const TV_POPULAR = `${baseURL}tv/popular${key}`

// CATEGORIES
export const GENRES_MOV_LABEL = `${baseURL}genre/movie/list${key}`
export const GENRES_TV_LABEL = `${baseURL}genre/tv/list${key}`

// MULTI SEARCH
export const MULTI_SEARCH = `${baseURL}search/multi${key}`

// GITHUB PROJECT
export const PROJECT_URL = "https://github.com/adrianoted/cinementor";