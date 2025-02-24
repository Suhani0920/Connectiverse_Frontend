import { Stack,Typography,Avatar } from '@mui/material'
import React from 'react'
import {Face as FaceIcon,AlternateEmail as UserNameIcon,CalendarMonth as CalenderIcon} from '@mui/icons-material';
import moment from 'moment';
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
      sx={
        {
          width:200,
          height:200,
          objectFit:"contain",
          marginBottom:"1rem",
          border:"5px solid white",
        }
      }/>
      <ProfileCard
      heading={"Bio"} 
      text={"lorh dhdsc"}
      />
      <ProfileCard 
      heading={"Username"} 
      text={"@suhani_pal"} 
      Icon={<UserNameIcon/>}
      />
      <ProfileCard 
      heading={"Name"} 
      text={"suhani"} 
      Icon={<FaceIcon/>}
      />
      <ProfileCard 
      heading={"Joined "} 
      text={moment("2023-11-04T18:30:00.00Z").fromNow()} 
      Icon={<CalenderIcon/>}
      />
      
    </Stack>
  )
}

const ProfileCard=({text,Icon,heading})=>(
   <Stack 
    direction={"row"} 
    alignItems={"center"} 
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
    >
     {Icon && <Icon/>}
     <Stack spacing={"0.5rem"}>
       <Typography variant="body1">{heading}</Typography>
       <Typography  color={"gray"} variant="caption">{heading}</Typography>
    </Stack>
    </Stack>
);

export default Profile;
