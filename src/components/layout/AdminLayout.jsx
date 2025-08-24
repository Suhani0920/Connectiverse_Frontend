import React ,{useState} from 'react'
import { Grid ,Box, IconButton , Drawer, Stack, Typography, styled } from '@mui/material';
import {Menu as MenuIcon , Close as CloseIcon, ExitToApp} from '@mui/icons-material'
import { useLocation , Link as LinkComponent , Navigate } from 'react-router-dom';



import {Dashboard , ManageAccounts,Groups , Message,Phone} from '@mui/icons-material';

const Link = styled(LinkComponent)`
text-decoration:none;
border-radius:2rem;
padding:1rem 2rem;
color: balck;
&:hover{
 color:rgba(0,0,00.54); 
}
`



 const adminTabs=[{
    title: "Dashboard",
    path: "/admin/dashboard",
    icon:<Dashboard />,
},
{
    title: "Users",
    path: "/admin/user-management",
    icon:<ManageAccounts />,
},
{
    title: "Chats",
    path: "/admin/chat-management",
    icon:<Groups />,
},
{
    title: "Messages",
    path: "/admin/message-management",
    icon:<Message />,
},];
const Sidebar=({w="100%"})=>{

    const location=useLocation();
    const logoutHandler=()=>{
        console.log("logout");
    }
    return(
        <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
           <Typography variant='h5' textTransform={"uppercase"}>Connectiverse</Typography>
            <Stack  spacing={"1rem"}>
               {
                adminTabs.map((tab)=>{
                 return(
                 <Link key={tab.path} to={tab.path}
                 sx={
                    location.pathname===tab.path &&{
                      
                      color:"black",
                      ":hover":{color:"gray",bgcolor:"transparent"},
                    }
                 }
                 >
                  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
                   {tab.icon}
                   <Typography fontSize={"1.2rem"}>{tab.title}</Typography>
                  </Stack>
                  
                  </Link>) 
                })
               }



               <Link 
               onClick={logoutHandler}
               >
                  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
                  <ExitToApp/>
                   <Typography fontSize={"1.2rem"}>Logout</Typography>
                  </Stack>
                  
                  </Link>
        </Stack>
        </Stack>
       
    ); 

};

const isAdmin=true; // This should be replaced with actual admin check logic
const AdminLayout = ({children}) => {
    const [isMobile,setIsMobile]=useState(false);
    const handleMobile=()=>setIsMobile(!isMobile);
    const handleClose=()=>setIsMobile(false);

    if(!isAdmin){
        return <Navigate to="/admin/login"/>;
    }
 
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