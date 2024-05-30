import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../service/api";
import { signUserStart, signUserFailure, signUserSuccess, logoutUser } from './../../feature/user/authSlice';

// API endpoints
const REGISTER_ENDPOINT = `/auth/register`;
const LOGIN_ENDPOINT = `/auth/login`;
const LOGOUT_ENDPOINT = `/auth/logout`;

// Utility function for handling errors
const handleApiError = (error, dispatch, failureAction) => {
  const errorMessage = error.response ? error.response.data.message : "Server error";
  dispatch(failureAction(errorMessage));
  throw errorMessage;
};

// Register user
export const registerUser = createAsyncThunk("auth/register", async (userData, { dispatch }) => {
  dispatch(signUserStart());
  try {
    const { data } = await instance.post(REGISTER_ENDPOINT, userData);
    dispatch(signUserSuccess(data));
    return data;
  } catch (error) {
    return handleApiError(error, dispatch, signUserFailure);
  }
});

// Login user
export const loginUser = createAsyncThunk("auth/login", async (userData, { dispatch }) => {
  dispatch(signUserStart());
  try {
    const { data } = await instance.post(LOGIN_ENDPOINT, userData);
    dispatch(signUserSuccess(data));
    return data;
  } catch (error) {
    return handleApiError(error, dispatch, signUserFailure);
  }
});

// Logout user
export const logout = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  try {
    await instance.post(LOGOUT_ENDPOINT);
    // Clear the cookie by setting its expiration to a past date
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    dispatch(signUserSuccess(null));
    dispatch(logoutUser()) // Clear user state upon successful logout
    return null;
  } catch (error) {
    return handleApiError(error, dispatch, signUserFailure);
  }
});
