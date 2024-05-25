import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../service/api";
import { signUserFailure, signUserSuccess } from './../../feature/user/authSlice';


// API endpoints
const REGISTER_ENDPOINT = `/auth/register`;
const LOGIN_ENDPOINT = `/auth/login`;
// const LOGOUT_ENDPOINT = `/auth/logout`;
const GETUSERS_ENDPOINT = `/auth/users`;

export const getAllUsers = createAsyncThunk('auth/users', async () => {
  try {
    const { data } = await instance.get(GETUSERS_ENDPOINT);
    return data;
  } catch (error) {
    // Handle error (e.g., log it, dispatch an action, etc.)
    console.error("Error fetching users:", error);
    throw error;
  }
}); 

export const registerUser = createAsyncThunk("auth/register", async (userData, { dispatch }) => {
  try {
    const { data } = await instance.post(REGISTER_ENDPOINT, userData);
    // Foydalanuvchi ro'yxatdan o'tgan bo'lsa
    dispatch(signUserSuccess(data));
    return data;
  } catch (error) {
    // Xatolik bo'lganini foydalanuvchiga ko'rsatish
    const errorMessage = error.response ? error.response.data.message : "Server error";
    dispatch(signUserFailure(errorMessage));
    throw error;
  }
});

export const loginUser = createAsyncThunk("auth/login", async (userData, { dispatch }) => {
  try {
    const { data } = await instance.post(LOGIN_ENDPOINT, userData);
    dispatch(signUserSuccess(data))
    return data;
  } catch (error) {
    const errorMessage = error.message ? error.response.data.message : 'Server error';
    dispatch(signUserFailure(errorMessage))
    throw error;
  }
});

// export const logoutUser = createAsyncThunk("auth/logout", async ({ dispatch }) => {
//   try {
//     const { data } = await instance.post(LOGOUT_ENDPOINT);
//     dispatch(signUserSuccess(data))
//     return data;
//   } catch (error) {
//     const errorMessage = error.message ? error.response.data.message : 'Server error';
//     dispatch(signUserFailure(errorMessage))
//     throw error;
//   }
// });
