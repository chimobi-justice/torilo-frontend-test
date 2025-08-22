import { createAsyncThunk } from '@reduxjs/toolkit'

import { APP_URL } from '~/constant/app-url'
import type { User, UserDetail, UserResponse } from '~/interface/user'

// Fetch all users
export const fetchTeams = createAsyncThunk<User[]>(
  "team/fetchAll",
  async () => {
    const response = await fetch(`${APP_URL}/users`);
    const data: UserResponse = await response.json();
    return data.users;
  }
);

// Fetch upcoming users (limit 10)
export const fetchUpcomingTeams = createAsyncThunk<User[]>(
  "team/fetchUpcoming",
  async () => {
    const response = await fetch(`${APP_URL}/users?limit=10`);
    const data: UserResponse = await response.json();
    return data.users;
  }
);

// Fetch ongoing users (limit 5)
export const fetchOngoingTeams = createAsyncThunk<User[]>(
  "team/fetchOngoing",
  async () => {
    const response = await fetch(`${APP_URL}/users?limit=5`);
    const data: UserResponse = await response.json();
    return data.users;
  }
);

// Fetch single user by ID
export const getUser = createAsyncThunk<UserDetail, number>(
  "team/fetchUser",
  async (userId) => {
    const response = await fetch(`${APP_URL}/users/${userId}`);
    const data = await response.json();
    return data as UserDetail;
  }
);
