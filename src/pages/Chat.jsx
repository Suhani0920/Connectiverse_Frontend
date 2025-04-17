import React, { useRef } from 'react';
import { IconButton, Stack } from '@mui/material';
import { greyColor } from '../constants/color';
import { InputBox } from '../components/styles/StyledComponents';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const user={
  _id:"sdfdser",
  name:"Narendra",
}

const Chat = ({ selectedChat }) => {
  
   const containerRef=useRef(null);
  return (
    <Stack
      height="100vh" // Full height of the viewport
      width="100%"
      display="flex"
      flexDirection="column"
    >
      {/* Chat Messages Area */}
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
