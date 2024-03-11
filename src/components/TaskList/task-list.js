import { useSelector } from 'react-redux'
import { Task } from 'components/Task/task'
import { getTasks, getStatusFilter } from '../../redux/selectors'
import css from './TaskList.module.css'
import { statusFilters } from '../../redux/constants'
import { List } from '@mui/material'

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active: {
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
  const visibleTasks = getVisibleTasks(tasks, statusFilter)

  return (
    <List >
      {visibleTasks.map((task, idx) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} number={idx + 1} />
        </li>
      ))}
    </List>
  )
}