import React, { useState } from 'react';
import { Avatar, Button, DialogTitle, List, ListItem, Stack, TextField, Typography } from '@mui/material';
import { sampleUsers } from '../../constants/sampleData';
import UserItem from '../shared/UserItem';
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const groupName = useInputValidation("");

  const submitHandler = () => {};

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Stack p={{ xs: 2, sm: 4 }} direction="column" width="100%" height="100%" spacing={2}>
      {/* Move the title a little up using negative margin */}
      <DialogTitle
        textAlign="center"
        variant="h4"
        sx={{ mt: -1, mb: 1 }}
      >
        New Group
      </DialogTitle>

      {/* Text field spacing is fine */}
      <TextField 
      label="Group Name" 
      value={groupName.value} 
      onChange={groupName.changeHandler}  
      
     variant="outlined"
    size="small"
      />

      {/* Move 'Members' and list slightly down */}
      <Typography variant="body1" sx={{ mt: 2 }}>
        Members
      </Typography>

      {/* Space out the list slightly */}
      <Stack spacing={1} sx={{ mt: 1 }}>
        {members.map((user) => (
          <UserItem
            user={user}
            key={user._id}
            handler={selectMemberHandler}
            isAdded={selectedMembers.includes(user._id)}
          />
        ))}
      </Stack>

      {/* Button section remains the same */}
      <Stack direction="row" justifyContent="space-evenly" sx={{ mt: 3 }}>
        <Button variant="" color="error">Cancel</Button>
        <Button variant="" color="primary" onClick={submitHandler}>Create</Button>
      </Stack>
    </Stack>
  );
};

export default NewGroup;
