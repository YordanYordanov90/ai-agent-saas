import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

const config = {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};

export default config;