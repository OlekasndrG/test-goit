import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// Імпортуємо операцію
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
    isFollowing: false,
    followedUsers: [],
    disableLoadmoreBtn: false,
  },
  reducers: {
    followUser(state, action) {
      state.followedUsers.push(action.payload);
    },
    unfollowUser(state, action) {
      // state.users.items = state.users.items.filter(
      //   (item) => item.id !== action.payload
      // );
      state.followedUsers = state.followedUsers.filter(
        (user) => user !== action.payload
      );
    },
    // updateTweetCountSuccess: (state, action) => {
    //   const { userId, tweets } = action.payload;
    //   state.users.tweetsCount = tweets;
    //   const userIndex = state.users.items.findIndex(
    //     (user) => user.id === userId
    //   );
    //   if (userIndex !== -1) {
    //     state.users.items[userIndex].tweets = tweets;
    //   }
    // },
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.isLoading = false;
        state.users.error = null;
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
      .addCase(updateTweetCount.pending, (state) => {
        state.users.isLoading = true;
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

export const { followUser, unfollowUser, updateTweetCountSuccess } =
  UserSlice.actions;
export const UsersReducer = UserSlice.reducer;
