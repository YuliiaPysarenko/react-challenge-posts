import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { postsReducer } from "./posts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer
  },
  devTools: process.env.NODE_ENV === "development",
});
