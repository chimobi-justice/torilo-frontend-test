import type React from 'react'
import type { FunctionComponent } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import { cn } from '~/lib/utils'

import type { AppAccordionProps } from '~/interface/app-accordion'

export const AppAccordion: FunctionComponent<AppAccordionProps> = ({
  defaultValue,
  accordions,
  className,
  accordionTriggerClassName,
  contentClassName
}) => {
  return (
    <Accordion
      type={"single"}
      collapsible
      className={className}
      defaultValue={defaultValue}
    >
      {accordions.map((accordion) => (
        <AccordionItem key={accordion.value} value={accordion.value}>
          <AccordionTrigger className={accordionTriggerClassName} style={{ cursor: "pointer"} as React.CSSProperties}>
            {accordion.title}
          </AccordionTrigger>
          <AccordionContent className={cn("flex flex-col gap-4 text-balance", contentClassName)}>
            {accordion.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}