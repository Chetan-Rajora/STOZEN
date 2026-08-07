export interface Product {
  id: string;

  name: string;

  category: string;

  barcode?: string;

  purchasePrice: number;

  sellingPrice: number;

  stock: number;

  minStock: number;

  unit: string;

  supplier?: string;

  createdAt: string;

  updatedAt: string;
}