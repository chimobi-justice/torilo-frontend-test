import { useEffect, type FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { Badge } from '~/components/ui/badge'

import { AppCard } from '~/modules/shared'
import { useAppSelector } from '~/hooks/useAppSelector'
import { useAppDispatch } from '~/hooks/useAppDispatch'

import { fetchTasks } from '~/features/tasksThunk'

import TaskIcon from '~/assets/images/tasks.svg'

export const Tasks: FunctionComponent = () => {
  const { todos } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks()).unwrap();
  }, [])

  return (
    <AppCard>
      <div className="flex justify-between items-center p-2 mb-2">
        <div className="flex items-center gap-1">
          <div className="flex justify-center mr-1">
            <img src={TaskIcon} className="w-[18px] h-[21.49px]" />
          </div>

          <p className="text-[#545454] text-[16px] font-semibold">Tasks</p>

          <Badge
            className="h-5 min-w-5 rounded-full px-1 tabular-nums bg-[#FF6666]"
            variant="destructive"
          >
            {todos.length}
          </Badge>
        </div>

        <p className="text-[#171717] text-[12px] font-semibold">
          <Link to={""}> View all Task</Link>
        </p>
      </div>

      <div className="h-[170px] overflow-y-scroll overflow-hidden">
        <div className="w-[100%]">
          {todos && todos.map((task) => (
            <Link to={""} key={task?.id}>
              <AppCard
                className="p-1 gap-2 bg-[#FAFAFA] border-1 border-[#FAFAFA] mb-3 rounded-md"
              >
                <div className="flex justify-between items-center">
                  <h5 className="text-[#171717] text-[12px] font-semibold truncate w-[60%]">{task?.todo}</h5>

                  <div className="flex-grow" />

                  <p className="text-[#4069D0] text-[10px] font-normal">{task?.completed === true ? "Complete" : "Mark as Complete"}</p>
                </div>
              </AppCard>
            </Link>
          ))}
        </div>
      </div>
    </AppCard>
  )
}