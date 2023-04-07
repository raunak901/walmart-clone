import { configureStore } from "@reduxjs/toolkit";
import searchedQuerySlice from "./slices/searchedQuerySlice";

const store = configureStore({
  reducer: {
    searchedQuery: searchedQuerySlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
