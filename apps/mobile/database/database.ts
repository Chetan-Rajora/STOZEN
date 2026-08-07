import * as SQLite from "expo-sqlite";
import { CREATE_PRODUCTS_TABLE } from "./schema";

const db = SQLite.openDatabaseSync("stozen.db");

export async function initDatabase() {
  try {
    await db.execAsync(CREATE_PRODUCTS_TABLE);

    console.log("✅ Database initialized successfully");
  } catch (error) {
    console.error("❌ Database initialization failed", error);
  }
}

export default db;