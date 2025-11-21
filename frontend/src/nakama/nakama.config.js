// src/nakama/nakama.config.js
const nakamaConfig = {
  host: import.meta.env.VITE_NAKAMA_HOST || "localhost",
  port: Number(import.meta.env.VITE_NAKAMA_PORT) || 7350,
  serverKey: import.meta.env.VITE_NAKAMA_SERVER_KEY || "defaultkey",
  useSSL: import.meta.env.VITE_NAKAMA_USE_SSL === "true",
};

export default nakamaConfig;
