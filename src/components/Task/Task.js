import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { deleteTask, toggleCompleted } from "../../redux/actions";
import { Box, Checkbox, Typography } from "@mui/material";
import toast from "react-hot-toast";

export const Task = ({ task, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    toast.error('Delete successfully')
  }
  
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <Box display="flex" alignItems="center" gap={2} paddingY={1}>
      <Checkbox type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        color="success"
      />
      <Typography>
        {number}.
      </Typography>
      <Typography variant="body1"  sx={{
          flexGrow: 1,
          textDecoration: task.completed ? 'line-through' : 'none',
        }}>
        {task.text}
      </Typography>
      
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  )
};
