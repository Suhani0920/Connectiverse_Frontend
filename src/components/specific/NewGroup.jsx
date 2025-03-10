import React ,{useState} from 'react'
import { Avatar, Button, DialogTitle, List, ListItem, Stack, TextField, Typography } from '@mui/material';
import {sampleUsers} from '../../constants/sampleData';
import UserItem from '../shared/UserItem';
import {useInputValidation} from "6pp";
const NewGroup = () => {
  const [members ,setMembers]=useState(sampleUsers);
  const [selectedMembers ,setSelectedMembers]=useState([]);


  const groupName=useInputValidation("");
 
 const submitHandler=()=>{};
 
 
 
  const selectMemberHandler=(id)=>{
    setSelectedMembers((prev)=>prev.includes(id)?prev.filter((i)=>i!==id):[...prev,id]);
   
  }
  console.log(selectedMembers);
  return (
    <Stack p={{ xs: 2, sm: 4 }} direction="column" width="100%" height="100%" >
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>
        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
        <Typography variant={"body1"}>Members</Typography>
        <Stack>
          { members.map((user)=>(
                  <UserItem
                  user={user} 
                  key={user._id } 
                  handler={selectMemberHandler} 
                 
                  />
                ))
          }
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant='outlined' color="error">Cancel</Button>
          <Button variant="outlined" color="primary" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
  )
}

export default NewGroup