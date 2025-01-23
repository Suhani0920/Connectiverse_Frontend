import React ,{useState,Suspense,lazy} from 'react';
import {Box,AppBar,Toolbar,Typography,IconButton,Tooltip,Backdrop} from '@mui/material';
import {Menu as MenuIcon,Search as SearchIcon,Add as AddIcon,Group as GroupIcon,Logout as LogoutIcon,Notifications as NotificationsIcon} from '@mui/icons-material';
import {purple} from '../../constants/color';
import {useNavigate} from 'react-router-dom';


const Search =lazy(()=>import("../specific/Search"));
const Notification =lazy(()=>import("../specific/Notifications"));
const NewGroup = lazy(()=>import("../specific/NewGroup"));
const Header = () => {
  const navigate=useNavigate();
  const [isMobile,setIsMobile]=useState(false);
  const [isSearch,setIsSearch]=useState(false);
  const [isNewGroup,setIsNewGroup]=useState(false);
  const [isNotification,setIsNotification]=useState(false);
  
  
  const handleMobile=()=>{
    setIsMobile((prev)=>!prev);
   };

   const openSearchDialouge=()=>{
    setIsSearch((prev)=>!prev);
   }

   const openNewGroup=()=>{
    setIsNewGroup((prev)=>!prev);
   }

   const openNotification=()=>{
    setIsNotification((prev)=>!prev);
    
   }

   const navigateToGroup=()=>navigate("/groups");

   const logoutHandler=()=>{}

   
   
    return (

      <>
        <Box sx={{flexGrow:1}} height={"4rem"}> 
        <AppBar position="static" sx={{
            bgcolor:purple,
        }} >


            <Toolbar>
                  <Typography
                  variant="h6"
                  sx={{
                    display:{xs:"none" ,sm:"block"},
                  }}
                  >
                    Connectiverse
                    
                </Typography>
                <Box  sx={{
                    display:{xs:"block" ,sm:"none"},
                  }}>
                  <IconButton color="inherit" onClick={handleMobile}>
                    <MenuIcon />
                  </IconButton>

                  </Box>
                <Box sx={{
                    flexGrow:1,
                }}/>  
                <Box>

                  <IconBtn 
                  title={"Search"}
                  icon={<SearchIcon/>}
                  onClick={openSearchDialouge}
                  />

                  <IconBtn 
                  title={"New Group"}
                  icon={<AddIcon/>}
                  onClick={openNewGroup}
                  />
                
                  <IconBtn 
                  title={"Manage Groups"}
                  icon={<GroupIcon/>}
                  onClick={navigateToGroup}
                  />


                  <IconBtn 
                  title={"Notifications"}
                  icon={<NotificationsIcon/>}
                  onClick={openNotification}
                  />

                  <IconBtn 
                  title={"Logout"}
                  icon={<LogoutIcon/>}
                  onClick={logoutHandler}
                  />
                 
                  
                  
                 



                </Box>  
            </Toolbar>
        </AppBar>
        
        </Box>

        {
          isSearch &&  (<Suspense fallback={<Backdrop  open />}>
            <Search />
          </Suspense>
        )}

        {
          isNotification &&  (<Suspense fallback={<div>Loading...</div>}>
            <Notification />
          </Suspense>
        )}

        {
          isNewGroup &&  (<Suspense fallback={<div>Loading...</div>}>
            <NewGroup />
          </Suspense>
        )}
       </>
    );
};

const IconBtn=({title,icon,onClick})=>{
  return(
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header;