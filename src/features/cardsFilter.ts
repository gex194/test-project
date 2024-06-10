import { createSlice } from "@reduxjs/toolkit";
import Card from "../interfaces/Card";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    filteredCards: [],
  },
  reducers: {
    filterById: (state, action) => {
      if (action.payload === "") {
        state.filteredCards = state.cards;
      }
      state.filteredCards = state.cards.filter((card: Card) =>
        card.cardId.toString().includes(action.payload)
      );
    },
    filterByEmployeeName: (state, action) => {
      if (action.payload === "") {
        state.filteredCards = state.cards;
      }
      state.filteredCards = state.cards.filter((card: Card) =>
        card.employer.includes(action.payload)
      );
    },
    setCards: (state, action) => {
      state.cards = action.payload;
      state.filteredCards = action.payload;
    },
  },
});

export const {
  filterById,
  filterByEmployeeName,
  setCards,
} = cardsSlice.actions;

export default cardsSlice.reducer;
