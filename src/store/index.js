import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';
import BagSlice from './BagSlice';

const appStore=configureStore({
    reducer: {
        items:itemSlice.reducer,
        bag: BagSlice.reducer,
    }
});

export default appStore;