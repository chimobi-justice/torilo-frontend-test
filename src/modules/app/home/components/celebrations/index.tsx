import type { TabItems } from "~/interface/app-tab"
import { AppCard, AppTabs } from "~/modules/shared"
import { Birthdays } from "~/modules/app/home/components/celebrations/birthday"

export const Celebrations = () => {
  const tabData: TabItems[] = [
    {
      value: "birthdays",
      title: "Birthdays",
      content: (
        <>
          <Birthdays />
        </>
      )
    },
    {
      value: "job-anniversary",
      title: "Job Anniversary",
      content: (
        <div className="space-y-4 py-4">
          <p className="text-[12px] text-center">Sorry you don't have any Job Anniversary yet!</p>
        </div>
      )
    },
    {
      value: "new-hire",
      title: "New Hire",
      content: (
        <div className="space-y-4 py-4">
          <p className="text-[12px] text-center">Sorry you don't have any new hire yet!</p>
        </div>
      )
    },
  ];

  return (
    <AppCard
      title="Celebrations"
      className="p-2 gap-2 border-2"
    >
      <AppTabs
        defaultValue="birthdays"
        tabs={tabData}
        className="w-[100%]"
        tabListClassName="py-[3px] px-[10px] rounded-full w-[full]"
        TabTriggerClassName="p-[8px] rounded-full text-[14px] text-[#878787]"
      />
    </AppCard>
  )
}
