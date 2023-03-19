import { createSlice } from "@reduxjs/toolkit";
import postsOperations from "./posts-operations";

const { getPosts, getOnePost, addPost, updatePost, deletePost, addComment } = postsOperations;

const initialState = {
  items: [],
  chosenPost: {},
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    });
    builder.addCase(getOnePost.fulfilled, (state, { payload }) => {
      state.chosenPost = payload;
      state.loading = false;
    });
    builder.addCase(addPost.fulfilled, (state, { payload }) => {
      state.items.push(payload);
      state.loading = false;
    });
    builder.addCase(addComment.fulfilled, (state, { payload }) => {
      state.chosenPost.comments.push(payload);
      state.loading = false;
    });
    builder.addCase(updatePost.fulfilled, (state, { payload }) => {
      state.chosenPost = payload;
      state.loading = false;
    });
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    });
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        state.loading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export default postsSlice.reducer;
