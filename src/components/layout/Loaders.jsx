import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";
const LayoutLoaders = () => {
  return (
    <Grid container height="calc(100vh - 4rem)" spacing={"1rem"}>
      {/* First Column */}
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        sx={{
          backgroundColor: "#735DA5", // Placeholder color
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
        height="100%"
      >
        {/* Placeholder for Sidebar */}
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>

      {/* Second Column */}
      <Grid
        item
        xs={4}
        sm={3}
        md={3}
        sx={{
          backgroundColor: "#CDC1FF", // Placeholder color
          padding: "1rem",
        }}
        height="100%"
      >
        <Stack spacing={"1rem"}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} variant="rectangular" height={"5rem"} />
          ))}
        </Stack>
      </Grid>

      {/* Third Column */}
      <Grid
        item
        xs={7}
        sm={8}
        md={8}
        sx={{
          backgroundColor: "#F8F7FF", // Placeholder color
          padding: "1rem",
        }}
        height="100%"
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};

export default LayoutLoaders;
