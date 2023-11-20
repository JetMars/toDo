import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { ITaskItems } from "../../types/toDo";
import type { ITask } from "../../types/toDo";

const initialState: ITaskItems = {
  items: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ITask>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = toDoSlice.actions;
export default toDoSlice.reducer;
