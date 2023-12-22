import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "../reducers/userSlice";
import verifyUser from "../reducers/verifyEmailSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    verify: verifyUser,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
