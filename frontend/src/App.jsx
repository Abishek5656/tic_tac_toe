import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home.jsx"));
const Matchmaking = lazy(() => import("./pages/Matchmaking.jsx"));
const GameBoard = lazy(() => import("./pages/GameBoard.jsx"));
const GameOver = lazy(() => import("./pages/GameOver.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"))

function App() {
  const [username, setUsername] = useState("");

  const [gameResult, setGameResult] = useState({
    result: "draw",
    finalBoard: [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["X", "", "O"],
    ],
  });

  return (
    <BrowserRouter>
      {/* Suspense wrapper for lazy loading */}
      <Suspense
        fallback={
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#2d2d2d",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Routes>

          {/* HOME SCREEN */}
          <Route
            path="/"
            element={
               <PageLayout>
                <Home setUsername={setUsername} username={username} />
               </PageLayout>
               
              }
          />

          {/* MATCHMAKING */}
          <Route
            path="/matchmaking"
            element={
               <PageLayout>
                <Matchmaking username={username}  />
              </PageLayout>
             }
          />

          {/* GAME SCREEN */}
          <Route
            path="/game"
            element={
              <PageLayout>
                <GameBoard username={username} />
              </PageLayout>
            }
          />

          {/* GAME RESULT */}
          <Route
            path="/result"
            element={
              <PageLayout>
                <GameOver
                  result={gameResult.result}
                  finalBoard={gameResult.finalBoard}
                />
              </PageLayout>
            }
          />

          {/* 404 PAGE */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// Common page wrapper layout
const PageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        bgcolor: "#2d2d2d",
        px: { xs: 2, sm: 4 },
      }}
    >
      {children}
    </Box>
  );
};

export default App;
