// src/pages/NotFound.jsx
import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant={isSmall ? "h4" : "h3"}
            fontWeight={700}
            gutterBottom
          >
            404
          </Typography>

          <Typography
            variant={isSmall ? "h6" : "h5"}
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Page Not Found
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            The page you're looking for doesn't exist or has been moved.
          </Typography>

          <Button
            variant="contained"
            size="large"
            fullWidth={isSmall}
            onClick={() => navigate("/")}
          >
            Go Back Home
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default NotFound;
