import { type FunctionComponent } from 'react'

import { AppDialog } from '~/modules/shared'
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from '~/components/ui/avatar'

interface BreakDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  activeLocation: 'On-Site' | 'Remote';
  handleAction: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  isBelowTitle?: boolean
}

export const BreakDialog: FunctionComponent<BreakDialogProps> = ({
  isOpen,
  onOpenChange,
  activeLocation,
  handleAction,
  confirmLabel,
  cancelLabel,
  isBelowTitle
}) => {
  return (
    <AppDialog 
      isOpen={isOpen} 
      onOpenChange={onOpenChange} 
      title="Confirm Break Start"
      actionLabel={confirmLabel ?? "Comfirm"}
      cancelLabel={cancelLabel ?? "cancel" }
      handleAction={handleAction}
      isBelowTitle={isBelowTitle}
      >
      <div className="text-center my-3">
        <div className="flex justify-center mb-2">
          <Avatar className="w-[72px] h-[72px]">
            <AvatarImage src="https://i.pravatar.cc/400?u=2" />
            <AvatarFallback>NO</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-[50%] mx-auto">
          <p className="font-semibold text-[20px] text-[#171717]">Take a Break at 1:00 PM</p>
          <p className="text-[#878787] text-[14px] font-normal">
            {activeLocation} 17 Jul, 2023
          </p>
        </div>
      </div>
    </AppDialog>
  );
};