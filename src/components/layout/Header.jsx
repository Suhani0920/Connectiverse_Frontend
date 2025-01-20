import React from 'react';
import {Box,AppBar,Toolbar,Typography,IconButton} from '@mui/material';
import {Menu as MenuIcon,Search as SearchIcon,Add as AddIcon} from '@mui/icons-material';
import {purple} from '../../constants/color'
const Header = () => {
   const handleMobile=()=>{
    console.log("Mobile");
   };

   const openSearchDialouge=()=>{
    console.log("Open search bar");
   }

   const openNewGroup=()=>{
    console.log("new group");
   }
   
    return (
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
                <IconButton color="inherit" size="large" onClick={openSearchDialouge}>
                    <SearchIcon />
                  </IconButton> 
                   <IconButton color="inherit" size="large" onClick={openNewGroup}>
                     <AddIcon />
                   </IconButton>  
                </Box>  
            </Toolbar>
        </AppBar>
        
        </Box>
    );
};

export default Header;