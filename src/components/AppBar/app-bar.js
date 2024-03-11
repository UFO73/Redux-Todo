import { Box, Typography } from '@mui/material'
import { StatusFilter } from 'components/StatusFilter/status-filter'
import { TaskCounter } from 'components/TaskCounter/task-counter'

export const AppBar = () => {
  return (
    <Box sx={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
      <Box>
        <Typography variant="h6">
          TODO
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
