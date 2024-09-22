import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';

const store = configureStore({
    reducer:{
        auth : authSlice,
        // more slices for post
    }
});

export default store;