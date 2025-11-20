import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, lazy } from "react";

// import Home from "./pages/Home.jsx";
// import Matchmaking from "./pages/Matchmaking";

const Matchmaking = React.lazy(() => import("./pages/Matchmaking.jsx"))
const GameBoard   = React.lazy(() => import("./pages/GameBoard.jsx"));
const Home        = React.lazy(() => import("./pages/Home.jsx"))


function App() {

    const [username, setUsername] = useState("");

  return (
    <BrowserRouter>
      <Routes>
         {/* HOME SCREEN */}
        <Route
          path="/"
          element={<Home setUsername={setUsername} />}
        />

        {/* MATCHMAKING SCREEN */}
        <Route
          path="/matchmaking"
          element={<Matchmaking username={username} />}
        />

        {/* GAME BOARD (future) */}
        <Route
          path="/game"
          element={<GameBoard username={username} />}
        />


        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
