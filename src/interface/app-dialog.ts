import type { ReactNode } from 'react'

export interface AppDialogProps {
  title: string;
  children: ReactNode;
  actionLabel: string
  cancelLabel: string
  isOpen?: boolean;
  dialogTriggerClassName?: string;
  contentClassName?: string;
  onOpenChange?:  (val: boolean) => void;
  handleAction?: () => void;
  isBelowTitle?: boolean;
}