import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import { ButtonFilter } from 'components/Button/button'
import { statusFilters } from '../../redux/constants'
import { getStatusFilter } from '../../redux/selectors'
import { setStatusFilter } from '../../redux/actions'

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getStatusFilter)

  const handleFilterChange = (filterBtn) => dispatch(setStatusFilter(filterBtn))

  return (
    <Box sx={{ 'display': 'flex', 'gap': 1 }}>
        <ButtonFilter
          selected={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          All
        </ButtonFilter>
        <ButtonFilter
          selected={filter === statusFilters.current}
          onClick={() => handleFilterChange(statusFilters.current)}
        >
          Current
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
