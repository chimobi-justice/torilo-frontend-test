import { type FunctionComponent } from 'react'

import { AppCard } from '~/modules/shared'
import { TeamLists } from '~/modules/app/home/components/teams/team-lists'

export const Teams: FunctionComponent = () => {
  return (
    <AppCard
      title="My Teams"
      className="p-2 gap-2 mt-6"
    >
      <TeamLists />
    </AppCard>
  )
}
