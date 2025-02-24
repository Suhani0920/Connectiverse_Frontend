import { Dialog, DialogTitle, InputAdornment, List, Stack } from '@mui/material'
import React, { useState } from 'react'
import {useInputValidation} from "6pp";
import {Search as SearchIcon} from "@mui/icons-material";
const users=[1,2,3];
const Search = () => {
  const search=useInputValidation("");

  const isLoadingSendFriendRequest=false;
  const [users,setUsers]=useState([1,2,3]);
  const addFriendHandler=(id)=>{
    console.log("Add friend",id)
  }
  
  return (
   <Dialog open>
   <Stack p={"2rem"} direction={"column"} width={"25rem"}>
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
        key={user._id} 
        handler={addFriendHandler} 
        handlerIsLoading={isLoadingSendFriendRequest}
        />
      ))
     }
    </List>
   </Stack>
   </Dialog>
  )
}

export default Search