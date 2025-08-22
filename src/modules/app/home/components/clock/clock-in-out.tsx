import { type FunctionComponent } from 'react'

import {
  setActiveLocation,
  setIsDialogOpen,
  setIsBreak,
  handleClockInOut,
  handleBreakAction
} from '~/features/clockWatchSlice'

import { useAppDispatch } from '~/hooks/useAppDispatch'
import { useAppSelector } from '~/hooks/useAppSelector'

import { AttendanceCard } from '~/modules/app/home/components/clock/attendance-card'
import { TimeDisplay } from '~/modules/app/home/components/clock/time-display'
import { ActionButtons } from '~/modules/app/home/components/clock/action-buttons'
import { ClockDialog } from '~/modules/app/home/components/clock/clock-dialog'
import { BreakDialog } from '~/modules/app/home/components/clock/break-dialog'

export const ClockInOut: FunctionComponent = () => {
  const { activeLocation, isClock, isDialogOpen, isBreak } = useAppSelector((state) => state.clockWatch);

  const dispatch = useAppDispatch();

  const handleSetLocation = (location: 'On-Site' | 'Remote') => {
    dispatch(setActiveLocation(location));
  };

  const handleOpenClockDialog = () => {
    dispatch(setIsDialogOpen(true));
  };

  const handleOpenBreakDialog = () => {
    dispatch(setIsBreak(true));
  };

  const handleClockAction = () => {
    dispatch(handleClockInOut());
  };

  const handleBreak = () => {
    dispatch(handleBreakAction());
  };

  return (
    <>
      <AttendanceCard activeLocation={activeLocation} setActiveLocation={handleSetLocation} />

      <TimeDisplay />

      <ActionButtons
        isClock={isClock}
        onClockClick={handleOpenClockDialog}
        onBreakClick={handleOpenBreakDialog}
      />

      <ClockDialog
        isOpen={isDialogOpen}
        onOpenChange={(open) => dispatch(setIsDialogOpen(open))}
        isClock={isClock}
        activeLocation={activeLocation}
        handleAction={handleClockAction}
      />

      <BreakDialog
        isOpen={isBreak}
        onOpenChange={(open) => dispatch(setIsBreak(open))}
        activeLocation={activeLocation}
        handleAction={handleBreak}
        confirmLabel="Yes, Take Break"
        cancelLabel="No, Continue Working"
      />
    </>
  )
}