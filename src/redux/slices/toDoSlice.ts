import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { ITaskItems } from "../../types/toDo";
import type { ITask } from "../../types/toDo";

const initialState: ITaskItems = {
  items: [{ id: "12", title: "Marsel" }],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ITask>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = toDoSlice.actions;
export default toDoSlice.reducer;
