
import { Client } from "@heroiclabs/nakama-js";
import config from "./nakama.config";

let client = null;

/** Create or return singleton client */
export const getNakamaClient = () => {
  if (!client) {
    // client = new Client(
    //   config.serverKey,      // defaultkey
    //   config.host,          // localhost
    //   config.port,          // 7350
    //   config.useSSL         // false → USE HTTP
    // );
 client =  new Client(
  config.serverKey,
  config.host,
  config.port,
  config.useSSL
);
  }
  return client;
};

/** Authenticate user with custom ID (username) */
export const authenticateUser = async (username) => {
  const client = getNakamaClient();

    console.log("###username", username)

  try {
    const session = await client.authenticateCustom(username, true);
    console.log("username", username)
    console.log("Nakama Authenticated:", session);
    return session;
  } catch (err) {
    console.error("Authentication failed:", err);
    throw err;
  }
};
