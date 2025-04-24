import React, { useState, memo } from 'react';
import { Box, Drawer, IconButton, Tooltip, Typography, Stack } from '@mui/material';
import { KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from '../components/styles/StyledComponents';
import AvatarCard from '../components/shared/AvatarCard';
import { sampleChats } from '../constants/sampleData';

const Group = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const navigateBack = () => window.history.back();
  const toggleDrawer = () => setDrawerOpen(open => !open);

  return (
    <Box sx={{ width: '100%', padding: '1rem', height: '100vh' }}>
      {/* Mobile Menu Icon */}
      <IconButton
        onClick={toggleDrawer}
        sx={{ display: { xs: 'inline-flex', sm: 'none' }, position: 'absolute', top: 16, left: 16 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Back Button */}
      <Tooltip title="Back">
        <IconButton
          onClick={navigateBack}
          sx={{
            position: 'absolute',
            top: 16,
            left: { xs: 40, sm: 16 },
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>

      {/* Group List */}
      <Stack
        spacing={2}
        sx={{
          display: { xs: 'none', sm: 'flex' }, // Hide in mobile
          width: '100%',
          maxWidth: 350, // Restrict max width
          p: 2,
          borderRight: '1px solid #ddd',
          overflowY: 'auto',
        }}
      >
        {sampleChats.length > 0 ? (
          sampleChats.map((group) => <GroupListItem key={group._id} group={group} />)
        ) : (
          <Typography textAlign="center" p={1}>
            No Groups
          </Typography>
        )}
      </Stack>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: '80%', maxWidth: 350 },
        }}
      >
        <Stack spacing={2} p={2}>
          {sampleChats.length > 0 ? (
            sampleChats.map((group) => <GroupListItem key={group._id} group={group} />)
          ) : (
            <Typography textAlign="center" p={1}>
              No Groups
            </Typography>
          )}
        </Stack>
      </Drawer>
    </Box>
  );
};

const GroupListItem = memo(({ group }) => (
  <Link to={`/group/${group._id}`}>
    <Stack direction="row" spacing={2} alignItems="center" p={1}>
      <AvatarCard avatar={group.avatar} />
      <Typography>{group.name}</Typography>
    </Stack>
  </Link>
));

export default Group;
