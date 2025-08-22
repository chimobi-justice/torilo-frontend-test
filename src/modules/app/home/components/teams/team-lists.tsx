import { useEffect, type FunctionComponent } from 'react'

import { useAppSelector } from '~/hooks/useAppSelector'
import { useAppDispatch } from '~/hooks/useAppDispatch'
import {
  handleAction,
  setIsDialogOpen,
} from '~/features/teamsSlice'
import { fetchTeams, getUser } from '~/features/teamThunks'

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { AppCard } from '~/modules/shared'
import { APP_IMAGE_URL } from '~/constant/app-url'
import { TeamkDialog } from './team-dialog'

export const TeamLists: FunctionComponent = () => {
  const { allUsers, isDialogOpen, teamProfile , /*teamProfileLoading*/ } = useAppSelector((state) => state.team);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeams()).unwrap()
  }, [])

  const handleModal = (id: number) => {
    dispatch(getUser(id));
    dispatch(setIsDialogOpen(true));
  }

  const handleContact = () => {
    dispatch(handleAction());
  };

  return (
    <>
      <div className="my-3 h-[200px] overflow-y-scroll overflow-hidden">
        {allUsers && allUsers.map((team) => (
          <AppCard
            key={team.id}
            className="p-0 gap-2 bg-[#FAFAFA] mb-3"
          >
            <div className="flex justify-between items-center pb-2">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <Avatar>
                    <AvatarImage src={`${APP_IMAGE_URL}${team.id}`} />
                    <AvatarFallback>NO</AvatarFallback>
                  </Avatar>
                </div>

                <div>
                  <h5 className="text-[#545454] text-sm font-semibold">
                    {team?.firstName} {team?.lastName}
                  </h5>
                  <p className="text-[#545454] text-[10px] font-normal">
                    {team?.company?.department}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button className="text-[10px] font-semibold cursor-pointer bg-[#D6F2F5] py-2 px-4 rounded-md"
                  onClick={() => handleModal(team.id)}>
                  Contact
                </button>
              </div>
            </div>
          </AppCard>
        ))}
      </div>

      <TeamkDialog
        isOpen={isDialogOpen}
        onOpenChange={(open) => dispatch(setIsDialogOpen(open))}
        handleAction={handleContact}
        team={teamProfile}
        // loading={teamProfileLoading}
      />

    </>
  )
}