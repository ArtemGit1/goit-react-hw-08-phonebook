import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
    set: token => {
        instance.defaults.headers['Authorization'] = token;
    },
    unset: () => {
        instance.defaults.headers['Authorization'] = '';
    },
};
//Registration user//
const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await instance.post(`/users/signup`, credentials);
        token.set(data.token);
        console.log('credentials', data)
        return data;
    } catch (error) {

    }
});

//LoginIn user//
const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await instance.post(`/users/login`, credentials);
        token.set(data.token);
        return data;
    } catch (error) {

    }
});

//LogOut user//
const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
    try {
        await instance.post(`/users/logOut`);
        token.unset();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

//Back user from LocalStoredge - refresh//

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
        return thunkAPI.rejectWithValue('Please register...');
    }
    token.set(persistedToken);
    try {
        const { data } = await instance.get('/users/current');
        return data;
    } catch (error) { }
})


const authOperations = { register, logIn, logOut, fetchCurrentUser };
export default authOperations;