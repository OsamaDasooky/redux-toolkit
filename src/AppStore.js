import { configureStore } from "@reduxjs/toolkit";

import AccountsReducer from "./reducers/AccountsReducer";
import CounterReducer from "./reducers/CounterReducer";
import ApiReducer from "./reducers/ApiReducer";

const store = configureStore({
  reducer: {
    accounts: AccountsReducer,
    counter: CounterReducer,
    movies: ApiReducer,
  },
});

export default store;
