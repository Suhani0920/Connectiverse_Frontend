import React ,{memo}from 'react';
import {Link} from '../styles/StyledComponents';
import {Stack, Typography,Box} from "@mui/material"
import AvatarCard from './AvatarCard';

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
  handleDeleteChat,
 }
 ) => {
  return (
    <Link 
    sx={{
      padding:"0",
    }} 
    to={`/chat/${_id}`} 
    onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}
    >
    <div 
    style={{
      display:"flex",
      gap:"1rem",
      alignItems:"center",
      padding:"1rem",
      backgroundColor: sameSender ?"#CDC1FF" : "unset",
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

     {isOnline && (
  <Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "green" }} />
)}

    </div>
    </Link>
  )
}

export default  memo(Chatitem);


