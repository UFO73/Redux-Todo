import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'
import { getTasks } from '../../redux/selectors'

export const TaskCounter = () => {
  const tasks = useSelector(getTasks)

  const count = useMemo(() => {
    const completedTasks = tasks.filter((task) => task.completed)
    const currentTasks = tasks.filter((task) => !task.completed)

    return {
      'current': currentTasks.length,
      'completed': completedTasks.length,
    }
  }, [tasks])

  return (
    <Box>
      <Typography sx={{ 'margin': 0 }}>Current: {count.current}</Typography>
      <Typography sx={{ 'margin': 0 }}>Completed: {count.completed}</Typography>
    </Box>
  )
}
