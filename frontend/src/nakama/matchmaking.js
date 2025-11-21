// Matchmaking helper functions

export const startMatchmaking = async (socket) => {
  const result = await socket.addMatchmaker(2, 2);
  return result.ticket; // Ticket to track matchmaking progress
};

export const cancelMatchmaking = async (socket, ticket) => {
  if (!ticket) return;
  await socket.removeMatchmaker(ticket);
};
