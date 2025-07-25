import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Tooltip,
  Stack,
  Typography
} from '@mui/material';
import { ListAlt as ListAltIcon } from '@mui/icons-material';

const GroupTodoMenu = ({ onCreate, onViewTodos }) => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  const handleCreateClick = () => {
    onCreate();         // Trigger Create Dialog
    handleCloseMenu();  // Close menu dialog
  };

  const handleViewClick = () => {
    onViewTodos();      // Trigger view accepted/active todos
    handleCloseMenu();  // Close menu dialog
  };

  return (
    <>
      {/* 📌 Icon in header to open To-Do Menu */}
      <Tooltip title="Group To-Do Options">
        <IconButton onClick={handleOpenMenu} color="primary">
          <ListAltIcon />
        </IconButton>
      </Tooltip>

      {/* 📌 To-Do Menu Dialog */}
      <Dialog open={open} onClose={handleCloseMenu} fullWidth maxWidth="xs">
        <DialogTitle textAlign="center" fontWeight="bold">
          Group To-Do Menu
        </DialogTitle>

        <DialogContent>
          <Stack spacing={3} mt={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleCreateClick}
            >
              Create New To-Do
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleViewClick}
            >
              View Active / Accepted To-Dos
            </Button>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseMenu} color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GroupTodoMenu;
