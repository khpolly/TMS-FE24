import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoggedIn: false,
        name: "",
        id: ""
    },
    reducers: {
        userLoggedIn(state, action) {
            state.isLoggedIn = true;
            state.name = action.payload.name;
            state.id = action.payload.id;
        },
        userLoggedOut(state, action) {
            state.isLoggedIn = false;
            state.name = "";
            state.id = "";
        },
    },
})

export const { userLoggedIn, userLoggedOut } = usersSlice.actions;

export default  usersSlice.reducer
