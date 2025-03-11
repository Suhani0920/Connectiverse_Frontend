
import React ,{useRef} from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { greyColor } from '../constants/color';
import { InputBox } from '../components/styles/StyledComponents';
import {AttachFile as AttachFileIcon, Send  as SendIcon} from "@mui/icons-material"
import { Form } from "react-router-dom";


const Chat = () => {
  const containerRef=useRef(null);
    return (
        <>
    <Stack 
    ref={containerRef} 
    boxSizing={"border-box"}
    padding={"1rem"}
    spacing={"1rem"}
    backgroundColor={greyColor}
    p={{ xs: 2, sm: 4 }} 
    direction="column" 
    width="100%" 
    height="90%"
    sx={{
        overflowX:"hidden",
        overflowY:"auto",
    }}
    >
        {

        }
    </Stack>
    <form style={{
       height:"10%", 
    }}>
      <Stack direction={"row"}>
        <IconButton>
            <AttachFileIcon/>
        </IconButton>
        <InputBox/>

        <IconButton>
            <SendIcon/>
        </IconButton>

      </Stack>


    </form>
    </>
  )
}

export default Chat;
