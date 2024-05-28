import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../service/api";
import { signUserFailure, signUserStart, signUserSuccess } from './../../feature/user/authSlice';


// API endpoints
const REGISTER_ENDPOINT = `/auth/register`;
const LOGIN_ENDPOINT = `/auth/login`;
const LOGOUT_ENDPOINT = `/auth/logout`;


const handleApiError = (error,dispatch,failureAction) => {
  const errorMessage = error.response ? error.response.data.message : "Server error";
  dispatch(failureAction(errorMessage));
  throw errorMessage;
}


export const registerUser = createAsyncThunk("auth/register", async (userData, { dispatch }) => {
  dispatch(signUserStart());
  try {
    const { data } = await instance.post(REGISTER_ENDPOINT, userData);
    // Foydalanuvchi ro'yxatdan o'tgan bo'lsa
    dispatch(signUserSuccess(data));
    return data;
  } catch (error) {
    // Xatolik bo'lganini foydalanuvchiga ko'rsatish
  return handleApiError(error,dispatch, signUserFailure)
  }
});

export const loginUser = createAsyncThunk("auth/login", async (userData, { dispatch }) => {
  dispatch(signUserStart());
  try {
    const { data } = await instance.post(LOGIN_ENDPOINT, userData);
    dispatch(signUserSuccess(data))
    return data;
  } catch (error) {
    return handleApiError(error,dispatch, signUserFailure)
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  try {
await instance.post(LOGOUT_ENDPOINT);

document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
dispatch(signUserSuccess(null))
    return null;
  } catch (error) {
    return handleApiError(error,dispatch, signUserFailure)
  }
});



