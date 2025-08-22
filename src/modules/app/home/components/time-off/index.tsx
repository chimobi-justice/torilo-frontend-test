import type { FunctionComponent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { TIME_OFF_COUNT } from '~/constant/time-off'

import { Arc, AppButton, AppButtonDropdown, AppCard } from '~/modules/shared'

export const Timeoff: FunctionComponent = () => {
  const timeoffOptions = ['Maternity Timeoff', 'Paternity Timeoff', 'Pet Time'];
  
  return (
    <AppCard className="p-0 gap-0">
      <div className="flex justify-between items-center p-4 mb-2">
        <p className="text-[#000000] text-[24px] font-semibold">Timeoff</p>

        <div className="flex gap-2">
          <AppButton variant={"secondary"}>
            <ChevronLeft />
          </AppButton>

          <AppButton variant={"secondary"}>
            <ChevronRight />
          </AppButton>
        </div>
      </div>

      <div className="sm:w-[50%] w-[100%] p-4">
        <AppButtonDropdown
          options={timeoffOptions}
          onSelect={(option) => console.log('Selected:', option)}
        />
      </div>

      <div className="mt-6 flex gap-2 w-[100%] overflow-hidden overflow-x-scroll pl-2">
        {TIME_OFF_COUNT.map((data) => (
          <AppCard className="w-[31%] w-[100%]" key={data.id}>
            <div className="mb-6">
              <p className="text-center text-[16px] text-[#171717] mb-4">{data.title}</p>

              <div className="relative">
                <Arc />
                <div className="absolute top-8 left-0 right-0">
                  <p className="text-center text-[16px] font-semibold text-[#171717]">{data.count}</p>
                  <p className="text-center text-[12px] font-semibold text-[#171717]">Days</p>
                  <p className="text-center text-[10px] font-semibold text-[#171717]">Paid Timeoff</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-[100%]">
                <AppButton
                  className="rounded-sm py-3 px-6 bg-[#EBEFFA] text-[12px] text-[#4069D0] hover:bg-[#EBEFFA] w-[100%]"
                >
                  Request Timeoff
                </AppButton>
              </div>

              <div className="w-[100%]">
                <AppButton
                  className="rounded-sm py-3 px-6 bg-[#F2F2F2] text-[12px] text-[#545454] hover:bg-[#F2F2F2] w-[100%]"
                >
                  View Policy Details
                </AppButton>
              </div>
            </div>
          </AppCard>
        ))}
      </div>
    </AppCard>
  )
}