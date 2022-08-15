import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAdditionData = createAsyncThunk('GetRepo/getStaredRepo', async (request) => {
    const requestOptions = {
        method: 'GET',
    };
    axios.get(
        `https://api.github.com/repos/${request?.data?.owner}/${request?.data?.repo}/stats/contributors`
    )

        .then((result) => {
            request.onSuccess(result);
            console.log('Addition ::--', result);
        })
        .catch((error) => console.log('error', error));
});
const getAdditionSlice = createSlice({
    name: 'AdditionData',
    initialState: {
        AdditionData: [],
        loading: false,
    },
    extraReducers: {
        [getAdditionData.pending]: (state, action) => {
            state.loading = true;
        },
        [getAdditionData.fulfilled]: (state, action) => {
            state.loading = false;
            state.AdditionData = action.payload;
        },
        [getAdditionData.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});
export default getAdditionSlice.reducer;