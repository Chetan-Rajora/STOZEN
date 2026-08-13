import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors, Spacing, Typography } from "../../theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📦</Text>

      <Text style={styles.title}>
        Welcome to STOZEN
      </Text>

      <Text style={styles.subtitle}>
        Smart Inventory Management
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.lg,
  },

  icon: {
    fontSize: 60,
    marginBottom: Spacing.md,
  },

  title: {
    fontSize: Typography.heading,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
  },

  subtitle: {
    marginTop: Spacing.sm,
    fontSize: Typography.body,
    color: Colors.textSecondary,
    textAlign: "center",
  },
});