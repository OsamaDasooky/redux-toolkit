import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const ApiSlice = createSlice({
  name: "ApiMovies",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state = state.push(action.payload);
    },
  },
});
export const { saveData } = ApiSlice.actions;
export default ApiSlice.reducer;
