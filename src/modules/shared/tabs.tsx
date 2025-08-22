import type { FunctionComponent } from 'react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '~/components/ui/tabs'

import type { AppTabProps } from '~/interface/app-tab'
import { cn } from '~/lib/utils'

export const AppTabs: FunctionComponent<AppTabProps> = ({
  defaultValue,
  tabs,
  className,
  tabListClassName,
  TabTriggerClassName,
  contentClassName
}) => {
  return (
    <Tabs defaultValue={defaultValue} className={className}>
      <TabsList className={tabListClassName}>
        {tabs.map((tab, index: number) => (
          <TabsTrigger 
            key={index} 
            value={tab.value} 
            className={cn(
              "data-[state=active]:text-[#171717] cursor-pointer",
              TabTriggerClassName
            )}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab, index: number) => (
        <TabsContent key={index} value={tab.value} className={contentClassName}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
