import { type FunctionComponent } from 'react'

import { Separator } from '~/components/ui/separator'
import { useAppSelector } from '~/hooks/useAppSelector';

export const TimeDisplay: FunctionComponent = () => {
  const { activeLocation } = useAppSelector((state) => state.clockWatch);

  return (
    <div className="w-[95%] mx-auto bg-[#EBEFFA] rounded-b-md p-3">
      <div className="flex gap-4 p-2 items-center">
        <div className="flex gap-1 items-center">
          <div className="flex">
            <div className="bg-white py-1 px-2 rounded-sm shadow-sm">0</div>
            <div className="bg-white py-1 px-2 rounded-sm shadow-sm">{activeLocation === "On-Site" ? "8" : "7"}</div>
          </div>
          <div className="text-[#545454] text-2xl font-semibold ">:</div>
          <div className="flex">
            <div className="bg-white py-1 px-2 rounded-sm shadow-sm">{activeLocation === "On-Site" ? "3" : "5"}</div>
            <div className="bg-white py-1 px-2 rounded-sm shadow-sm">0</div>
          </div>
        </div>
        <div className="flex h-10 items-center space-x-3 text-sm">
          <Separator orientation="vertical" className="bg-[#ADBFEB] w-[12px]" />
          <div>
            <p className="text-[10px] font-normal text-[#545454]">Last Clock-In Time & Date: </p>
            <p className="text-[10px] font-semiBold text-[#171717]">{activeLocation === "On-Site" ? "08:30" : "07:50"} AM (18 Nov, 2024) </p>
          </div>
        </div>
      </div>
    </div>
  );
};