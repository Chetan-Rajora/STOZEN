import { View, Text, StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "../../theme";

export default function AIInsightCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>🤖 AI Insights</Text>

      <Text style={styles.item}>
        • Reorder Sugar (Stock: 8)
      </Text>

      <Text style={styles.item}>
        • Rice demand expected to increase
      </Text>

      <Text style={styles.item}>
        • 5 slow-moving products detected
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ECFDF5",
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    marginTop: Spacing.lg,
  },

  title: {
    fontWeight: "700",
    marginBottom: 12,
    color: Colors.primary,
  },

  item: {
    marginBottom: 8,
    color: Colors.text,
  },
});