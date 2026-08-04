import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📦</Text>

      <Text style={styles.title}>STOZEN</Text>

      <Text style={styles.subtitle}>
        Smart Inventory.{"\n"}Smarter Business.
      </Text>

      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    fontSize: 70,
    marginBottom: 20,
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#10B981",
    letterSpacing: 2,
  },

  subtitle: {
    fontSize: 18,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 28,
  },

  loading: {
    position: "absolute",
    bottom: 50,
    color: "#9CA3AF",
    fontSize: 16,
  },
});