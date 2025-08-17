import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Box, Container, Paper, Stack ,Typography} from '@mui/material'
import { AdminPanelSettings, Notifications } from '@mui/icons-material'
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

 const Widgets=<></>
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
        maxWidth:"45rem"
       }}
       >
        <Typography >Last Messages</Typography>
        {"Chat"}
      
       </Paper>
       </Stack>
       {
        Widgets
       }
      </Container>
    </AdminLayout>
  )
}

export default Dashboard