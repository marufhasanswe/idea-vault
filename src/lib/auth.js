import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri =
  "mongodb+srv://ideaVault:dNcX44VPo8fhq6oB@cluster0.nmylxpu.mongodb.net/?appName=Cluster0";
if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable in .env.local");
}
console.log("DEBUG: Your MONGODB_URI value is:", JSON.stringify(uri));
const client = new MongoClient(uri);
const db = client.db("ideaVault");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
