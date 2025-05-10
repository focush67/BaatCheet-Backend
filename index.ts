import Fastify from "fastify";
import { ApolloServer } from "@apollo/server";
import { fastifyApolloHandler } from "@as-integrations/fastify";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { PrismaClient } from "./generated/prisma";
import { Server as SocketIOServer } from "socket.io";
import { initializeSocket } from "./realtime/socket";
import { connectRedis } from "./realtime/utils/redis";

const prisma = new PrismaClient();
const app = Fastify();

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  try {
    await apollo.start();
    await connectRedis();
    app.route({
      url: "/graphql",
      method: ["GET", "POST"],
      handler: fastifyApolloHandler(apollo, {
        context: async () => ({ prisma }),
      }),
    });

    await app.listen({ port: 4000 });
    const io = new SocketIOServer(app.server, {
      cors: {
        origin: "*",
      },
    });

    initializeSocket(io);

    console.log("🚀 Server running at http://localhost:4000/graphql");
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
