import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSLice";
import cardsReducer from '../features/cardsFilter'

export default configureStore({
  reducer: {
    cards: cardsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
