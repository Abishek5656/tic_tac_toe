// src/pages/GameOver.jsx
import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const GameOver = ({
  result = "win", // "win" | "lose" | "draw"
  finalBoard = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "", "O"],
  ],
  onPlayAgain,
  onHome,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // Determine message and emoji
  const getResultText = () => {
    if (result === "win") return "🎉 YOU WIN!";
    if (result === "lose") return "❌ YOU LOST!";
    return "🤝 DRAW!";
  };

  const getResultColor = () => {
    if (result === "win") return "success.main";
    if (result === "lose") return "error.main";
    return "text.primary";
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
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            GAME RESULT
          </Typography>

          {/* Result Message */}
          <Typography
            variant={isSmall ? "h5" : "h4"}
            fontWeight="600"
            sx={{ mb: 4 }}
            color={getResultColor()}
          >
            {getResultText()}
          </Typography>

          {/* Final Board Label */}
          <Typography
            variant="h6"
            fontWeight={500}
            sx={{ mb: 2 }}
          >
            Final Board:
          </Typography>

          {/* FINAL BOARD GRID */}
          <Box sx={{ my: 3 }}>
            <Grid container spacing={1}>
              {finalBoard.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <Grid item xs={4} key={`${rowIndex}-${colIndex}`}>
                    <Box
                      sx={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        bgcolor: "grey.100",
                        borderRadius: 2,
                        border: "2px solid #ccc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: isSmall ? "2rem" : "2.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      {cell || ""}
                    </Box>
                  </Grid>
                ))
              )}
            </Grid>
          </Box>

          {/* Buttons */}
          <Stack
            direction={isSmall ? "column" : "row"}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth={isSmall}
              onClick={onPlayAgain}
            >
              Play Again
            </Button>

            <Button
              variant="outlined"
              fullWidth={isSmall}
              onClick={onHome}
            >
              Go Home
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default GameOver;
