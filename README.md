# 我的網站

使用 Next.js + TypeScript + Tailwind CSS + Prisma + PostgreSQL 建立的網站。

## 技術棧

- **Next.js** - React 全端框架
- **TypeScript** - 型別安全的 JavaScript
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Prisma** - 型別安全的資料庫 ORM
- **PostgreSQL** - 關聯式資料庫

## 開始使用

### 1. 安裝依賴

```bash
npm install
```

### 2. 設定資料庫

編輯 `.env` 檔案，設定你的 PostgreSQL 連線字串：

```
DATABASE_URL="postgresql://使用者名稱:密碼@主機:埠號/資料庫名稱"
```

### 3. 建立資料庫結構

```bash
npm run db:push    # 推送 schema 到資料庫
# 或
npm run db:migrate # 建立遷移檔案
```

### 4. 啟動開發伺服器

```bash
npm run dev
```

打開 [http://localhost:3000](http://localhost:3000) 查看結果。

## 常用指令

| 指令 | 說明 |
|------|------|
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 建置生產版本 |
| `npm run start` | 啟動生產伺服器 |
| `npm run lint` | 執行 ESLint |
| `npm run db:push` | 推送 schema 到資料庫 |
| `npm run db:migrate` | 建立資料庫遷移 |
| `npm run db:studio` | 開啟 Prisma Studio |

## 專案結構

```
├── prisma/
│   └── schema.prisma    # 資料庫模型定義（含 generator output 設定）
├── prisma.config.ts     # Prisma 7 CLI 配置（datasource URL）
├── src/
│   ├── app/             # Next.js App Router 頁面
│   ├── generated/
│   │   └── prisma/      # 自動生成的 Prisma Client（勿手動編輯）
│   ├── lib/
│   │   └── prisma.ts    # Prisma Client 單例（使用 driver adapter）
│   └── ...
├── .env                 # 環境變數（含資料庫連線）
└── package.json
```

## Prisma 7 重要事項

> **Prisma 7 與舊版差異较大，請注意以下事項：**

1. **Driver Adapter**：Prisma 7 不再使用 Rust engine，改用 driver adapter（`@prisma/adapter-pg`）連接資料庫
2. **生成位置**：Prisma Client 生成至 `src/generated/prisma/`（在 `schema.prisma` 的 `generator.output` 中指定）
3. **匯入路徑**：使用 `import { PrismaClient } from "@/generated/prisma"`，**不是** `@prisma/client`
4. **`schema.prisma`**：`datasource` 區塊不再包含 `url`（由 `prisma.config.ts` 管理）
5. **修改模型後**：記得執行 `npx prisma generate` 重新生成 Client
