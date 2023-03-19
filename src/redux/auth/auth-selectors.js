const selectUser = (state) => state.auth.auth;
const getLoading = (state) => state.auth.loading;

const authSelectors = {
  selectUser,
  getLoading
};
export default authSelectors;