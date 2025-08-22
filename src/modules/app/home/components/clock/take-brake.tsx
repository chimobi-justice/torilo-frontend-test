import { type FunctionComponent } from 'react'

import { 
  endBreak, 
  setIsBreak, 
  setIsDialogOpen 
} from '~/features/clockWatchSlice'

import { useAppDispatch } from '~/hooks/useAppDispatch'
import { useAppSelector } from '~/hooks/useAppSelector'

import { AppButton, AppCard } from '~/modules/shared'
import { BreakDialog } from '~/modules/app/home/components/clock/break-dialog'
import { ClockDialog } from '~/modules/app/home/components/clock/clock-dialog'

import TimerIcon from '~/assets/images/timer.svg'

export const TakeBreak: FunctionComponent = () => {
  const { activeLocation, isClock, isDialogOpen, isBreak } = useAppSelector((state) => state.clockWatch);

  const dispatch = useAppDispatch();

  const handleBreak = () => {
    dispatch(endBreak());
  };

  return (
    <>
      <div>
        <AppCard
          className="bg-[#FDEDCE] border-1 boreder-[#FDEDCE] gap-0"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-[#171717] text-[11.36px]">Break Timddde</p>
              <p className="font-normal text-[11.36px] text-[#171717]">Wed 17 Jul, 2023</p>
              <h3 className="font-normal text-[40.56px] text-[#946405]">59:49</h3>
            </div>

            <div className="flex justify-center">
              <img src={TimerIcon} className="w-[71.64px] h-[71.64px]" />
            </div>
          </div>
        </AppCard>
      </div>

      <div className="mt-6 flex flex-col gap-2 justify-center">
        <div className="w-[100%]">
          <AppButton
            className="rounded-sm py-3 px-6 bg-[#F8B636] text-[#171717] hover:bg-[#F8B636] w-[100%]"
            onClick={() => dispatch(setIsBreak(true))}
          >
            End Break
          </AppButton>
        </div>

        <div className="w-[100%]">
          <AppButton
            className="rounded-sm py-3 px-6 bg-[#4069D0] hover:bg-[#5B7ED7] w-[100%]"
            onClick={() => dispatch(setIsDialogOpen(true))}
          >
            {isClock}
          </AppButton>
        </div>
      </div>

      <BreakDialog
        isOpen={isBreak}
        onOpenChange={(open) => dispatch(setIsBreak(open))}
        activeLocation={activeLocation}
        handleAction={handleBreak}
        confirmLabel="Yes, End Break"
        cancelLabel="No, Continue Break"
        isBelowTitle={true}
      />

      <ClockDialog
        isOpen={isDialogOpen}
        onOpenChange={(open) => dispatch(setIsDialogOpen(open))}
        isClock={isClock}
        activeLocation={activeLocation}
        handleAction={handleBreak}
      />
    </>
  )
}