// Prisma Config
// 文件：prisma.config.ts
// 用途：Prisma 7 配置檔案，用於 Migrations 和 CLI 命令

import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
