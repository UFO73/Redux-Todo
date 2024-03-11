import { StatusFilter } from 'components/StatusFilter/status-filter'
import { TaskCounter } from 'components/TaskCounter/task-counter'
import { Box, Typography } from '@mui/material'

export const AppBar = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Typography variant="h6">
          ToDo
        </Typography>
        <TaskCounter />
      </Box>
      <Box>
        <Typography variant="h6">
          Filter by status
        </Typography>
        <StatusFilter />
      </Box>
    </Box>
  )
}
