export const CREATE_PRODUCTS_TABLE = `
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  barcode TEXT,

  purchasePrice REAL NOT NULL,
  sellingPrice REAL NOT NULL,

  stock INTEGER NOT NULL,
  minStock INTEGER NOT NULL,

  unit TEXT NOT NULL,
  supplier TEXT,

  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);
`;