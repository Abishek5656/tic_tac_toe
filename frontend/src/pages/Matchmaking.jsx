// src/pages/Matchmaking.jsx
import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


const Matchmaking = ({ username = "Abishek", onCancel }) =>   {
    
 const navigate = useNavigate();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));


  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          {/* Title */}
          <Typography
            variant={isSmall ? "h5" : "h4"}
            fontWeight={700}
            gutterBottom
          >
            MATCHMAKING
          </Typography>

          <Box sx={{ my: 4 }}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Searching for an opponent...
            </Typography>

            {/* Animated Loader */}
            <CircularProgress size={isSmall ? 50 : 60} sx={{ mb: 3 }} />

            {/* Estimated wait time */}
            <Typography variant="body2" color="text.secondary">
              Estimated Wait: 2 - 4 seconds
            </Typography>
          </Box>

          {/* Cancel Button */}
          <Stack spacing={2}>
            <Button
              variant="outlined"
              color="error"
              size="large"
              fullWidth
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Stack>

          {/* Footer */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="caption" color="text.secondary">
              Your Username: {username}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Matchmaking;
