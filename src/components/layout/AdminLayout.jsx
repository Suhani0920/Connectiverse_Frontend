import React ,{useState} from 'react'
import { Grid ,Box, IconButton , Drawer, Stack, Typography } from '@mui/material';
import {Menu as MenuIcon , Close as CloseIcon} from '@mui/icons-material'
import { useLocation } from 'react-router-dom';

import {Link} from "../styles/StyledComponents";
import {Dashboard } from '@mui/icons-material';



 const adminTabs=[{

    title: "Dashboard",
    path: "/admin/dashboard",
    icon:<Dashboard />,
},];
const Sidebar=({w="100%"})=>{

    const location=useLocation();
    return(
        <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
           <Typography variant='h5' textTransform={"uppercase"}>Connectiverse</Typography>
            <Stack  spacing={"1rem"}>
               {
                adminTabs.map((tab)=>{
                 return(<Link key={tab.path} to={tab.path} >
                  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
                   {tab.icon}
                   <Typography>{tab.title}</Typography>
                  </Stack>
                  
                  </Link>) 
                })
               }
        </Stack>
        </Stack>
       
    ); 

};
const AdminLayout = ({children}) => {
    const [isMobile,setIsMobile]=useState(false);
    const handleMobile=()=>setIsMobile(!isMobile);
    const handleClose=()=>setIsMobile(false);
 
    return (
   <Grid container minHeight={"100vh"} >
    <Box
    sx={{
        display:{xs:"block" , md:"none"},
        position:"fixed",
        right:"1rem",
        top:"1rem",
    }}>
    
    <IconButton onClick={handleMobile}>
       {isMobile? <CloseIcon/>:<MenuIcon/>}
    </IconButton>
 

    </Box>
    <Grid 
     item
     md={4}
     lg={3}
     sx={{
        display:{
            xs:"none",
            md:"block"
        }
     }}>
     <Sidebar/>
    
    </Grid>

    <Grid item 
     xs={12}
     md={8}
     lg={9}
     sx={{
        bgcolor:"#f5f5f5"
     }}
    >
     {children}
    </Grid>
    <Drawer open={isMobile} onClose={handleClose}>
        <Sidebar w="50vw"/>
    </Drawer>
   </Grid>
  )
}

export default AdminLayout