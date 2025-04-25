import { AvatarGroup, Stack, Box, Avatar } from "@mui/material";
import React from "react";
import { transformImage } from "../../lib/features";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction="row" spacing={0.5}>
      <AvatarGroup max={max}>
        {avatar.map((i, index) => (
          <Avatar
            key={index}
            src={transformImage(i)}
            alt={`Avatar ${index}`}
            sx={{ width: "3rem", height: "3rem" }}
          />
        ))}
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
