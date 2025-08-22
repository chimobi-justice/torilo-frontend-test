import type { FunctionComponent } from 'react'

import { AppCard } from '~/modules/shared'

export const AttendanceSnapshot: FunctionComponent = () => {
  return (
    <div>
      <h3 className="text-[#545454] text-base font-semibold mb-2 p-2 ">Your Attendance Snapshot - January</h3>

      <div className="flex flex-col sm:flex-row justify-between items-center p-2 mb-2 gap-4">
        <div className="w-[100%]">
          <AppCard className="bg-[#E5F9FF] border-1 border-[#99E7FF]">
            <div className="flex justify-between items-center p-2 mb-2">

              <p className="text-[#171717] text-[16px] font-semibold">Punctuality Performance</p>

              <p className="text-[#171717] text-[22px] font-semibold">91%</p>
            </div>

            <div className="w-[100%] flex flex-col sm:flex-row gap-2">
              <AppCard
                className="p-1 bg-[#CCF3FF] border-1 border-[#CCF3FF] mb-3 rounded-md w-[100%]"
              >
                <div className="items-center">
                  <h5 className="text-[#545454] text-[12px] font-semibold mb-2">Days Present</h5>

                  <p className="text-[#171717] text-[16px] font-semibold">80%</p>
                </div>
              </AppCard>

              <AppCard
                className="p-1 bg-[#CCF3FF] border-1 border-[#CCF3FF] mb-3 rounded-md w-[100%]"
              >
                <div className="items-center">
                  <h5 className="text-[#545454] text-[12px] font-semibold mb-2">Unauthorized Absent</h5>

                  <p className="text-[#171717] text-[16px] font-semibold">10%</p>
                </div>
              </AppCard>
            </div>
          </AppCard>
        </div>

        <div className="w-[100%]">
          <AppCard className="bg-[#FEF6E6] border-1 border-[#F8B636]">
            <div className="flex justify-between items-center p-2 mb-2">

              <p className="text-[#171717] text-[16px] font-semibold">Attendance Performance</p>

              <p className="text-[#171717] text-[22px] font-semibold">91%</p>
            </div>

            <div className="w-[100%] flex flex-col sm:flex-row gap-2">
              <AppCard
                className="p-1 bg-[#FDEDCE] border-1 border-[#FDEDCE] mb-3 rounded-md w-[100%]"
              >
                <div className="items-center">
                  <h5 className="text-[#545454] text-[12px] font-semibold mb-2">Unauthorized Absent</h5>

                  <p className="text-[#171717] text-[16px] font-semibold">10%</p>
                </div>
              </AppCard>

              <AppCard
                className="p-1 bg-[#FDEDCE] border-1 border-[#FDEDCE] mb-3 rounded-md w-[100%]"
              >
                <div className="items-center">
                  <h5 className="text-[#545454] text-[12px] font-semibold mb-2">Unauthorized Absent</h5>

                  <p className="text-[#171717] text-[16px] font-semibold">10%</p>
                </div>
              </AppCard>
            </div>
          </AppCard>
        </div>

      </div>
    </div>
  )
}