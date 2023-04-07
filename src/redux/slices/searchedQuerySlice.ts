import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const searchedQuerySlice = createSlice({
  name: "searchQuery",
  initialState: {
    query: "",
    resultsCount: 0,
  },
  reducers: {
    updateSearchQuery: (
      state,
      action: PayloadAction<{ query: string; resultsCount: number }>
    ) => {
      state.query = action.payload.query;
      state.resultsCount = action.payload.resultsCount;
    },
  },
});

export default searchedQuerySlice.reducer;

// Export typed actions
export const { updateSearchQuery } = searchedQuerySlice.actions;
