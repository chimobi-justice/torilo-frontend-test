import { type FunctionComponent } from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '~/components/ui/avatar'
import { APP_IMAGE_URL } from '~/constant/app-url';
import type { UserDetail } from '~/interface/user';
import { AppDialog, /*AppSkeleton*/ } from '~/modules/shared'

interface TeamDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  handleAction: () => void;
  team: UserDetail | null,
  // loading: string
}

export const TeamkDialog: FunctionComponent<TeamDialogProps> = ({
  isOpen,
  onOpenChange,
  handleAction,
  team,
  // loading
}) => {
  return (
    <AppDialog
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title={"Team details"}
      actionLabel={"Save"}
      cancelLabel="No Cancel Contact"
      handleAction={handleAction}
    >
      {/* {loading && (
        <AppSkeleton />
      )} */}

      {team && (
        <div className=" my-3">
          <div className="mb-2">
            <Avatar className="w-[72px] h-[72px]">
              <AvatarImage src={`${APP_IMAGE_URL}${team.id}`} />
              <AvatarFallback>NO</AvatarFallback>
            </Avatar>
          </div>

          <div className="w-[100%] flex flex-col gap-4">
            <p className="font-semibold text-[16px] text-[#171717]">
              Name: {team.firstName}
            </p>

            <p className="font-semibold text-[16px] text-[#171717]">
              Email: {team.email}
            </p>

            <p className="font-semibold text-[16px] text-[#171717]">
              Age: {team.age}
            </p>

            <p className="font-semibold text-[16px] text-[#171717]">
              Date of Birth: {team.birthDate}
            </p>

            <p className="font-semibold text-[16px] text-[#171717]">
              Gender: {team.gender}
            </p>

            <p className="font-semibold text-[16px] text-[#171717]">
              Eye Color: {team.eyeColor}
            </p>

            <p className="font-semibold text-[16px] text-[#171717]">
              Company: {team.company.name}
            </p>

            <p className="font-semibold text-[16px] text-[#171717]">
              Department: {team.company.department}
            </p>
          </div>
        </div>
      )}
    </AppDialog>
  );
};