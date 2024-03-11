import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, TextField } from '@mui/material'
import { addTask } from '../../redux/actions'
import toast from 'react-hot-toast'

export const TaskForm = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (text.length < 3) {
      setError(true)
      return
    }

    dispatch(addTask(text))
    toast.success('Create successfully')
    setText('')
    setError(false)
  }

  useEffect(() => {
    setError(false)
  }, [text])

  return (
    <Box sx={{ 'display': 'flex' }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter todo text..."
        type="text"
        name="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        error={error}
        helperText={error ? 'Length must be at least 3 characters' : ''}
      />
      <Button
        size="small"
        sx={{ 'marginLeft': '15px', 'height': '56px' }}
        variant="outlined"
        onClick={handleSubmit}>
        Add ToDo
      </Button>
    </Box>
  )
}
