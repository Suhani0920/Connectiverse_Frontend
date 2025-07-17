import React, { memo } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import AvatarCard from '../components/shared/AvatarCard';
import { sampleChats } from '../constants/sampleData';
import {Link} from '../components/styles/StyledComponents'

const Group = ({ onGroupSelect, selectedGroupId }) => {
  
  return (
    <Box height="100%" p="1rem">
      <GroupList
        myGroups={sampleChats}
        onGroupSelect={onGroupSelect}
        selectedGroupId={selectedGroupId}
      />
    </Box>
  );
};

const GroupList = ({ myGroups = [], onGroupSelect, selectedGroupId }) => (
  <Stack>
    {myGroups.length > 0 ? (
      myGroups.map(group => (
        <GroupListItem
          key={group._id}
          group={group}
          isSelected={selectedGroupId === group._id}
          onClick={() => onGroupSelect(group)}
        />
      ))
    ) : (
      <Typography textAlign="center" padding="1rem">
        No groups found
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, isSelected, onClick, chatId }) => {
  const { name, avatar ,_id } = group;

  return (
    <Link
     to={`?group=${_id}`}
     onClick={(e) => {
      if(chatId=== _id) {
        e.preventDefault();
        
      }
      
      
    }}
    >
    <Box
      onClick={onClick}
      sx={{
        padding: "0.5rem",
        borderRadius: "0.5rem",
        backgroundColor: isSelected ? "#ddd" : "transparent",
        cursor: "pointer",
        "&:hover": { backgroundColor: "#eee" },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        <AvatarCard avatar={avatar} />
        <Typography noWrap>{name}</Typography>
      </Stack>
    </Box>
    </Link>
  );
});


export default Group;
