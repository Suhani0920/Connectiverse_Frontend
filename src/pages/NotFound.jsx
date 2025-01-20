import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        backgroundColor: "#ffffff", // White background
        padding: 0,
      }}
    >
      {/* Logo (Top Left Placeholder) */}
      <Box
        sx={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#000000", // Black logo
        }}
      >
       
      </Box>

      {/* 404 Text */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "6rem", sm: "8rem" },
          fontWeight: "bold",
          color: "#000F28", // Dark navy blue
        }}
      >
        4
        <Box
          component="span"
          sx={{
            fontSize: { xs: "5rem", sm: "7rem" },
            color: "#000F28",
            fontWeight: "normal",
            marginX: "0.5rem",
          }}
        >
          {"{}"}
        </Box>
        4
      </Typography>

      {/* Oops Text */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#000F28",
          marginBottom: "1rem",
        }}
      >
        OOPS!
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          color: "#666666", // Light gray text
          marginBottom: "2rem",
        }}
      >
        SOMETHING WENT WRONG
        <br />
        GO BACK TO{" "}
        <Box
          component="span"
          sx={{ color: "#735DA5", fontWeight: "bold" }} // Green for "HOME"
        >
          HOME
        </Box>
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#735DA5", // purple background
          color: "#ffffff",
          fontWeight: "bold",
          textTransform: "none",
          paddingX: "2rem",
          paddingY: "0.5rem",
          
        }}
        onClick={() => (window.location.href = "/")}
      >
        Go to Homepage
      </Button>
    </Container>
  );
};

export default NotFoundPage;
