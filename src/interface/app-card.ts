import type { ReactNode } from 'react'

export interface AppCardProps {
  children: ReactNode;
  title?: string;
  subTitle?: string
  className?: string;
  headerClassName?: string;
  footerContent?: ReactNode;
  footerClassName?: string;
}
