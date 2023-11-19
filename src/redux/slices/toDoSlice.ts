import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

import type { ITaskItems } from "../../types/toDo";

const initialState: ITaskItems = {
  items: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addTask: (state) => {
      state;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const { addTask } = toDoSlice.actions;
export default toDoSlice.reducer;
