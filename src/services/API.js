import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6454c188a74f994b334816db.mockapi.io/users/";

// First, create the thunk
export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (page, thunkAPI) => {
    // baseURl.searchParams.append("page", 1);
    // baseURl.searchParams.append("limit", 10);
    try {
      const response = await axios.get(`?page=${page}&&limit=3`);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTweetCount = createAsyncThunk(
  "users/followers",
  async ({ userId, followers }, thunkAPI) => {
    try {
      const response = await axios.put(userId, { followers });
      console.log(response.data);
      return { userId, followers: response.data };
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
