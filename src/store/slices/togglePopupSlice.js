import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  chosenCard: {},
};

const togglePopupSlice = createSlice({
  name: "togglePopup",
  initialState,
  reducers: {
    togglePopup: (state, { payload }) => {
      state.isOpen = payload;
    },
    setChosenCard: (state, { payload }) => {
      state.chosenCard = payload;
    },
  },
});

export const { togglePopup, setChosenCard } = togglePopupSlice.actions;
export const popupReducer = togglePopupSlice.reducer;
