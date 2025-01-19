import React from "react";
import { Container, Typography, Button } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#FAF3E0", // Beige background
        textAlign: "center",
        height: "100vh", // Full height
        width: "100vw", // Full viewport width
        padding: 0, // Remove default padding
        margin: 0, // Remove default margin
        overflow: "hidden", // Prevent any overflow
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#754043", // Updated color for the "Oops!" text
          fontWeight: "bold",
          fontSize: { xs: "3rem", sm: "4rem", md: "5rem" }, // Responsive font size
          animation: "fadeIn 1s ease-in-out",
          marginBottom: "1rem",
        }}
      >
        Oops! Page Not Found
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#50364E", // Dark pinkish color for the text
          fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font size
          marginBottom: "2rem",
          fontStyle: "italic",
          maxWidth: "600px",
          marginX: "auto",
        }}
      >
        Looks like you’re lost. The page you are looking for does not exist. But don’t worry, you can always go back to the homepage and start fresh!
      </Typography>
      <Button
        sx={{
          backgroundColor: "#50364E", // Dark pink button
          color: "white",
          "&:hover": { backgroundColor: "#40243C" },
          padding: "1rem 2.5rem",
          borderRadius: "50px",
          fontWeight: "bold",
          fontSize: "1.2rem",
          animation: "pulse 2s infinite", // Animation for button
        }}
        variant="contained"
        onClick={() => window.location.href = "/"} // Go to homepage
      >
        Go Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
