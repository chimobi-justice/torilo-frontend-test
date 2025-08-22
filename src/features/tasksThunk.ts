import { createAsyncThunk } from '@reduxjs/toolkit'

import { APP_URL } from '~/constant/app-url'
import type { Tasks, TasksResponse } from '~/interface/task'

export const fetchTasks = createAsyncThunk<Tasks[]>(
    "tasks/fetch",
    async () => {
      const response = await fetch(`${APP_URL}/todos`);
      const data: TasksResponse = await response.json();
      return data.todos;
    }
  )