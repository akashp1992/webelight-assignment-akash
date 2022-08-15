import { configureStore } from '@reduxjs/toolkit';
import StaredRepo from '../Slice/getStaredRepoSlice';

export default configureStore({
    reducer: {
        staredRepo: StaredRepo
    },
});
