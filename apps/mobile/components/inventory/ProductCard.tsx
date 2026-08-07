import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Product } from "../../types/product";
import { Colors, Radius, Spacing, Typography } from "../../theme";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const lowStock = product.stock <= product.minStock;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{product.name}</Text>

        {lowStock && (
          <Text style={styles.lowStock}>Low Stock</Text>
        )}
      </View>

      <Text style={styles.category}>
        {product.category}
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>Stock</Text>
        <Text style={styles.value}>
          {product.stock} {product.unit}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Selling Price</Text>
        <Text style={styles.value}>
          ₹{product.sellingPrice}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: Radius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    elevation: 2,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },

  name: {
    fontSize: Typography.body,
    fontWeight: "700",
    color: Colors.text,
  },

  category: {
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },

  label: {
    color: Colors.textSecondary,
  },

  value: {
    fontWeight: "600",
    color: Colors.text,
  },

  lowStock: {
    color: "#DC2626",
    fontWeight: "700",
    fontSize: 12,
  },
});