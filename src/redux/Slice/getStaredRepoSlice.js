import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getStaredRepo = createAsyncThunk('GetRepo/getStaredRepo', async (request) => {
    const requestOptions = {
        method: 'GET',
    };
    axios.get(
        `https://api.github.com/search/repositories?q=created:>${request?.data?.date}&sort=stars&order=desc&page=${request?.data?.page}`
    )
       
        .then((result) => {
            request.onSuccess(result);
            console.log('ReposList ::--', result);
        })
        .catch((error) => console.log('error', error));
});
const getStaredRepoSlice = createSlice({
    name: 'ReposData',
    initialState: {
        ReposData: [],
        loading: false,
    },
    extraReducers: {
        [getStaredRepo.pending]: (state, action) => {
            state.loading = true;
        },
        [getStaredRepo.fulfilled]: (state, action) => {
            state.loading = false;
            state.ReposData = action.payload;
        },
        [getStaredRepo.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});
export default getStaredRepoSlice.reducer;