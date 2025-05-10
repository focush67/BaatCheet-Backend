import { createClient } from "redis";

export const redis = createClient({
  url: "redis://localhost:6379",
});

redis.on("error", (err) => console.log(`Redis Client Error`, err));

export async function connectRedis() {
  if (!redis.isOpen) {
    await redis.connect();
    console.log("Redis Connected");
  }
}
