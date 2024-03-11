import clsx from 'clsx'
import css from './Button.module.css'
import { Button } from '@mui/material'

export const ButtonFilter = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (

    <Button
      variant="outlined"
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  )
}
