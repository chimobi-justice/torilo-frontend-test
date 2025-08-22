import { type FunctionComponent } from 'react'

import { AppButton, AppCard } from '~/modules/shared'

import ClockIcon from '~/assets/images/attendance.svg'

interface AttendanceCardProps {
  activeLocation: 'On-Site' | 'Remote';
  setActiveLocation: (location: 'On-Site' | 'Remote') => void;
}

export const AttendanceCard: FunctionComponent<AttendanceCardProps> = ({ activeLocation, setActiveLocation }) => {
  return (
    <AppCard className="bg-[#5B7ED7] border-1 boreder-[#5B7ED7] text-[white] gap-0">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-normal text-[10px]">Attendance</p>
          <p className="font-semibold text-sm">Wed 17 Jul, 2023</p>
        </div>
        <div className="flex justify-center">
          <img src={ClockIcon} className="w-[18px] h-[21.49px]" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="bg-white flex gap-2 py-1 px-1 rounded-[7.98px]">
          <AppButton
            variant={activeLocation === 'Remote' ? 'default' : 'ghost'}
            className={activeLocation === 'Remote' ? 'text-white' : 'text-black'}
            onClick={() => setActiveLocation('Remote')}
          >
            Remote
          </AppButton>
          <AppButton
            variant={activeLocation === 'On-Site' ? 'default' : 'ghost'}
            className={activeLocation === 'On-Site' ? 'text-white' : 'text-black'}
            onClick={() => setActiveLocation('On-Site')}
          >
            On-Site
          </AppButton>
        </div>
        <div>
          <p className="font-semibold text-[8.87px] text-[#FAFAFA]">Status</p>
          <div className="bg-[#FFFFFF] py-1 px-3 mt-2 rounded-[33.7px]">
            <p className="font-semibold text-[10px] text-[#545454]">Punctual</p>
          </div>
        </div>
      </div>
    </AppCard>
  );
};