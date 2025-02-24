import React from 'react';
import {Link} from '../styles/StyledComponents';
import {Stack, Typography} from "@mui/material"

 const Chatitem = (
{
  avatar=[],
  name,
  _id,
  groupChat=false,
  sameSender,
  isOnline,
  newMessageAlert,
  index=0,
  handleDeleteChatOpen,
 }
 ) => {
  return (
    <Link 
    sx={{
      padding:"0",
    }}
    to={`/chat/${_id}`} 
    onContextMenu={(e)=>handleDeleteChatOpen(e,_id,groupChat)}
    >
    <div style={{
      display:"flex",
      gap:"1rem",
      alignItem:"center",
      padding:"1rem",
      backgroundColor: sameSender ? "black" : "unset",
      color: sameSender ? "white" : "unset",
      borderBottom:"1px solid #f0f0f0",
      position:"relative",
    }}>
     <AvatarCard avatar={avatar}/>
     <Stack>
      <Typography>{name}</Typography>
      {
        newMessageAlert && (
          <Typography>{newMessageAlert.count} New Message</Typography>
        )
      }
     </Stack>

     isOnline && <Box sx={{
          
     }} />

    </div>
    </Link>
  )
}

export default  memo(Chatitem);


