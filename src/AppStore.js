import { configureStore } from "@reduxjs/toolkit";

import AccountsReducer from "./reducers/AccountsReducer";
import CounterReducer from "./reducers/CounterReducer";

const store = configureStore({
  reducer: {
    accounts: AccountsReducer,
    counter: CounterReducer,
  },
});

export default store;
