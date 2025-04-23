import React, { useState, Suspense } from "react";
import { Grid, IconButton, Tooltip, Backdrop } from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  AccountCircle as ProfileIcon,
  Chat as ChatIcon,
} from "@mui/icons-material";

import { useNavigate ,useParams } from "react-router-dom";
import ChatList from "../specific/ChatList";
import NewGroup from "../specific/NewGroup";
import Notifications from "../specific/Notifications";
import Profile from "../specific/Profile";
import Search from "../specific/Search";
import Group from "../../pages/Group";
import {sampleChats} from "../../constants/sampleData";
import Chat from "../../pages/Chat";


const AppLayout = (WrappedComponent) => {
 

  return (props) => {
    
    const { chatId } = useParams();

    const [selectedSection, setSelectedSection] = useState(""); // Track selected section
    const [selectedChat, setSelectedChat] = useState(null);
    const navigate = useNavigate();

    const handleIconClick = (section) => {
      setSelectedSection(section);
    };

    const handleChatClick = (chat) => {
      console.log("Chat Selected:", chat); 
      setSelectedChat(chat); // Set the selected chat
    };
    

    const logoutHandler = () => {
      console.log("Logging out...");
    };

    const handleDeleteChat = (e,Id,groupChat) => {

      e.preventDefault();
      console.log("Deleting Chat...",_id ,groupChat);
    }

    return (
      <Grid container height="100vh" spacing={0}>
        {/* First Column (Sidebar with Icons) */}
        <Grid
          item
          xs={1}
          sx={{
            backgroundColor: "#735DA5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem 0",
            gap: "2rem",
          }}
        >
         
          <IconBtn
            title="Search"
            icon={<SearchIcon />}
            onClick={() => handleIconClick("search")}
          />
          <IconBtn
            title="New Group"
            icon={<AddIcon />}
            onClick={() => handleIconClick("newGroup")}
          />
          <IconBtn
            title="Manage Groups"
            icon={<GroupIcon />}
            onClick={() => handleIconClick("group")}
          />
          <IconBtn
            title="Notifications"
            icon={<NotificationsIcon />}
            onClick={() => handleIconClick("notifications")}
          />
          <IconBtn
            title="Chat"
            icon={<ChatIcon />}
            onClick={() => handleIconClick("chat")}
          />
           <IconBtn
            title="Profile"
            icon={<ProfileIcon />}
            onClick={() => handleIconClick("profile")}
          />
          <IconBtn
            title="Logout"
            icon={<LogoutIcon />}
            onClick={logoutHandler}
          />
        </Grid>

        {/* Second Column (Dynamic Components) */}
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "#CDC1FF",
            padding: "1rem",
          }}
        >
          <Suspense fallback={<Backdrop open />}>
            
            {selectedSection === "search" && <Search/>}
            {selectedSection === "newGroup" && <NewGroup/>}
            {selectedSection === "group" && <Group/>}
            
            {selectedSection === "notifications" && <Notifications/>}
            {selectedSection === "chat" && <ChatList chats={sampleChats} chatId={chatId}
            handleDeleteChat={handleDeleteChat} onChatSelect={handleChatClick}/>}
            {selectedSection === "profile" && <Profile/>}
          </Suspense>
        </Grid>

        {/* Third Column (Chat Details - WrappedComponent renders here) */}
        <Grid
          item
          xs={8}
          sx={{
            backgroundColor: "#F8F7FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
    flexDirection: "column",
          }}
        >
          {selectedChat ? (
            <Chat selectedChat={selectedChat} />
          ) : (
            <img
              src="https://tenor.com/bvRpn.gif"
              alt="GIF Animation"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
            />
          )}

        </Grid>
      </Grid>
    );
  };
};

// Reusable Icon Button
const IconBtn = ({ title, icon, onClick }) => (
  <Tooltip title={title} placement="right">
    <IconButton
      onClick={onClick}
      sx={{
        color: "white",
        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
      }}
    >
      {icon}
    </IconButton>
  </Tooltip>
);

export default AppLayout;