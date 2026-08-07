import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import SearchBar from "../../components/inventory/SearchBar";
import ProductCard from "../../components/inventory/ProductCard";
import EmptyInventory from "../../components/inventory/EmptyInventory";

import { Product } from "../../types/product";
import { Colors, Spacing, Typography } from "../../theme";

export default function InventoryScreen() {
  const [search, setSearch] = useState("");

  const products: Product[] = [];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        📦 Inventory
      </Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      {products.length === 0 ? (
        <EmptyInventory />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard product={item} />
          )}
        />
      )}

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },

  title: {
    fontSize: Typography.heading,
    fontWeight: "700",
    marginBottom: Spacing.lg,
    marginTop: 20,
  },

  fab: {
    position: "absolute",
    right: 24,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  plus: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "300",
  },
});