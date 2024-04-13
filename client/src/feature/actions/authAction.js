import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../service/api';
import { signUserFailure, signUserSuccess } from "./../../feature/user/authSlice";



// API endpoints

const REGISTER_ENDPOINT = `/register`;
const LOGIN_ENDPOINT = `/login`;
const LOGOUT_ENDPOINT = `/logout`;
const GETUSERS_ENDPOINT =  `/users`

export const getAllUsers = createAsyncThunk('auth/users', async () => {
    try{
        const { data } = await axios.get(GETUSERS_ENDPOINT);
        return data;
    } catch(error) {
        console.error('Error fetching users:', error);
        throw error
    }
});

export const registerUser = createAsyncThunk('auth/register', async (userData, { dispatch }) => {
    try{
        const { data } = await axios.get(REGISTER_ENDPOINT, userData);

        dispatch(signUserSuccess(data));
        return data;
    } catch(error) {
        const errorMessage = error.response ? error.response.data.message : 'Server error';
        dispatch(signUserFailure(errorMessage));
        throw error
    }
});


export const loginUser = createAsyncThunk('auth/login', async (userData, { dispatch }) => {
    try{
        const { data } = await axios.post(LOGIN_ENDPOINT, userData);
        dispatch(signUserSuccess(data));
        return data;
    } catch(error) {
        const errorMessage = error.message ? error.response.data.message : 'Server error';
        dispatch(signUserFailure(errorMessage));
        throw error
    }
});


export const logoutUser = createAsyncThunk('auth/logout', async (userData, { dispatch }) => {
    try{
        const { data } = await axios.get(LOGOUT_ENDPOINT);
        dispatch(signUserSuccess(data));
        return data;
    } catch(error) {
        const errorMessage = error.response ? error.response.data.message : 'Server error';
        dispatch(signUserFailure(errorMessage));
        throw error
    }
});

