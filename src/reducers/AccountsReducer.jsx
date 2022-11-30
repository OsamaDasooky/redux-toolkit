import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    customerName: "Israa Othman",
    accountNumber: "123456",
    accountType: "Savings",
  },
  {
    id: 2,
    customerName: "Ahmad Zahran",
    accountNumber: "987654",
    accountType: "Student accounts",
  },
  {
    id: 3,
    customerName: "malik dasoogi",
    accountNumber: "987654",
    accountType: "Student accounts",
  },
  {
    id: 4,
    customerName: "Omar AlOmari",
    accountNumber: "987654",
    accountType: "Student accounts",
  },
  {
    id: 5,
    customerName: "Osama dasooky",
    accountNumber: "987654",
    accountType: "Student accounts",
  },
];

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleUser: (state, action) => {
      let newState = state.filter((ele) => {
        return ele.id != action.payload;
      });
      return (state = newState);
    },
  },
});
export const accountState = (state) => state.accounts;
export const { addUser, deleUser } = accountsSlice.actions;
export default accountsSlice.reducer;
