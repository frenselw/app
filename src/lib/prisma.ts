// Prisma Client 單例模式
// 文件：src/lib/prisma.ts
// 用途：避免在開發環境中建立過多連線
// 說明：Prisma 7 使用 driver adapter 連接資料庫（不再使用 Rust engine）

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
