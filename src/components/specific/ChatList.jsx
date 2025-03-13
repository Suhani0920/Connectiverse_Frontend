import {Stack} from '@mui/material';
import React from 'react';
import Chatitem from '../shared/Chatitem';
const ChatList=(
    {
        w="100%",
        chats=[],
        chatId,
        onlineUsers=[],
        newMessagesAlert=[{
chatId:"",
count:0,

},
],
handleDeleteChat,
onChatSelect, 

})=>{
    return (
        <Stack width={w} direction={"column"}>
        {
            chats.map((data,index)=>{
                const {avatar,_id,name,groupChat,members}=data;
                if (!_id) return null;
                const newMessage=newMessagesAlert.find(({chatId})=>chatId===_id);
                const isOnline=members?.some((member)=>onlineUsers.includes(member));
                
                
                return (
                    <div key={_id} onClick={() => {
                     
                      onChatSelect(data);}}>  
                      <Chatitem
                        index={index}
                        newMessageAlert={newMessage}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                        _id={_id}
                        groupChat={groupChat}
                        sameSender={chatId === _id}
                        handleDeleteChat={handleDeleteChat}
                      />
                    </div>
                  );

            })
        }
        </Stack>
    );
};

export default ChatList;