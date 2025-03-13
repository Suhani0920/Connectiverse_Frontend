import React ,{useRef} from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { greyColor } from '../constants/color';
import { InputBox } from '../components/styles/StyledComponents';
import {AttachFile as AttachFileIcon, Send  as SendIcon} from "@mui/icons-material"



const Chat = ({ selectedChat }) => {
  

  return (
    <>
      <Stack 
        padding={"1rem"}
        spacing={"1rem"}
        backgroundColor={greyColor}
        width="100%" 
        height="80%"
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        </Stack>

      <form style={{
        height: "15%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff", 
        padding: "0.5rem",
      }}>
        <Stack direction={"row"} height={"100"} padding={"1rem"}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <InputBox style={{ flex: 1 }} />
          <IconButton>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default Chat;