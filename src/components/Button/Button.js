import { Button } from '@mui/material'

const getStyle = (selected) => ({
  'main': {
    '&:hover': {
      'backgroundColor': selected ? '#1976d2' : 'initial',
    },
    'backgroundColor': selected ? '#1976d2' : 'initial',
    'color': selected ? '#fff' : '#1976d2',
  },
})

export const ButtonFilter = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  const styles = getStyle(selected)
  return (

    <Button
      variant="outlined"
      type={type}
      sx={styles.main}
      {...otherProps}
    >
      {children}
    </Button>
  )
}
