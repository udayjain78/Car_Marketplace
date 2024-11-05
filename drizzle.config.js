import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://Backend_owner:CJGNaP2wUEt3@ep-winter-meadow-a1otzphz-pooler.ap-southeast-1.aws.neon.tech/Backend?sslmode=require",
  },
});
