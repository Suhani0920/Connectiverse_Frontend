import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Stack, Divider, IconButton
} from '@mui/material';
import { AddCircleOutline, DeleteOutline } from '@mui/icons-material';

const CreateTodoDialog = ({ open, onClose, onSubmit, todoData }) => {
  const [todoName, setTodoName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [tasks, setTasks] = useState([{ text: '', completedBy: [] }]);

  useEffect(() => {
    if (todoData) {
      setTodoName(todoData.name || '');
      setDeadline(todoData.deadline || '');
      setTasks(todoData.tasks || [{ text: '', completedBy: [] }]);
    }
  }, [todoData]);

  const handleTaskChange = (i, value) => {
    const updated = [...tasks];
    updated[i].text = value;
    setTasks(updated);
  };

  const addTask = () => setTasks([...tasks, { text: '', completedBy: [] }]);

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated.length ? updated : [{ text: '', completedBy: [] }]);
  };

  const handleSubmit = () => {
    const todo = { name: todoName, deadline, tasks };
    onSubmit(todo);
    setTodoName('');
    setDeadline('');
    setTasks([{ text: '', completedBy: [] }]);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: 3,
          backgroundColor: '#735DA5', // 🟣 New background
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold', color: 'white' }}>
        {todoData ? 'Edit' : 'Create'} Group To-Do
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="To-Do Title"
            value={todoName}
            onChange={e => setTodoName(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: '#FF',
              borderRadius: 1,
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
              '& input': { color: 'white' },
            }}
            InputLabelProps={{ sx: { color: 'white' } }}
          />

          <TextField
            fullWidth
            type="datetime-local"
            label="Deadline"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
            variant="outlined"
            InputLabelProps={{ shrink: true, sx: { color: 'white' } }}
            sx={{
              backgroundColor: '#FF',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
              '& input': { color: 'white' },
            }}
          />

          <Divider sx={{ my: 1, borderColor: 'white' }} />

          {tasks.map((task, i) => (
            <Stack direction="row" alignItems="center" spacing={1} key={i}>
              <TextField
                fullWidth
                label={`Task ${i + 1}`}
                value={task.text}
                onChange={(e) => handleTaskChange(i, e.target.value)}
                variant="outlined"
                sx={{
                  backgroundColor: '#FF',
                  borderRadius: 1,
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                  '& input': { color: 'white' },
                }}
                InputLabelProps={{ sx: { color: 'white' } }}
              />
              {tasks.length > 1 && (
                <IconButton onClick={() => removeTask(i)} size="small" sx={{ color: 'white' }}>
                  <DeleteOutline />
                </IconButton>
              )}
            </Stack>
          ))}

          {/* ✅ "Add Task" should stay purple, NOT white */}
          <Button
            startIcon={<AddCircleOutline />}
            onClick={addTask}
            sx={{
              alignSelf: 'flex-start',
              color: '#735DA5',
              fontWeight: 'bold',
              textTransform: 'none',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#f3f3f3',
              },
            }}
          >
            Add Task
          </Button>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} sx={{ color: 'white' }}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: '#5e4892',
            color: 'white',
            '&:hover': {
              backgroundColor: '#5e4892',
            },
          }}
        >
          Save To-Do
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTodoDialog;
