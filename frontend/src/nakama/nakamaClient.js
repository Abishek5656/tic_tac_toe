// src/nakama/nakamaClient.js
import { Client } from "@heroiclabs/nakama-js";
import config from "./nakama.config";

let client;

export const getNakamaClient = () => {
  if (!client) {
    client = new Client(
      config.useSSL ? "https" : "http",
      config.host,
      config.port,
      config.serverKey
    );
  }
  return client;
};
