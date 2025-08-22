import type { FunctionComponent } from 'react'

import { useAppSelector } from '~/hooks/useAppSelector'

import { ClockInOut } from '~/modules/app/home/components/clock/clock-in-out'
import { TakeBreak } from '~/modules/app/home/components/clock/take-brake'

export const ClockWatch: FunctionComponent = () => {
  const { onBreak } = useAppSelector((state) => state.clockWatch);

  return (
    <div>
      {onBreak ? (
        <TakeBreak />
      ) : (
        <ClockInOut />
      )}
    </div>
  )
}