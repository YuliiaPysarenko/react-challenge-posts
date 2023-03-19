import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_POSTS_API;
axios.defaults.headers.post["Content-Type"] = "application/json";

const getPosts = async () => {
  const { data } = await axios.get(`/posts`);
  return data;
};

const getOnePost = async (postId) => {
  const { data } = await axios.get(`/posts/${postId}`, {
    params: {
      _embed: "comments",
    },
  });
  return data;
};

const addPost = async (data) => {
  const { title, body } = data;
  const response = await axios.post("/posts", {
    title,
    body,
  });
  return response.data;
};

const updatePost = async (postId, updatedData) => {
  const { title, body } = updatedData;
  const { data } = await axios.put(`/posts/${postId}`, {
    title,
    body,
  });
  return data;
};

const deletePost = async (postId) => {
  const response = await axios.delete(`/posts/${postId}`);
  return response;
};

const addComment = async (data) => {
  const { postId, name, email, body } = data;
  const response = await axios.post("/comments", {
    postId,
    name,
    email,
    body
  });
  return response;
};

const postsApi = {
  getPosts,
  getOnePost,
  addPost,
  updatePost,
  deletePost,
  addComment
};

export default postsApi;
