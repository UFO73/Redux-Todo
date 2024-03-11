import { Button } from '@mui/material'

export const ButtonFilter = ({
  // selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (

    <Button
      variant="outlined"
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  )
}
