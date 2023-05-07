export const getAllUsers = (state) => state.users.users.items;
export const getIsError = (state) => state.users.users.error;
export const getIsLoading = (state) => state.users.users.isLoading;
export const getFollowedUsers = (state) => state.users.followedUsers;
export const getLoadMoreBtnStatus = (state) => state.users.disableLoadmoreBtn;
export const getIsFetched = (state) => state.users.isFetched;
