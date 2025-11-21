import { useState } from "react";
import { getNakamaClient } from "../nakama/nakamaClient";
import config from "../nakama/nakama.config";

export const useNakamaSocket = () => {
  const [socket, setSocket] = useState(null);

  const connectSocket = async (session) => {
    try {
      const client = getNakamaClient();

      const newSocket = client.createSocket(config.useSSL, config.port);

      await newSocket.connect(session);

      console.log("WebSocket connected");
      setSocket(newSocket);
      return newSocket;

    } catch (err) {
      console.error("WebSocket connection failed:", err);
      throw err;
    }
  };

  return { socket, connectSocket };
};
