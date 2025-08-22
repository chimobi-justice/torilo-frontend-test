import { type FunctionComponent } from 'react'

import { Celebrations } from '~/modules/app/home/components/celebrations'
import { TimeoffRecords } from '~/modules/app/home/components/timeoff-record'
import { Teams } from '~/modules/app/home/components/teams'
import { Tasks } from '~/modules/app/home/components/tasks'
import { AttendanceSnapshot } from '~/modules/app/home/components/attendance-snapshot '
import { ClockWatch } from '~/modules/app/home/components/clock'
import { Timeoff } from '~/modules/app/home/components/time-off'

const Home: FunctionComponent = () => {
  return (
    <>
      <div>
        <p className="text-sm font-normal mb-1">Good Morning,</p>
        <h3 className="text-[22px] font-semibold">Williams Oluwadamilare</h3>
      </div>

      <div className="flex flex-col sm:flex-row mt-6 gap-3">
        <div className="sm:w-[70%] w-[100%]">
          <div className="flex flex-col sm:flex-row gap-3 w-[100%] mb-8">
            <div className="sm:w-[50%] w-[100%]">
              <ClockWatch />
            </div>

            <div className="sm:w-[50%] w-[100%]">
              <Tasks />
            </div>
          </div>

          <div className="w-[100%]">
            <div className="w-[100%]">
              <AttendanceSnapshot />
            </div>

            <div className="w-[100%]">
              <Timeoff />
            </div>
          </div>
        </div>

        <div className="sm:w-[30%] w-[100%]">
          <div className="w-[100%]">
            <Celebrations />

            <TimeoffRecords />

            <Teams />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;