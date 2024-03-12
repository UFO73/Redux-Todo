import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task/task'
import { getTasks, getStatusFilter } from '../../redux/selectors'
import { statusFilters } from '../../redux/constants'
import { List, ListItem } from '@mui/material'

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.current: {
      return tasks.filter((task) => !task.completed)
    }
    case statusFilters.completed: {
      return tasks.filter((task) => task.completed)
    }
    default: {
      return tasks
    }
  }
}

export const TaskList = () => {
  const tasks = useSelector(getTasks)
  const statusFilter = useSelector(getStatusFilter)
  const visibleTasks = useMemo(
    () => getVisibleTasks(
      tasks,
      statusFilter,
    ),
    [tasks, statusFilter],
  )

  return (
    <List >
      {visibleTasks.map((task, idx) => (
        <ListItem key={task.id} sx={{
          '& + &': {
            'borderTop': '1px solid #2f2f37',
          },
        }}>
          <Task task={task} number={idx + 1} />
        </ListItem>
      ))}
    </List>
  )
}
