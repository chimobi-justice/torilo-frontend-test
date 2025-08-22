import { useEffect, type FunctionComponent } from 'react'
import { format } from 'date-fns'

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

import { AppAccordion, AppCard } from '~/modules/shared'

import { useAppSelector } from '~/hooks/useAppSelector'
import { useAppDispatch } from '~/hooks/useAppDispatch'
import { fetchTeams, fetchUpcomingTeams } from '~/features/teamThunks'
import { APP_IMAGE_URL } from '~/constant/app-url'
import type { AccordionItems } from '~/interface/app-accordion'

import BirthdayIcon from '~/assets/images/birthday.svg'

export const Birthdays: FunctionComponent = () => {
  const { allUsers, upcomingUsers } = useAppSelector((state) => state.team);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeams()).unwrap();
    dispatch(fetchUpcomingTeams()).unwrap()
  }, [])

  const accordionData: AccordionItems[] = [
    {
      title: "Today",
      value: "today",
      content: (
        <div className="h-[150px] overflow-y-scroll overflow-hidden">
          {allUsers && allUsers.map((user) => (
            <AppCard
              className="p-0 gap-2 bg-[#EBEFFA] rounded-[20px] mb-2"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <Avatar>
                      <AvatarImage src={`${APP_IMAGE_URL}${user?.id}`} />
                      <AvatarFallback>NO</AvatarFallback>
                    </Avatar>
                  </div>

                  <div>
                    <h5 className="text-[#545454] text-sm font-semibold">{user?.firstName} {user?.lastName}</h5>
                    <p className="text-[#545454] text-[10px] font-normal">{user?.company?.department}</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center">
                    <img src={BirthdayIcon} className="w-[18px] h-[21.49px]" />
                  </div>

                  <p className="text-[#545454] text-[13px] font-normal">{format(new Date(), 'MMM dd')}</p>
                </div>
              </div>
            </AppCard>
          ))}
        </div>
      )
    },
    {
      title: "Upcoming Birthdays",
      value: "upcoming-birthdays",
      content: (
        <div className="h-[150px] overflow-y-scroll overflow-hidden">
          {upcomingUsers && upcomingUsers.slice(0, 4).map((user) => (
            <AppCard
              className="p-0 gap-2 bg-[#EBEFFA] rounded-[20px] mb-2"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <Avatar>
                      <AvatarImage src={`${APP_IMAGE_URL}${user?.id}`} />
                      <AvatarFallback>NO</AvatarFallback>
                    </Avatar>
                  </div>

                  <div>
                    <h5 className="text-[#545454] text-sm font-semibold">{user?.firstName} {user?.lastName}</h5>
                    <p className="text-[#545454] text-[10px] font-normal">{user?.company?.department}</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center">
                    <img src={BirthdayIcon} className="w-[18px] h-[21.49px]" />
                  </div>

                  <p className="text-[#545454] text-[13px] font-normal">{format(new Date(), 'MMM dd')}</p>
                </div>
              </div>
            </AppCard>
          ))}
        </div>
      )
    },
  ];

  return (
    <>
      <AppAccordion
        defaultValue=""
        accordions={accordionData}
        accordionTriggerClassName="py-2"
        contentClassName="overflow-y-scroll overflow-hidden"
      />
    </>
  )
}