import { type FunctionComponent } from 'react'

import { AppButton } from '~/modules/shared'

interface ActionButtonsProps {
  isClock: 'Clock-In' | 'Clock-Out';
  onClockClick: () => void;
  onBreakClick: () => void;
}

export const ActionButtons: FunctionComponent<ActionButtonsProps> = ({ isClock, onClockClick, onBreakClick }) => {
  return (
    <div className="mt-6 flex gap-2 justify-center">
      <div className="w-[100%]">
        <AppButton
          className="rounded-sm py-3 px-6 bg-[#4069D0] hover:bg-[#5B7ED7] w-[100%]"
          onClick={onClockClick}
        >
          {isClock}
        </AppButton>
      </div>
      {isClock === 'Clock-Out' && (
        <div className="w-[100%]">
          <AppButton
            className="rounded-sm py-3 px-6 bg-[#F8B636] text-[#171717] hover:bg-[#F8B636] w-[100%]"
            onClick={onBreakClick}
          >
            Take Break
          </AppButton>
        </div>
      )}
    </div>
  );
};