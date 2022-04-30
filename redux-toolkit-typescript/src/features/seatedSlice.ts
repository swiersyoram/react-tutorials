import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export type table = {
  name: string;
  food: string[];
};
type addfood = {
  name: string;
  food: string;
};

interface seatedState {
  value: table[];
}

const initialState: seatedState = {
  value: [{ name: "emma", food: ["cake", "cream"] }],
};
export const seatedSlice = createSlice({
  name: "seated",
  initialState,
  reducers: {
    addSeated: (state: seatedState, action: PayloadAction<table>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action: PayloadAction<addfood>) => {
      state.value.forEach((item, index) => {
        if (item.name == action.payload.name) {
          item.food?.push(action.payload.food);
        }
      });
    },
  },
});

export const { addSeated, addFood } = seatedSlice.actions;
export default seatedSlice.reducer;
