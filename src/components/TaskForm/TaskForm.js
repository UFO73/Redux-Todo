import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import { Button, TextField } from "@mui/material";
import toast from 'react-hot-toast';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (form.elements.text.value === '') {
      return;
    }
    dispatch(addTask(form.elements.text.value));
    toast.success('Create successfully')
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <TextField fullWidth id="outlined-basic" label="Enter todo text..." type="text" name="text" />
      <Button size="small" style={{ marginLeft: '15px' }} variant="outlined" type="submit">Add ToDo</Button>
    </form>
  );
};
