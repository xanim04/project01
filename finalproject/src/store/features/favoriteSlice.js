import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fav: [],
};

export const favoriteSlice = createSlice({
    name: "fav",
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const itemInFav = state.fav.find((item) => item.id === action.payload.id);
            if (!itemInFav) {
                state.fav.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.fav.filter((item) => item.id !== action.payload);
            state.fav = removeItem;
        },
    },
});

export const favReducer = favoriteSlice.reducer;
export const { addToFav, removeItem } =
    favoriteSlice.actions;