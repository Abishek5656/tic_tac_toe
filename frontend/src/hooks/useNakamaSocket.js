// src/hooks/useNakamaSocket.js
import { useState } from "react";
import { getNakamaClient } from "../nakama/nakamaClient";

export const useNakamaSocket = () => {
  const [socket, setSocket] = useState(null);

  const connectSocket = async (session) => {
    try {
      const client = getNakamaClient();
      const newSocket = client.createSocket(false, client.port);

      await newSocket.connect(session);

      console.log("WebSocket connected to Nakama");

      setSocket(newSocket);
      return newSocket;
    } catch (err) {
      console.error("WebSocket connection failed:", err);
      throw err;
    }
  };

  return { socket, connectSocket };
};
