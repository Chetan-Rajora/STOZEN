import { View, Text, StyleSheet } from "react-native";
import { Colors, Radius, Spacing, Typography } from "../../theme";

interface Props {
  title: string;
  value: string;
  icon: string;
}

export default function StatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.md,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  icon: {
    fontSize: 26,
    marginBottom: 10,
  },

  value: {
    fontSize: Typography.heading,
    fontWeight: "700",
    color: Colors.text,
  },

  title: {
    color: Colors.textSecondary,
    marginTop: 6,
  },
});