import React ,{useState}from 'react'
import {Box, Drawer, Grid, IconButton, Tooltip} from '@mui/material'
import { KeyboardBackspace  as KeyboardBackspaceIcon , Menu as MenuIcon} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const Group = () => {
  const navigate=useNavigate();

  const [isMobileMenuOpen , setIsMobileMenuOpen]=useState(false);
  const navigateBack=()=>{
    
    navigate("/");
  };

  const handleMobile=()=>{
    setIsMobileMenuOpen((prev)=>!prev);
  };
  
  const handleMobileClose=()=>{
    setIsMobileMenuOpen(false);
  }
  const IconBtns=<>

    <Box
    sx={{
      display:{
        xs:"block",
        sm:"none",
        position:"fixed",
      }
     }}
    >
    <IconButton onClick={handleMobile}>
      <MenuIcon/>
    </IconButton>
    </Box>

  <Tooltip title="back" placement="top"> 
    <IconButton
     sx={{
      position:"absolute",
      top:"2rem",
      left:"2rem",
     }}
    onClick={navigateBack}
    >
      <KeyboardBackspaceIcon/>
    </IconButton>
  </Tooltip>
  </>;
  return (
    <Grid container height={"100vh"}>
     <Grid
      item
      sx={{
        display:{
          xs:"none",
          sm:"block",
        },
      }}
      sm={4}
     >
      Groups List
     </Grid>
     <Grid item xs={12} sm={8} sx={{
      display:"flex",
      flexDirection:"column",

      alignItems: "center",
      position:"relative",
      padding:"1rem 3rem",
     }}>
      {IconBtns}
     </Grid>
     <Drawer open={isMobileMenuOpen} onClose={handleMobileClose}>heyy</Drawer>
    </Grid>
  );
};

const GroupList=({w="100%",myGroups=[],chatId})=>{
  return (
    <div>
      Group List
    </div>
  )
}

export default Group