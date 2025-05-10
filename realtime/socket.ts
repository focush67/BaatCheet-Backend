import { Server, Socket } from "socket.io";
import { redis } from "./utils/redis";

export function initializeSocket(io: Server) {
  io.on("connection", (socket: Socket) => {
    console.log("a user connected", socket.id);

    socket.on("joinRoom", async (roomId: string) => {
      console.log(`${socket.id} joining room: ${roomId}`);
      redis.subscribe(roomId, (message) => {
        console.log(`New message in room ${roomId}:`, message);
        socket.emit("newMessage", message);
      });

      const messages = await redis.lrange(roomId, 0, 10);
      socket.emit("loadMessages", messages);
    });

    socket.on("leaveRoom", (roomId: string) => {
      console.log(`${socket.id} leaving room: ${roomId}`);
      redis.unsubscribe(roomId);
    });

    socket.on("sendMessage", async (roomId: string, message: string) => {
      console.log("Received message:", message);
      const timestamp = Date.now();
      await redis.rpush(roomId, JSON.stringify({ message, timestamp }));

      redis.publish(roomId, JSON.stringify({ message, timestamp }));
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
}
