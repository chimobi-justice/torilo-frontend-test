import type { TabItems } from '~/interface/app-tab'

export interface AccordionItems extends TabItems {}

export interface AppAccordionProps {
  defaultValue: string;
  accordions: AccordionItems[];
  className?: string;
  accordionTriggerClassName?: string
  contentClassName?: string;
}