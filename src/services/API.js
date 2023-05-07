import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://6454c188a74f994b334816db.mockapi.io/users/";

// First, create the thunk
export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (page, thunkAPI) => {
    // baseURl.searchParams.append("page", 1);
    // baseURl.searchParams.append("limit", 10);
    try {
      const response = await axios.get(`?page=${page}&&limit=3`);
 
      return response.data;
    } catch (e) {
    toast.error("Something went wrong ", {
      position: "top-right",
      autoClose: 3252,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTweetCount = createAsyncThunk(
  "users/followers",
  async ({ userId, followers }, thunkAPI) => {
    try {
      const response = await axios.put(userId, { followers });
      return { userId, followers: response.data };
    } catch (e) {
      toast.error("Something went wrong ", {
        position: "top-right",
        autoClose: 3252,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
