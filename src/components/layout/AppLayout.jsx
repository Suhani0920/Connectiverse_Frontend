import React, { useState, Suspense } from "react";
import { Grid, IconButton, Tooltip, Backdrop } from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  AccountCircle as ProfileIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AppLayout = (WrappedComponent) => {
  return (props) => {
    const [selectedSection, setSelectedSection] = useState(""); // Track selected section
    const navigate = useNavigate();

    const handleIconClick = (section) => {
      setSelectedSection(section);
    };

    const logoutHandler = () => {
      console.log("Logging out...");
    };

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
            
            {selectedSection === "search" && <div>Search Component</div>}
            {selectedSection === "newGroup" && <div>New Group Component</div>}
            {selectedSection === "group" && <div>Group Component</div>}
            {selectedSection === "notifications" && <div>Notification Component</div>}
            {selectedSection === "profile" && <div>Profile Component</div>}
          </Suspense>
        </Grid>

        {/* Third Column (Chat Details - WrappedComponent renders here) */}
        <Grid
          item
          xs={8}
          sx={{
            backgroundColor: "#F8F7FF",
            padding: "1rem",
          }}
        >
          <WrappedComponent {...props} />
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
