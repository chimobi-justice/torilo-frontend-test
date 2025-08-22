import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ActiveLocation = "On-Site" | "Remote";
type IsClock = "Clock-In" | "Clock-Out";

export interface ClockWatchProps {
  activeLocation: ActiveLocation;
  isClock: IsClock;
  isDialogOpen: boolean;
  isBreak: boolean;
  onBreak: boolean;
}

const initialState = {
  activeLocation: 'On-Site',
  isClock: "Clock-In",
  isDialogOpen: false,
  isBreak: false,
  onBreak: false,
} satisfies ClockWatchProps as ClockWatchProps;

export const clockWatchSlice = createSlice({
  name: "clockWatch",
  initialState,
  reducers: {
    setActiveLocation: (state, action: PayloadAction<ActiveLocation>) => {
      state.activeLocation = action.payload
    },
    setIsClock: (state, action: PayloadAction<IsClock>) => {
      state.isClock = action.payload
    },
    setIsDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.isDialogOpen = action.payload
    },
    handleClockInOut: (state) => {
      state.isDialogOpen = false,
        state.isClock = state.isClock === "Clock-In" ? "Clock-Out" : "Clock-In";
    },
    setIsBreak: (state, action: PayloadAction<boolean>) => {
      state.isBreak = action.payload;
    },
    handleBreakAction: (state) => {
      state.isBreak = false;
      state.onBreak = true;
    },
    endBreak: (state) => {
      state.isBreak = false;
      state.onBreak = false;
      state.isClock = "Clock-In"
    }
  }
});

export const {
  setActiveLocation,
  setIsClock,
  setIsDialogOpen,
  setIsBreak,
  endBreak,
  handleClockInOut,
  handleBreakAction
} = clockWatchSlice.actions;

export default clockWatchSlice.reducer;