const getLoading = state => state.posts.loading;
const getAllPosts = state => state.posts.items;
const getChosenPost = state => state.posts.chosenPost;

const postsSelectors = {
  getLoading,
  getAllPosts,
  getChosenPost,
};
export default postsSelectors;
