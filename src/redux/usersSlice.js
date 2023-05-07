import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { fetchUsers, updateTweetCount } from "../services/API";
import persistReducer from "redux-persist/es/persistReducer";
const UserSlice = createSlice({
  name: "users",
  initialState: {
    users: {
      items: [],
      isLoading: false,
      error: null,
    },
    isFetched: false,
    isFollowing: false,
    followedUsers: [],
    disableLoadmoreBtn: false,
  },
  reducers: {
    followUser(state, action) {
      state.followedUsers.push(action.payload);
    },
    unfollowUser(state, action) {
      state.followedUsers = state.followedUsers.filter(
        (user) => user !== action.payload
      );
    },
    allowFetching(state) {
      state.isFetched = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.isLoading = false;
        state.users.error = null;
        state.isFetched = true;
        state.users.items = state.users.items.concat(action.payload);
        if (action.payload.length < 3) state.disableLoadmoreBtn = true;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.users.isLoading = true;
        state.disableLoadmoreBtn = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.users.isLoading = false;
        state.users.error = action.payload;
      })
      .addCase(updateTweetCount.fulfilled, (state, action) => {
        const { userId, followers } = action.payload;
        const userIndex = state.users.items.findIndex(
          (user) => user.id === userId
        );

        if (userIndex !== -1) {
          state.users.items[userIndex].followers = followers.followers;
        }
      })
      .addCase(updateTweetCount.rejected, (state, action) => {
        state.users.isLoading = false;
        state.users.error = action.payload;
      });
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["followedUsers", "tweetsCount"],
};

export const persistedUsereReducer = persistReducer(
  persistConfig,
  UserSlice.reducer
);

export const {
  followUser,
  unfollowUser,
  updateTweetCountSuccess,
  allowFetching,
} = UserSlice.actions;
export const UsersReducer = UserSlice.reducer;
