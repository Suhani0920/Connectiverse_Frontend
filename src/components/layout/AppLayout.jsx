import React, { useState, Suspense } from "react";
import { Grid, Box, IconButton, Tooltip, Backdrop } from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { purple } from "../../constants/color";
import { useNavigate } from "react-router-dom";

const AppLayout = (WrappedComponent) => {
  return (props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedSection, setSelectedSection] = useState(""); // To track which section is selected

    const navigate = useNavigate();

    const handleMobile = () => {
      setIsMobile((prev) => !prev);
    };

    const handleIconClick = (section) => {
      setSelectedSection(section);
    };

    const logoutHandler = () => {
      // Add your logout logic here
    };

    return (
      <>
        <Grid container height="calc(103vh)" spacing={"1rem"}>
          {/* First Column (Sidebar with Icons) */}
          <Grid
            item
            xs={1}
            sm={1}
            md={1}
            sx={{
              backgroundColor: "#735DA5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem",
            }}
            height="100%"
          >
            <IconBtn
              title={"Search"}
              icon={<SearchIcon />}
              onClick={() => handleIconClick("search")}
            />
            <IconBtn
              title={"New Group"}
              icon={<AddIcon />}
              onClick={() => handleIconClick("newGroup")}
            />
            <IconBtn
              title={"Manage Groups"}
              icon={<GroupIcon />}
              onClick={() => handleIconClick("group")}
            />
            <IconBtn
              title={"Notifications"}
              icon={<NotificationsIcon />}
              onClick={() => handleIconClick("notifications")}
            />
            <IconBtn
              title={"Logout"}
              icon={<LogoutIcon />}
              onClick={logoutHandler}
            />
          </Grid>

          {/* Second Column (Content based on selected icon) */}
          <Grid
            item
            xs={4}
            sm={3}
            md={3}
            sx={{
              backgroundColor: "#CDC1FF",
              padding: "1rem",
            }}
            height="100%"
          >
            {selectedSection === "search" && (
              <Suspense fallback={<Backdrop open />}>
                /* Your Search Component here */
              </Suspense>
            )}
            {selectedSection === "newGroup" && (
              <Suspense fallback={<div>Loading...</div>}>
                /* New Group Component here */
              </Suspense>
            )}
            {selectedSection === "group" && (
              <Suspense fallback={<div>Loading...</div>}>
                /* Group Component here */
              </Suspense>
            )}
            {selectedSection === "notifications" && (
              <Suspense fallback={<div>Loading...</div>}>
                /* Notification Component here */
              </Suspense>
            )}
          </Grid>

          {/* Third Column (Chat Details) */}
          <Grid
            item
            xs={7}
            sm={8}
            md={8}
            sx={{
              backgroundColor: "#F8F7FF",
              padding: "1rem",
            }}
            height="100%"
          >
            {selectedSection === "chat" && (
              <Suspense fallback={<div>Loading...</div>}>
                /* Your Chat Details Component here */
              </Suspense>
            )}
          </Grid>
        </Grid>
      </>
    );
  };
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default AppLayout;
