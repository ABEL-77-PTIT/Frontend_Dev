import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../../../app/Services/MovieApp/MovieApi";
import { APIKey } from "../../../../app/Services/MovieApp/MovieApiKey";

//ham createAsyncThunk nhan ve ba tham so, dung de xu ly cac yeu cau bat dong bo nhuw lay du lieuj..
// a string action type value, khi gennerate thi tao ra redux action type constant
// => no tao ra 3 loai action type sau: pending, fulfiled, rejected.
// thus hai la payloadCreator callback => nhan ve laf mot promise().
//an options obj.
// su dung .then() .catch() de lay haay la...
export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",  //action name
    async (term) => {
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${term}&type=movie`
        );
        return response.data;
    }
);
// return a promise()
export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${term}&type=series`
        );
        return response.data;
    }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
        const response = await movieApi.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        );
        return response.data;
    }
);

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectMovieOrShow: payload };
        },
    },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
