import { useEffect, type FunctionComponent } from 'react'

import { Badge } from '~/components/ui/badge'

import type { TabItems } from '~/interface/app-tab'
import { AppCard, AppTabs } from '~/modules/shared'
import { UpComing } from '~/modules/app/home/components/timeoff-record/up-coming'
import { OnGoing } from '~/modules/app/home/components/timeoff-record/on-going'
import { Link } from 'react-router-dom'
import { useAppSelector } from '~/hooks/useAppSelector'
import { useAppDispatch } from '~/hooks/useAppDispatch'
import { fetchOngoingTeams, fetchUpcomingTeams } from '~/features/teamThunks'

export const TimeoffRecords: FunctionComponent = () => {
  const { upcomingUsers, ongoingUsers } = useAppSelector((state) => state.team);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOngoingTeams()).unwrap();
    dispatch(fetchUpcomingTeams()).unwrap();
  }, []);

  const upcomingTabTitle = (
    <span className="flex items-center gap-2">
      Upcoming
      <Badge
        className="h-5 min-w-5 rounded-full px-1 tabular-nums bg-[#FF6666]"
        variant="destructive"
      >
        {upcomingUsers.length ?? 0}
      </Badge>
    </span>
  );

  const ongoingTabTitle = (
    <span className="flex items-center gap-2">
      Ongoing
      <Badge
        className="h-5 min-w-5 rounded-full px-1 tabular-nums bg-[#FF6666]"
        variant="destructive"
      >
        {ongoingUsers.length ?? 0}
      </Badge>
    </span>
  );

  const tabData: TabItems[] = [
    {
      value: "up-coming",
      title: upcomingTabTitle,
      content: (
        <>
          <UpComing users={upcomingUsers} />
        </>
      )
    },
    {
      value: "Ongoing",
      title: ongoingTabTitle,
      content: (
        <>
          <OnGoing users={ongoingUsers} />
        </>
      )
    },
  ];

  return (
    <AppCard className="p-2 gap-2 mt-6">
      <div className="flex justify-between items-center p-2 mb-2">

        <p className="text-[#171717] text-[18px] font-semibold">Timeoff Record</p>

        <p className="text-[#2898A4] text-[12px] font-semibold">
          <Link to={""}>View All Record</Link>
        </p>
      </div>

      <AppTabs
        defaultValue="up-coming"
        tabs={tabData}
        className="w-[100%]"
        tabListClassName="py-[3px] px-[7px] rounded-full w-[full]"
        TabTriggerClassName="p-[8px] rounded-full text-[14px] text-[#878787]"
      />
    </AppCard>
  )
}
