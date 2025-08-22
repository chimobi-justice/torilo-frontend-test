import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { User, UserDetail } from '~/interface/user'
import { fetchOngoingTeams, fetchTeams, fetchUpcomingTeams, getUser } from '~/features/teamThunks';

interface TeamState {
  allUsers: User[];
  upcomingUsers: User[];
  ongoingUsers: User[];
  isDialogOpen: boolean;
  teamProfile: UserDetail | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  allUsers: [],
  upcomingUsers: [],
  ongoingUsers: [],
  isDialogOpen: false,
  loading: "idle",
  teamProfile: null,
} satisfies TeamState as TeamState;

export const teamsSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setIsDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.isDialogOpen = action.payload
    },
    handleAction: (state) => {
      state.isDialogOpen = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchTeams.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = "succeeded";
        state.allUsers = action.payload;
      })
      .addCase(fetchTeams.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(fetchUpcomingTeams.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.upcomingUsers = action.payload;
      })
      .addCase(fetchOngoingTeams.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.ongoingUsers = action.payload;
      })

      .addCase(getUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<UserDetail>) => {
        state.loading = "succeeded";
        state.teamProfile = action.payload; 
      });
  }
});

export const { setIsDialogOpen, handleAction } = teamsSlice.actions;

export default teamsSlice.reducer;
