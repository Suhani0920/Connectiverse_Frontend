import React, { useRef, useState } from 'react';
import { IconButton, Stack, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Checkbox, Tooltip } from '@mui/material';
import { greyColor } from '../constants/color';
import { InputBox } from '../components/styles/StyledComponents';
import { AttachFile as AttachFileIcon, Send as SendIcon, ListAlt as TodoIcon, Edit as EditIcon } from '@mui/icons-material';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';



const user={
  _id:"sdfdser",
  name:"Narendra",
}

const Chat = ({ selectedChat }) => {
  
   const containerRef=useRef(null);
   const isGroupChat = selectedChat?.groupChat;
  const groupName = selectedChat?.name;

  const [todoDialogOpen, setTodoDialogOpen] = useState(false);
  const [todoName, setTodoName] = useState('');
  const [tasks, setTasks] = useState([{ text: '', completed: false }]);
  const [todoAssigned, setTodoAssigned] = useState(null);
  const [userResponse, setUserResponse] = useState(null); // 'accepted' | 'declined' | null

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = value;
    setTasks(updatedTasks);
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const addTask = () => {
    setTasks([...tasks, { text: '', completed: false }]);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleSendTodo = () => {
    setTodoAssigned({ name: todoName, tasks });
    setUserResponse(null);
    setTodoDialogOpen(false);
  };

  const handleAccept = () => {
    setUserResponse('accepted');
  };

  const handleDecline = () => {
    setUserResponse('declined');
  };
  return (
    <Stack
      height="100vh" // Full height of the viewport
      width="100%"
      display="flex"
      flexDirection="column"
    >

      {/* 🟡 Header for group chat only */}
      {isGroupChat && (
        <Box
          sx={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#EDE7F6",
            borderBottom: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" noWrap>
            {groupName}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Tooltip title="Today's To-Do">
              <IconButton color="primary" onClick={() => setTodoDialogOpen(true)}>
                <TodoIcon />
              </IconButton>
            </Tooltip>

            <IconButton size="small" color="primary" onClick={() => alert('Edit group clicked')}>
              <EditIcon />
            </IconButton>
          </Stack>
        </Box>
      )}
      {/* To-Do Model */}
       <Dialog open={todoDialogOpen} onClose={() => setTodoDialogOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Create Today's To-Do</DialogTitle>
        <DialogContent>
          <TextField
            label="To-Do Title"
            fullWidth
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            sx={{ mb: 2 }}
          />
          {tasks.map((task, index) => (
            <Stack direction="row" alignItems="center" spacing={1} key={index} mb={1}>
              <Checkbox checked={task.completed} onChange={() => handleTaskToggle(index)} />
              <TextField
                value={task.text}
                onChange={(e) => handleTaskChange(index, e.target.value)}
                placeholder={`Task ${index + 1}`}
                fullWidth
              />
              <IconButton onClick={() => removeTask(index)}>
                ❌
              </IconButton>
            </Stack>
          ))}
          <Button onClick={addTask} fullWidth variant="outlined" sx={{ mt: 1 }}>
            Add Task
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTodoDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSendTodo} variant="contained">
            Send To-Do
          </Button>
        </DialogActions>
      </Dialog>


       {/* To-Do Viewer/Responder */}
      {todoAssigned && userResponse === null && (
        <Box p={2} bgcolor="#fff3e0" borderTop="1px solid #ccc">
          <Typography variant="h6">Today's To-Do: {todoAssigned.name}</Typography>
          <Stack spacing={1} my={1}>
            {todoAssigned.tasks.map((task, idx) => (
              <Typography key={idx}>⬜ {task.text}</Typography>
            ))}
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="success" onClick={handleAccept}>Accept</Button>
            <Button variant="outlined" color="error" onClick={handleDecline}>Decline</Button>
          </Stack>
        </Box>
      )}

      {todoAssigned && userResponse === 'accepted' && (
        <Box p={2} bgcolor="#e8f5e9" borderTop="1px solid #ccc">
          <Typography variant="h6">Your Tasks for Today:</Typography>
          <Stack spacing={1} my={1}>
            {todoAssigned.tasks.map((task, idx) => (
              <Typography key={idx}>✅ {task.text}</Typography>
            ))}
          </Stack>
        </Box>
      )}



     {/* Chat Messages */}
      <Stack
        ref={containerRef}
        flex={1} // This takes all available space
        padding="1rem"
        spacing="1rem"
        backgroundColor={greyColor}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessage.map((i) => (
            <MessageComponent
              key={i._id}
              message={i}
              user={user}
            />
          ))
        }
      </Stack>

      {/* Input Box - Sticks to the bottom */}
      <form
        style={{
          height: "10%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          padding: "0.5rem",
          flexShrink: 0, // Prevents shrinking
        }}
      >
        <Stack 
        direction="row" 
        height="100%" 
        width="100%" 
        position={"relative"}
        alignItems="center"
        
        >
          <IconButton
          sx={{
            position:"absolute",
            left:"0rem",
          }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox
            style={{
              flex: 1,
              height: "2.5rem", // Increased input height
              fontSize: "1rem", // Better text visibility
              padding: "0.5rem",
              paddingLeft: "2.5rem", // shift text right to avoid overlap with icon
              paddingRight: "1rem",
            }}
            placeholder='Type a message...'
            
          />
          <IconButton type="submit"
          sx={{
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu/>
    </Stack>
  );
};

export default Chat;
