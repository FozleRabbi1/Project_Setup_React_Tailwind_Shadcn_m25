import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    toggleCompleted: (state, action) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;

      state.todos.sort(
        (a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0)
      );
      // state.todos.sort((a, b) => {
      //   const aCompleted = a.isCompleted ?? false;
      //   const bCompleted = b.isCompleted ?? false;
      //   return Number(aCompleted) - Number(bCompleted);
      // });
    },

    // filterByPriority: (state, action) => {
    //   state.todos = state.todos.filter(
    //     (item) => item.priority === action.payload
    //   );
    // },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
