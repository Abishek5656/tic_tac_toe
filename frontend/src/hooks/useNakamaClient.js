// src/hooks/useNakamaClient.js
import { useState } from "react";
import { authenticateUser } from "../nakama/nakamaClient";

export const useNakamaClient = () => {
  const [session, setSession] = useState(null);

  /** Authenticate and store session */
  const login = async (username) => {

    const newSession = await authenticateUser(username);
    setSession(newSession);
    return newSession;
  };

  return { session, login };
};
