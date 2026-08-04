import { View, Text, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Text style={styles.subtitle}>
        STOZEN Login UI will be built here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitle: {
    marginTop: 15,
    fontSize: 16,
    color: "#6B7280",
  },
});