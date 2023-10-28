import { configureStore } from "@reduxjs/toolkit";
import { popupReducer } from "./slices/togglePopupSlice";

const store = configureStore({
  reducer: {
    togglePopup: popupReducer,
  },
});

export default store;
