import { type FunctionComponent } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Badge } from '~/components/ui/badge'
import { Separator } from '~/components/ui/separator'
import { APP_IMAGE_URL } from '~/constant/app-url'
import type { User } from '~/interface/user'
import { formatDate } from '~/lib/utils'

import { AppCard } from '~/modules/shared'

type OnGoingProps = {
  users: User[];
};

export const OnGoing: FunctionComponent<OnGoingProps> = ({ users }) => {
  return (

    <div className="my-3 h-[200px] overflow-y-scroll overflow-hidden">
      {users && users.map((user) => (
        <AppCard
          key={user.id}
          className="p-0 gap-2 bg-[#FEF6E6] border-1 border-[#FEF6E6] mb-3"
        >
          <div className="flex justify-between items-center border-b-1 border-[#FDEDCE] pb-2">
            <div className="flex justify-between items-center gap-2">
              <div>
                <Avatar>
                  <AvatarImage src={`${APP_IMAGE_URL}${user.id}`} />
                  <AvatarFallback>NO</AvatarFallback>
                </Avatar>
              </div>

              <div>
                <h5 className="text-[#545454] text-sm font-semibold">{user?.firstName} {user?.lastName}</h5>
                <p className="text-[#545454] text-[10px] font-normal">{user?.company?.department}</p>
              </div>
            </div>

            <div className="text-center">
              <Badge
                className="h-5 min-w-5 rounded-full px-1 tabular-nums bg-[#FCDC9C] text-[#946405] py-3 px-4"
                variant="destructive"
              >
                ({user.id} Days)
              </Badge>
            </div>
          </div>

          <div className="flex gap-4 p-2 items-center">
            <div>
              <p className="text-[10px] font-normal">Start Date: <span className="font-semibold">{formatDate(user?.birthDate)}</span></p>
            </div>


            <div className="flex h-6 items-center space-x-4 text-sm">
              <Separator orientation="vertical" />

              <div>
                <p className="text-[10px] font-normal">Start Date: <span className="font-semibold">{formatDate(new Date())}</span></p>
              </div>
            </div>
          </div>
        </AppCard>
      ))}
    </div>
  )
}