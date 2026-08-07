import { View, Text, StyleSheet, ScrollView } from "react-native";

import StatCard from "../../components/dashboard/StatCard";
import AIInsightCard from "../../components/dashboard/AIInsightCard";
import QuickActionButton from "../../components/dashboard/QuickActionButton";

import { Colors, Spacing, Typography } from "../../theme";

export default function DashboardScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.greeting}>
        👋 Good Morning
      </Text>

      <Text style={styles.title}>
        STOZEN Dashboard
      </Text>

      <View style={styles.grid}>
        <StatCard
          icon="📦"
          title="Products"
          value="245"
        />

        <StatCard
          icon="💰"
          title="Today's Sales"
          value="₹15,420"
        />

        <StatCard
          icon="⚠️"
          title="Low Stock"
          value="12"
        />

        <StatCard
          icon="📈"
          title="Monthly Profit"
          value="₹78,540"
        />
      </View>

      <AIInsightCard />

      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      <QuickActionButton
        title="➕ Add Product"
        onPress={() => {}}
      />

      <QuickActionButton
        title="🛒 New Sale"
        onPress={() => {}}
      />

      <QuickActionButton
        title="📦 Purchase Stock"
        onPress={() => {}}
      />

      <QuickActionButton
        title="📊 Reports"
        onPress={() => {}}
      />
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
    paddingTop: 60,
    paddingBottom: 50,
  },

  greeting: {
    color: Colors.textSecondary,
    fontSize: Typography.body,
  },

  title: {
    fontSize: Typography.heading,
    fontWeight: "700",
    color: Colors.text,
    marginTop: 6,
    marginBottom: 24,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  sectionTitle: {
    marginTop: 30,
    marginBottom: 12,
    fontWeight: "700",
    fontSize: Typography.subHeading,
    color: Colors.text,
  },
});