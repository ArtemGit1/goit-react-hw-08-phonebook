const selectUserIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.userData.name;
const selectUserToken = state => state.auth.token;
const selectUserRefreshing = state => state.auth.isRefreshing;
// const selectUserAuthenticated = state => state.auth.authenticated;



const authSelectors = {
    selectUserIsLoggedIn,
    selectUserName,
    selectUserToken,
    selectUserRefreshing,
};
export default authSelectors;