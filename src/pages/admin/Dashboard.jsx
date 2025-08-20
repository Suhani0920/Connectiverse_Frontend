import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Box, Container, Paper, Stack ,Typography} from '@mui/material'
import { AdminPanelSettings, Group, Message, Notifications, Person } from '@mui/icons-material'
import moment from 'moment'
import { CurveButton, SearchField } from '../../components/styles/StyledComponents'

const Dashboard = () => {
 const Appbar=<Paper
 elevation={3}
 sx={{
  padding: "2rem",
  margin: '2rem 0',
  borderRadius: "1rem",
}}
 >
  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
    <AdminPanelSettings  sx={{fontSize:'2.5rem'}}/>

   <SearchField placeholder="Search....."/>

  <CurveButton>Search</CurveButton>
   <Box flexGrow={1} />
   <Typography
   display={{
    xs:"none",
    lg:"block",
   }}
   color={"rgba(0,0,0,0.7)"}
   textAlign={"center"}
   >
    {
      moment().format('MMMM Do YYYY')
    }
   </Typography>

   <Notifications/>
  </Stack>
 </Paper>

 const Widgets=<Stack
 direction={{
  xs:"column",
  sm:"row"
 }}
 spacing="2rem"
 justifyContent={"space-between"}
 alignItems={"center"}
 margin={"2rem 0"}
 >
     <Widget title={"Users"} value={34} Icon={<Person/>}/>
     <Widget title={"Chats"} value={3} Icon={<Group/>}/>
     <Widget title={"Messages"} value={64} Icon={<Message/>}/>

 </Stack>
  return (
    <AdminLayout>
      <Container component={"main"}>
       {Appbar}

       <Stack
        direction={"row"}
        spacing={"2rem"}
        flexWrap={"wrap"}
       >
       <Paper
       elevation={3}
       sx={{
        padding:"2rem 3.5rem",
        borderRadius:"1rem",
        width:"100%",
        maxWidth:"45rem",
        height:"25rem",
       }}
       >
        <Typography margin={"2rem 0"} variant="h4">Last Messages</Typography>
        {"Chat"}
      
       </Paper>
       <Paper
       elevation={3}
       sx={{
        padding:"1rem",
        borderRadius:"1rem",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:{xs:"100%", sm:"50%"},
        maxWidth:"25rem",
        width:"100%",
        position:"relative",
        height:"25rem",

       }}
       >
        {"Dougnut Chart"}
        <Stack
        position={"absolute"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={"0.5rem"}
        width={"100%"}
        height={"100%"}
        >
         <Group/> <Typography>Vs</Typography>
         <Person/>

        </Stack>
       </Paper>
       </Stack>
       {
        Widgets
       }
      </Container>
    </AdminLayout>
  );
};
const Widget = ({title,value,Icon}) => {
 <Paper
 sx={{
  padding:"2rem",
  margin:"2rem 0",
  borderRadius:"1rem",
  width:"20rem"
 }}
 >
  <Stack alignItems={"center"} spacing={"1rem"}>
    <Typography
    sx={{
      color:"rgba(0,0,0,0.7)",
      borderRadius:"50%",
      border:`5px solid rgba(0,0,0,0.9)`,
      width:"5rem",
      height:"5rem",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >{value}</Typography>
    <Stack>
      {Icon}
     <Typography>{title}</Typography> 
    </Stack>
  </Stack>
  </Paper>;
};

export default Dashboard