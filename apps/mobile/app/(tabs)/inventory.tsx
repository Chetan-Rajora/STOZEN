import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import SearchBar from "../../components/inventory/SearchBar";
import ProductCard from "../../components/inventory/ProductCard";
import EmptyInventory from "../../components/inventory/EmptyInventory";

import { Product } from "../../types/product";
import { getProducts } from "../../services/api/apiClient";
import { Colors, Spacing, Typography } from "../../theme";

export default function InventoryScreen() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();

      setProducts(data);
    } catch (err) {
      console.error("Failed to load products:", err);
      setError("Unable to load inventory");
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
  useCallback(() => {
    loadProducts();
  }, [])
);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        📦 Inventory
      </Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
          <Text style={styles.message}>
            Loading inventory...
          </Text>
        </View>
      ) : error ? (
        <View style={styles.center}>
          <Text style={styles.error}>
            {error}
          </Text>

          <TouchableOpacity
            style={styles.retryButton}
            onPress={loadProducts}
          >
            <Text style={styles.retryText}>
              Retry
            </Text>
          </TouchableOpacity>
        </View>
      ) : filteredProducts.length === 0 ? (
        <EmptyInventory />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard product={item} />
          )}
          contentContainerStyle={styles.list}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/add-product")}
      >
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

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  message: {
    marginTop: 10,
    color: Colors.textSecondary,
  },

  error: {
    color: "#d32f2f",
    marginBottom: 15,
  },

  retryButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  retryText: {
    color: "#fff",
    fontWeight: "600",
  },

  list: {
    paddingBottom: 100,
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
