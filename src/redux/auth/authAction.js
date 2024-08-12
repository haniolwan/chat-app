import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { APIClient } from "../../helpers/api_helper";
import * as url from "../../helpers/url_helper";

const api = new APIClient();

// POST/LOGIN USER ACTION
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await api.create(url.POST_LOGIN, loginData.loginData);
      localStorage.setItem("authUser", JSON.stringify(data?.data?.User));
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  }
);

// GET/RESET LOGOUT TOKEN ACTION
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const authUser = localStorage.getItem("authUser");
      if (authUser) {
        const { data } = await api.create(url.POST_LOGOUT, '');
        localStorage.removeItem("authUser");
        return data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// GET/USER INFO ACTION
export const fetchUserInfoAction = createAsyncThunk(
  "user/getUserInfo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get(url.GET_USER_INFO);
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  }
);