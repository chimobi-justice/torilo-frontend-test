import type { FunctionComponent } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
} from '~/components/ui/alert-dialog'

import type { AppDialogProps } from '~/interface/app-dialog'

export const AppDialog: FunctionComponent<AppDialogProps> = ({
  isOpen,
  children,
  onOpenChange,
  title,
  handleAction,
  actionLabel,
  cancelLabel,
  isBelowTitle
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-[#A8A8A8] text-[18px] font-semibold">{title}</AlertDialogTitle>
            <AlertDialogDescription className="hidden"></AlertDialogDescription>
          </AlertDialogHeader>
          {children}

          <AlertDialogFooter>
            <AlertDialogAction className="w-full mb-3 bg-[#2898A4] text-[white] font-semibold text-[16px] hover:bg-[#2898A4] cursor-pointer" onClick={handleAction}>
              {actionLabel}
            </AlertDialogAction>
            <AlertDialogCancel className="w-full bg-[#D6F2F5] text-[#2898A4] font-semibold text-[16px] hover:bg-[2898A4] hover:text-[#2898A4] cursor-pointer">
              {cancelLabel}
            </AlertDialogCancel>

            {isBelowTitle && (
              <div className="mt-4 text-center text-[#2898A4] text-[16px] font-semibold cursor-pointer">
                <p>Enter a Custom Time</p>
              </div>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};
