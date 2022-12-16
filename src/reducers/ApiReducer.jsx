import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  isLoading: false,
};

export const fetchMovies = createAsyncThunk(
  "ApiMovies/fetchMovie",
  async () => {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows");
      return response.data;
    } catch (err) {
      console.log(err.me);
    }
  }
);

const ApiSlice = createSlice({
  name: "ApiMovies",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies.push(action.payload);
    },
  },
});

export const { saveData } = ApiSlice.actions;
export default ApiSlice.reducer;
