import { Avatar, Button, DialogTitle, List, ListItem, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import { sampleNotifications } from '../../constants/sampleData';
const Notifications = () => {
 
 const friendRequesthandler=({_id,accept})=>{

 };
 
 
  return (
    
      <Stack p={{ xs: 2, sm: 4 }} direction="column" width="100%" height="100%">
        <DialogTitle>Notifications</DialogTitle>
        
        <List>
          {sampleNotifications.length>0?(
            sampleNotifications.map((notification)=>(
              <NotificationItem  
               sender={notification.sender} 
               _id={notification._id} 
               handler={friendRequesthandler} 
               key={notification._id}
              />
            ))
          ) : (<Typography textAlign={"center"}>No Notifications</Typography>)}
        </List>
      </Stack>
    
  )
}

const NotificationItem=memo(({sender,_id,handler})=>{
  return (
    <ListItem sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between' ,width: "100%", // ensure it doesn't overflow
      flexWrap: "wrap", 
    }}
      >
   <Stack 
     direction={"row"} 
     alignItems={"center"} 
     gap={1} 
     flexGrow={1}
     sx={{
      minWidth: 1, // important for text truncation
    }}
    >
    <Avatar/>
    <Typography
    variant="body1"
    sx={{
        flexGrow:1,
        display:"-webkit-box",
        webKitLineClamp:1,
        webKitBoxOrient:"vertical",
        overflow:"hidden",
        textOverflow:"ellipsis",
        whiteSpace: 'nowrap',
        
        
    }}
    >
        {`${sender.name} sent you a friend request`}
    </Typography>
   
   <Stack
   direction={{
    xs:"row",
   }}
   >
    <Button onClick={()=>handler({_id,accept:true})}>Accept</Button>
    <Button color="error" onClick={()=>handler({_id,accept:false})}>Reject</Button>
   </Stack>
   </Stack>
   </ListItem>
)
});

export default Notifications;