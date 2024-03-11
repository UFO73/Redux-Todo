import { useSelector } from 'react-redux'
import { getTasks } from '../../redux/selectors'
import { Box, Typography } from '@mui/material'

export const TaskCounter = () => {
  const tasks = useSelector(getTasks)

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1
      } else {
        acc.active += 1
      }
      return acc
    },
    { 'active': 0, 'completed': 0 },
  )

  return (
    <Box>
      <Typography sx={{ 'margin': 0 }}>Active: {count.active}</Typography>
      <Typography sx={{ 'margin': 0 }}>Completed: {count.completed}</Typography>
    </Box>
  )
}
