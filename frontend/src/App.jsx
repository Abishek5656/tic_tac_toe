import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home.jsx";
import Matchmaking from "./pages/Matchmaking";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
