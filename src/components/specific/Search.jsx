import {  DialogTitle, InputAdornment, List, Stack,TextField } from '@mui/material'
import React, { useState } from 'react'
import {useInputValidation} from "6pp";
import {Search as SearchIcon} from "@mui/icons-material";
import { sampleUsers } from '../../constants/sampleData';
import UserItem from '../shared/UserItem';

const Search = () => {
  const search=useInputValidation("");

  const isLoadingSendFriendRequest=false;
  const [users,setUsers]=useState(sampleUsers);
  const addFriendHandler=(id)=>{
    console.log("Add friend",id)
  }
  
  return (
   
   <Stack p={"2rem"} direction={"column"} width={"100%"} height={"100%"}>
    <DialogTitle textAlign={"center"} >Find People</DialogTitle>
    <TextField 
    label="" 
    value={search.value} 
    onChange={search.changeHandler}
    variant="outlined"
    size="small"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    />
    <List>
     {
      users.map((user)=>(
        <UserItem
        user={user} 
        key={user.__id } 
        handler={addFriendHandler} 
        handlerIsLoading={isLoadingSendFriendRequest}
        />
      ))
     }
    </List>
   </Stack>
   
  )
}

export default Search