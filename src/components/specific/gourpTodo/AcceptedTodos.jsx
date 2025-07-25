import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, Typography } from '@mui/material';

const ViewTodosDialog = ({ open, onClose, todos }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Active / Accepted To-Dos</DialogTitle>
      <DialogContent>
        <List>
          {todos.map((todo, index) => (
            <ListItem key={index}>
              <Typography variant="body1">{todo.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                Deadline: {todo.deadline}
              </Typography>
              <List>
                {todo.tasks.map((task, taskIndex) => (
                  <ListItem key={taskIndex}>
                    <Typography variant="body2">
                      Task: {task.text} (Completed by: {task.completedBy.join(', ')})
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewTodosDialog;
