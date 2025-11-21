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


import { useLocation, useNavigate } from "react-router-dom";
import { useNakamaSocket } from "../hooks/useNakamaSocket";
import { startMatchmaking, cancelMatchmaking } from "../nakama/matchmaking";


const Matchmaking = ({ username = "Abishek"}) =>   {
    
  const location = useLocation();
  const session = location.state?.session;
  const navigate = useNavigate();

  const { socket, connectSocket } = useNakamaSocket();
  const [ticket, setTicket] = useState(null);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  //Connect WebSocket on load
  useEffect(() => {
    if (!session) return;
    connectSocket(session);
  }, [session]);

  //Start matchmaking when socket is ready
  useEffect(() => {
    if (!socket) return;

    const run = async () => {
      const newTicket = await startMatchmaking(socket);
      setTicket(newTicket);
    };

    run();

    // Match found listener
    socket.onmatchmakermatched = (match) => {
      navigate("/game", { state: { match } });
    };
  }, [socket]);


  const handleCancel = async () => {
    await cancelMatchmaking(socket, ticket);
    navigate("/");
  };

  return (
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
  );
};

export default Matchmaking;
