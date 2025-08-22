import type { ReactNode } from 'react'

export interface TabItems {
  value: string;
  title: string | ReactNode;
  content?: ReactNode;
}

export interface AppTabProps {
  defaultValue: string;
  tabs: TabItems[];
  className?: string;
  tabListClassName?: string;
  TabTriggerClassName?: string
  contentClassName?: string;
}
