import { createSlice } from "@reduxjs/toolkit";

export const casestudySlice = createSlice({
  name: "casestudy",
  initialState: {
    casestudyData: null,
  },
  reducers: {
    setcasestudyData: (state, action) => {
      state.casestudyData = action.payload; // payload should be ai details object
    },
    resetcasestudydata: (state) => {
      state.casestudyData = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setcasestudyData, resetcasestudydata } =
casestudySlice.actions;

// Selectors
export const selectcasestudyDetails = (state) =>
  state.casestudy.casestudyData;

// The reducer
export default casestudySlice.reducer;
