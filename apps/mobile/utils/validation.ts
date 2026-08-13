export interface ProductValidation {
  valid: boolean;
  message?: string;
}

export function validateProduct(data: {
  name: string;
  category: string;
  purchasePrice: string;
  sellingPrice: string;
  stock: string;
  minStock: string;
  unit: string;
}) : ProductValidation {

  if (!data.name.trim())
    return { valid: false, message: "Enter product name" };

  if (!data.category.trim())
    return { valid: false, message: "Enter category" };

  if (!data.purchasePrice.trim())
    return { valid: false, message: "Enter purchase price" };

  if (!data.sellingPrice.trim())
    return { valid: false, message: "Enter selling price" };

  if (!data.stock.trim())
    return { valid: false, message: "Enter stock quantity" };

  if (!data.unit.trim())
    return { valid: false, message: "Enter unit" };

  return { valid: true };
}