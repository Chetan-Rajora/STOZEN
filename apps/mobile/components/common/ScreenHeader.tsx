import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Spacing } from "../../theme";

interface Props {
  title: string;
  subtitle?: string;
}

export default function ScreenHeader({
  title,
  subtitle,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📦</Text>

      <Text style={styles.title}>
        {title}
      </Text>

      {subtitle ? (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: Spacing.xl,
  },

  logo: {
    fontSize: 55,
  },

  title: {
    fontSize: Typography.heading,
    fontWeight: "700",
    color: Colors.text,
    marginTop: 12,
  },

  subtitle: {
    marginTop: 8,
    color: Colors.textSecondary,
    textAlign: "center",
  },
});
