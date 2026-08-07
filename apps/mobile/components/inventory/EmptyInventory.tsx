import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors, Spacing, Typography } from "../../theme";

export default function EmptyInventory() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📦</Text>

      <Text style={styles.title}>
        No Products Yet
      </Text>

      <Text style={styles.subtitle}>
        Tap the + button to add your first product.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.xl,
  },

  icon: {
    fontSize: 70,
    marginBottom: Spacing.md,
  },

  title: {
    fontSize: Typography.heading,
    fontWeight: "700",
    color: Colors.text,
  },

  subtitle: {
    marginTop: Spacing.sm,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
});