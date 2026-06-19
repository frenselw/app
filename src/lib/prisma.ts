// Prisma Client 單例模式
// 文件：src/lib/prisma.ts
// 用途：避免在開發環境中建立過多連線
// 說明：Prisma 7 使用 driver adapter 連接資料庫（不再使用 Rust engine）

import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Supabase / 雲端 Postgres 的 SSL 設定
// node-postgres（@prisma/adapter-pg 底層）嚴格驗證憑證，
// 雲端資料庫使用中間 CA 時會被誤判為 "self-signed certificate in certificate chain"。
//
// 解法：直接建立一個 pg.Pool 實例（設定好 SSL），再傳給 PrismaPg。
// 這是因為 PrismaPg 內部在收到 config 物件時，其 query engine 層可能覆寫 SSL 行為；
// 但若傳入「已建立的 pg.Pool 實例」（externalPool），PrismaPg 會直接沿用該 Pool，
// 不會二次包裝，SSL 設定得以保留。
//
// ⚠️ connectionString 內的 ?sslmode=require 需先移除，改由 ssl 物件控制。
const rawConnectionString = process.env.DATABASE_URL ?? "";
const connectionStringWithoutSslMode = rawConnectionString.replace(
  /[?&]sslmode=[^&]*/,
  ""
);

const pool = new pg.Pool({
  connectionString: connectionStringWithoutSslMode,
  ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
