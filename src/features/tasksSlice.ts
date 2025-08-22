import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { Tasks } from '~/interface/task'
import { fetchTasks } from './tasksThunk';

interface TasksState {
  todos: Tasks[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: TasksState = {
  todos: [],
  loading: "idle"
};

export const tasksSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = "pending"
    })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Tasks[]>) => {
        state.loading = "succeeded",
          state.todos = action.payload
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = "failed"
      })
  }
});

export default tasksSlice.reducer;

