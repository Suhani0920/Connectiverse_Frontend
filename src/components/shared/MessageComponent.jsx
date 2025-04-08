import { Typography } from '@mui/material';
import React ,{memo} from 'react'

const MessageComponent = ({message,user}) => {
  const {sender,content,attachments=[],createdAt}=message;
   const sameSender=sender?._id===user?._id;
    return (
    <div 
    style={{
        alignSelf: sameSender?"flex-end":"flex-start",
        backgroundColor:"white",
        color:"black",
        borderRadius:"5px",
        padding:"0.5rem",
        width:"fit-content",
    }}
    >
       {
        !sameSender && <Typography>{sender.name}</Typography>
       }

       {
        content && <Typography>{content}</Typography>
       }
       {
        attachments.length>0 && attachments.map((attachment)=>(
            <img 
            src={attachment.url}
            alt="message attachment"
            style={{
                width:"100px",
                height:"100px",
                borderRadius:"5px",
                marginTop:"0.5rem",
            }}
            />
        ))
       }
       
        
    </div>
  )
}

export default memo(MessageComponent);