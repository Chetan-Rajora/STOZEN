import { Alert } from "react-native";
import { createProduct } from "../services/api/apiClient";

import { validateProduct } from "../utils/validation";

import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";

import ScreenHeader from "../components/common/ScreenHeader";
import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";

import { Colors, Spacing } from "../theme";

export default function AddProductScreen() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [stock, setStock] = useState("");
  const [minStock, setMinStock] = useState("");
  const [unit, setUnit] = useState("");
  const [supplier, setSupplier] = useState("");

  async function handleSave() {
  const result = validateProduct({
    name,
    category,
    purchasePrice,
    sellingPrice,
    stock,
    minStock,
    unit,
  });

  if (!result.valid) {
    Alert.alert("Validation", result.message!);
    return;
  }

  try {
    const product = {
      name: name.trim(),
      category: category.trim(),
      purchasePrice: Number(purchasePrice),
      sellingPrice: Number(sellingPrice),
      stock: Number(stock),
      minStock: Number(minStock),
      unit: unit.trim(),
      supplier: supplier.trim(),
    };

    await createProduct(product);

    Alert.alert(
      "Success",
      "Product added successfully!",
      [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]
    );
  } catch (error) {
    console.error("Failed to create product:", error);

    Alert.alert(
      "Error",
      "Unable to save product. Please try again."
    );
  }
}

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <ScreenHeader
        title="Add Product"
        subtitle="Create a new inventory item"
      />

      <InputField
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />

      <InputField
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />

      <InputField
        placeholder="Purchase Price"
        value={purchasePrice}
        onChangeText={setPurchasePrice}
      />

      <InputField
        placeholder="Selling Price"
        value={sellingPrice}
        onChangeText={setSellingPrice}
      />

      <InputField
        placeholder="Current Stock"
        value={stock}
        onChangeText={setStock}
      />

      <InputField
        placeholder="Minimum Stock"
        value={minStock}
        onChangeText={setMinStock}
      />

      <InputField
        placeholder="Unit (Kg, Pcs, Litre...)"
        value={unit}
        onChangeText={setUnit}
      />

      <InputField
        placeholder="Supplier"
        value={supplier}
        onChangeText={setSupplier}
      />

      <View style={{ marginTop: 20 }}>
        <PrimaryButton
          title="Save Product"
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: Spacing.lg,
    paddingBottom: 40,
  },
});