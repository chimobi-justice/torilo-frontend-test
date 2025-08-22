import { type FunctionComponent } from 'react'

import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from '~/components/ui/avatar'
import { AppDialog } from '~/modules/shared'

interface ClockDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isClock: 'Clock-In' | 'Clock-Out';
  activeLocation: 'On-Site' | 'Remote';
  handleAction: () => void;
}

export const ClockDialog: FunctionComponent<ClockDialogProps> = ({
  isOpen,
  onOpenChange,
  isClock,
  activeLocation,
  handleAction
}) => {
  return (
    <AppDialog
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title={`Confirm Clock ${isClock === 'Clock-In' ? 'In' : 'Out'}`}
      actionLabel={`${isClock === "Clock-In" ? "Yes, Clock In" : "Yes, Clock out at 5:00 PM"}`}
      cancelLabel={`${isClock === "Clock-In" ? "No, Cancel" : "Use My Current Time (8:30 AM)"}`}
      handleAction={handleAction}
    >
      <div className="text-center my-3">
        <div className="flex justify-center mb-2">
          <Avatar className="w-[72px] h-[72px]">
            <AvatarImage src="https://i.pravatar.cc/400?u=2" />
            <AvatarFallback>NO</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-[50%] mx-auto">
          <p className="font-semibold text-[20px] text-[#171717]">
            {isClock === 'Clock-In' ? 'Clock In' : 'Clock Out'} at 9:30 AM
          </p>
          {isClock === 'Clock-In' && (
            <p className="text-[#878787] text-[14px] font-normal">
              {activeLocation} . 17 Jul, 2023
            </p>
          )}
          {isClock === 'Clock-Out' && <p>{activeLocation}</p>}
        </div>
      </div>
    </AppDialog>
  );
};