import { useSelector, useDispatch } from 'react-redux'
import { ButtonFilter } from 'components/Button/Button'
import { statusFilters } from '../../redux/constants'
import { getStatusFilter } from '../../redux/selectors'
import { setStatusFilter } from '../../redux/actions'
import { Box } from '@mui/material'

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getStatusFilter)

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter))

  return (
    <Box display="flex" sx={{ 'gap': 1 }}>
        <ButtonFilter
          selected={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          All
        </ButtonFilter>
        <ButtonFilter
          selected={filter === statusFilters.active}
          onClick={() => handleFilterChange(statusFilters.active)}
        >
          Active
        </ButtonFilter>
        <ButtonFilter
          selected={filter === statusFilters.completed}
          onClick={() => handleFilterChange(statusFilters.completed)}
        >
          Completed
        </ButtonFilter>
    </Box>
  )
}
