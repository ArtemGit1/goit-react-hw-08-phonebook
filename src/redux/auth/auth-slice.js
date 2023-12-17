import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
    userData: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(authOperations.register.fulfilled, (state, action) => {
                state.userData = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.logIn.fulfilled, (state, action) => {
                state.userData = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.logOut.fulfilled, (state) => {
                state.userData = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
            })
            .addCase(authOperations.fetchCurrentUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            }).addCase(authOperations.fetchCurrentUser.rejected, (state) => {
                state.isRefreshing = false;
            })
    },
});
export default authSlice.reducer;