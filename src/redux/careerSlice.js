import { createSlice } from "@reduxjs/toolkit";

export const careerSlice = createSlice({
  name: "careerPage",
  initialState: {
    careerPageData: null,
  },
  reducers: {
    setCareerPageData: (state, action) => {
      state.careerPageData = action.payload; // payload should be ai details object
    },
    resetCareerPageData: (state) => {
      state.careerPageData = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCareerPageData, resetCareerPageData } = careerSlice.actions;

// Selectors
export const selectCareerPageDetails = (state) => state.careerPage.careerPageData;

// The reducer
export default careerSlice.reducer;
