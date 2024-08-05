import { createSlice } from "@reduxjs/toolkit";
import { fetchUserInfoAction, loginUser, logoutUser } from "./authAction";

const initialState = {
    data:
        (JSON.parse(localStorage.getItem("authUser") || "{}")) || {},
    isLoading: false,
    success: false,
    message: [],
    userInfo: {
        data: [],
        isLoading: false,
        success: false,
        message: [],
    },
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetUser: (state) => {
            state.data = {};
            localStorage.removeItem("authUser");
        },
    },
    extraReducers: (builder) => {
        builder
            // LOGIN USER
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.success = true;
                state.message = [];
            })
            .addCase(
                loginUser.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.success = action.payload?.success;
                    state.data = action.payload?.data;
                    state.message = action.payload?.message;
                }
            )
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.success = action.payload?.success;
                state.data = action.payload?.data;
                state.message = action.payload?.message;
            })
            // LOGOUT USER
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
                state.message = [];
            })
            .addCase(
                logoutUser.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.success = action.payload?.success;
                    state.data = action.payload?.data;
                    state.message = action.payload?.message;
                }
            )
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false;
                state.success = false;
            })
            // GET/USER INFO
            .addCase(fetchUserInfoAction.pending, (state) => {
                state.userInfo.isLoading = true;
            })
            .addCase(
                fetchUserInfoAction.fulfilled,
                (state, action) => {
                    state.userInfo.isLoading = false;
                    state.userInfo = action.payload;
                }
            )
            .addCase(
                fetchUserInfoAction.rejected,
                (state, action) => {
                    state.userInfo.isLoading = false;
                    state.userInfo = action.payload;
                }
            );
    },
})

export const { resetUser } = authSlice.actions;
export default authSlice.reducer;