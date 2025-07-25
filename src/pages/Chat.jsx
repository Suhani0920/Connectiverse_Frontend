import React, { useRef, useState } from 'react';
import {
  IconButton,
  Stack,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

import FileMenu from '../components/dialogs/FileMenu';
import MessageComponent from '../components/shared/MessageComponent';
import { InputBox } from '../components/styles/StyledComponents';
import { greyColor } from '../constants/color';
import { sampleMessage } from '../constants/sampleData';
import GroupTodoMenu from '../components/specific/gourpTodo/GroupTodoMenu';
import CreateTodoDialog from '../components/specific/gourpTodo/CreateTodoDialog';
import ViewTodosDialog from '../components/specific/gourpTodo/AcceptedTodos.jsx';

const user = {
  _id: 'sdfdser',
  name: 'Narendra',
};

const Chat = ({ selectedChat }) => {
  const containerRef = useRef(null);
  const isGroupChat = selectedChat?.groupChat;
  const groupName = selectedChat?.name;

  // To-Do Dialog States
  const [createTodoOpen, setCreateTodoOpen] = useState(false);
  const [viewTodosOpen, setViewTodosOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false); // State for Edit Dialog
  const [newGroupName, setNewGroupName] = useState(groupName); // State for new group name
  const [isMember, setIsMember] = useState(true); // User's membership status
  const [isGroupNameChanged, setIsGroupNameChanged] = useState(false); // Check if the group name is changed

  // Function to open the Create To-Do Dialog
  const handleCreateTodoOpen = () => {
    setCreateTodoOpen(true);
  };

  // Function to close the Create To-Do Dialog
  const handleCreateTodoClose = () => {
    setCreateTodoOpen(false);
  };

  // Function to handle the creation or update of a To-Do
  const handleSubmitTodo = (todo) => {
    console.log('To-Do submitted:', todo); // Handle the submitted To-Do here
    handleCreateTodoClose(); // Close the dialog after submission
  };

  // Function to open the Edit Group dialog
  const handleEditGroup = () => {
    setEditDialogOpen(true);
  };

  // Function to handle the exit group action
  const handleExitGroup = () => {
    setIsMember(false); // Mark the user as not a member
    setEditDialogOpen(false); // Close the dialog
    // Backend logic for exiting the group (you can add API logic here)
    alert('You have exited the group.');
  };

  // Function to handle adding a new member to the group
  const handleAddMember = () => {
    // Here you can add logic to open a modal/form to add a new member
    alert('Add member functionality goes here!');
    setEditDialogOpen(false); // Close the dialog
  };

  // Function to handle changing the group name
  const handleGroupNameChange = (e) => {
    setNewGroupName(e.target.value);
    setIsGroupNameChanged(true); // Set group name change flag
  };

  // Function to handle the confirmation of group name change
  const handleConfirmGroupNameChange = () => {
    // You can add backend logic here to update the group name
    console.log('Group Name updated to:', newGroupName);
    setIsGroupNameChanged(false); // Reset flag after update
    // Optionally, close the dialog after the group name is confirmed
    setEditDialogOpen(false);
  };

  return (
    <Stack height="100vh" width="100%" display="flex" flexDirection="column">
      {/* 🟡 Group Chat Header */}
      {isGroupChat && (
        <Box
          sx={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#fff',
            borderBottom: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" noWrap>
            {groupName}
          </Typography>
          <Stack direction="row" spacing={1}>
            {/* ✅ Group To-Do Menu Button */}
            <GroupTodoMenu
              onCreate={() => setCreateTodoOpen(true)}
              onViewTodos={() => setViewTodosOpen(true)}
            />
            {/* ✅ Edit Button */}
            <IconButton size="small" color="primary" onClick={handleEditGroup}>
              <EditIcon />
            </IconButton>
          </Stack>
        </Box>
      )}

      {/* 🟢 Create To-Do Dialog */}
      <CreateTodoDialog
        open={createTodoOpen}
        onClose={handleCreateTodoClose}
        onSubmit={handleSubmitTodo} // Pass the submit handler
      />

      {/* 🔵 View Active To-Dos Dialog */}
      <Dialog open={viewTodosOpen} onClose={() => setViewTodosOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Accepted / Active To-Dos</DialogTitle>
        <DialogContent>
          {/* Display accepted tasks or active todos here */}
          <Typography variant="body2">You accepted these tasks...</Typography>
        </DialogContent>
      </Dialog>

      {/* 🔴 Edit Group Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Edit Group Settings</DialogTitle>
        <DialogContent>
          {/* Change Group Name */}
          <TextField
            label="New Group Name"
            value={newGroupName}
            onChange={handleGroupNameChange}
            sx={{ width: '100%', marginBottom: '1rem' }}
          />
        </DialogContent>
        <DialogActions>
          {/* Add Member and Exit Group buttons */}
          {isMember ? (
            <>
              <Button onClick={handleAddMember} variant="contained" color="primary">Add Member</Button>
              <Button onClick={handleExitGroup} variant="contained" color="error">Exit Group</Button>
            </>
          ) : (
            <Button onClick={handleExitGroup} variant="contained" color="error">Exit Group</Button>
          )}
          
          {/* Confirm button appears only if group name has changed */}
          {isGroupNameChanged && (
            <Button onClick={handleConfirmGroupNameChange} variant="contained" color="primary">
              Confirm
            </Button>
          )}

          <Button onClick={() => setEditDialogOpen(false)} color="error">Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* 🟤 Messages */}
      <Stack
        ref={containerRef}
        flex={1}
        padding="1rem"
        spacing="1rem"
        backgroundColor={greyColor}
        sx={{ overflowX: 'hidden', overflowY: 'auto' }}
      >
        {sampleMessage.map((i) => (
          <MessageComponent key={i._id} message={i} user={user} />
        ))}
      </Stack>

      {/* ⚫ Input */}
      <form
        style={{
          height: '10%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '0.5rem',
        }}
      >
        <Stack direction="row" height="100%" width="100%" position="relative" alignItems="center">
          <IconButton sx={{ position: 'absolute', left: '0rem' }}>
            <AttachFileIcon />
          </IconButton>
          <InputBox
            style={{
              flex: 1,
              height: '2.5rem',
              fontSize: '1rem',
              padding: '0.5rem',
              paddingLeft: '2.5rem',
              paddingRight: '1rem',
            }}
            placeholder="Type a message..."
          />
          <IconButton type="submit" sx={{ marginLeft: '1rem' }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </Stack>
  );
};

export default Chat;
