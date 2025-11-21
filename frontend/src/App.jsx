// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React, { useState, lazy } from "react";


// import { Box } from "@mui/material";


// // import Home from "./pages/Home.jsx";
// // import Matchmaking from "./pages/Matchmaking";

// const Matchmaking = React.lazy(() => import("./pages/Matchmaking.jsx"))
// const GameBoard = React.lazy(() => import("./pages/GameBoard.jsx"));
// const Home = React.lazy(() => import("./pages/Home.jsx"))
// const GameOver = React.lazy(() => import("./pages/GameOver.jsx"))


// function App() {

//   const [username, setUsername] = useState("");


//   // Stores the final game result to pass into GameOver screen later
//   const [gameResult, setGameResult] = useState({
//     result: "draw", // "win", "lose", "draw"
//     finalBoard: [
//       ["X", "O", "X"],
//       ["O", "X", "O"],
//       ["X", "", "O"],
//     ],
//   });

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* HOME SCREEN */}
//         <Box
//           sx={{
//             minHeight: "100vh",
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             bgcolor: "#2d2d2d", // matching your dark background
//           }}
//         >
//           <Route
//             path="/"
//             element={<Home setUsername={setUsername} />}
//           />

//           {/* MATCHMAKING SCREEN */}
//           <Route
//             path="/matchmaking"
//             element={<Matchmaking username={username} />}
//           />

//           {/* GAME BOARD (future) */}
//           <Route
//             path="/game"
//             element={<GameBoard username={username} />}
//           />

//           {/* GAME RESULT SCREEN */}
//           <Route
//             path="/result"
//             element={
//               <GameOver
//                 result={gameResult.result}
//                 finalBoard={gameResult.finalBoard}
//               />
//             }
//           />




//         </Box>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


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
