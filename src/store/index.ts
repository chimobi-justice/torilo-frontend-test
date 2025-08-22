import { configureStore } from '@reduxjs/toolkit'

import clockWatchReducer from '~/features/clockWatchSlice'
import teamsReducer from '~/features/teamsSlice'
import taskReducer from '~/features/tasksSlice'

export const store = configureStore({
  reducer: {
    clockWatch: clockWatchReducer,
    team: teamsReducer,
    task: taskReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
