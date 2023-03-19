import { createAsyncThunk } from "@reduxjs/toolkit";
import postsApi from "./posts-api";

const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  const response = await postsApi.getPosts();
  return response;
});

const getOnePost = createAsyncThunk(
  "posts/getOnePost",
  async (postId, thunkAPI) => {
    const response = await postsApi.getOnePost(postId);
    return response;
  }
);

const addPost = createAsyncThunk("posts/addPost", async ({ title, body }) => {
  const post = {
    title,
    body,
  };
  try {
    const response = await postsApi.addPost(post);
    return response;
  } catch (error) {}
});

const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({postId, data}) => {
    try {
      const response = await postsApi.updatePost(postId, data);
      return response;
    } catch (error) {}
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId, { rejectWithValue, getState }) => {
    try {
      const status = await postsApi.deletePost(postId);

      if (status === 200) {
        const items = getState().posts.items;
        const filteredItems = items.filter((item) => item.id !== postId);

        return filteredItems;
      } else {
        rejectWithValue("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const addComment = createAsyncThunk("comments/addComment", async (comment) => {
  try {
    const response = await postsApi.addComment(comment);
    return response.data;
  } catch (error) {}
});

const postsOperations = {
  getPosts,
  getOnePost,
  addPost,
  updatePost,
  deletePost,
  addComment
};

export default postsOperations;
