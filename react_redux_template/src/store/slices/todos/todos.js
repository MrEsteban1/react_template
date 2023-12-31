import { createSlice } from '@reduxjs/toolkit';

export const templateSlice = createSlice({
    name: 'name',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = templateSlice.actions;