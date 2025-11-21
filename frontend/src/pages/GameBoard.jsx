// import React from "react";

// const GameBoard = () => {
//   return (
//     <div
//       style={{
//         maxWidth: "420px",
//         margin: "30px auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         background: "black",
//       }}
//     >
//       {/* Header */}
//       <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
//         Player X (You) vs Player O
//       </h2>

//       {/* Turn Indicator */}
//       <div
//         style={{
//           padding: "10px",
//           textAlign: "center",
//           fontSize: "17px",
//           background: "#eaeaea",
//           borderRadius: "8px",
//           marginBottom: "20px",
//         }}
//       >
//         Turn: Your Turn (X)
//       </div>

//       {/* Game Board UI (dummy) */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "8px",
//           marginBottom: "20px",
//         }}
//       >
//         {/* 9 static boxes */}
//         {Array(9)
//           .fill(null)
//           .map((_, i) => (
//             <div
//               key={i}
//               style={{
//                 height: "100px",
//                 fontSize: "28px",
//                 fontWeight: "bold",
//                 background: "#fff",
//                 border: "2px solid #444",
//                 borderRadius: "6px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {/* Dummy symbols to show UI look */}
//               {i === 0 ? "X" : i === 1 ? "O" : ""}
//             </div>
//           ))}
//       </div>

//       {/* Bottom Buttons */}
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <button
//           style={{
//             padding: "10px 15px",
//             background: "#f44336",
//             border: "none",
//             color: "white",
//             fontWeight: "bold",
//             borderRadius: "6px",
//             cursor: "pointer",
//           }}
//         >
//           Leave Game
//         </button>

//         <button
//           style={{
//             padding: "10px 15px",
//             background: "#2196f3",
//             border: "none",
//             color: "white",
//             fontWeight: "bold",
//             borderRadius: "6px",
//             cursor: "pointer",
//           }}
//         >
//           Restart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GameBoard;



// src/pages/GameOver.jsx
import React from "react";
import {
  Box,
  Button,
  Container,
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

          {/* Label */}
          <Typography variant="h6" fontWeight={500} sx={{ mb: 2 }}>
            Final Board:
          </Typography>

          {/* 🔥 Final Board Grid (Matches your GameBoard UI) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {finalBoard.flat().map((cell, i) => (
              <div
                key={i}
                style={{
                  height: "100px",
                  fontSize: "28px",
                  fontWeight: "bold",
                  background: "#fff",
                  border: "2px solid #444",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {cell}
              </div>
            ))}
          </div>

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

