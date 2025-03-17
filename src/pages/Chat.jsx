import React from 'react';
import { IconButton, Stack } from '@mui/material';
import { greyColor } from '../constants/color';
import { InputBox } from '../components/styles/StyledComponents';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';

const Chat = ({ selectedChat }) => {
  return (
    <Stack
      height="100vh" // Full height of the viewport
      width="100%"
      display="flex"
      flexDirection="column"
    >
      {/* Chat Messages Area */}
      <Stack
        flex={1} // This takes all available space
        padding="1rem"
        spacing="1rem"
        backgroundColor={greyColor}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Chat messages will go here */}
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
        <Stack direction="row" height="100%" width="100%" alignItems="center">
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <InputBox
            style={{
              flex: 1,
              height: "2.5rem", // Increased input height
              fontSize: "1rem", // Better text visibility
              padding: "0.5rem",
            }}
          />
          <IconButton>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </Stack>
  );
};

export default Chat;
