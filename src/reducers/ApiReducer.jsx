import { createSlice } from "@reduxjs/toolkit";
// state 
const initialState = [];
const ApiSlice = createSlice({
  name: "ApiMovies",
  initialState,
  reducers: {
    // this method to save data in state 
    saveData: (state, action) => {
      state = state.push(action.payload);
    },
  },
});
export const { saveData } = ApiSlice.actions;
export default ApiSlice.reducer;
