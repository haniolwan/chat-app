import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import authSlice from "./auth/authSlice"

export const store = configureStore({
  reducer: { auth: authSlice },
})
export const useAppDispatch = useDispatch
export const useAppSelector = useSelector
