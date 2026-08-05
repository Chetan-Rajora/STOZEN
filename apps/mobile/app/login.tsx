import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";
import { Colors, Spacing, Typography } from "../theme";

export default function LoginScreen() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>📦</Text>

        <Text style={styles.title}>STOZEN</Text>

        <Text style={styles.subtitle}>
          Smart Inventory{"\n"}Smarter Business
        </Text>

        <View style={{ height: 40 }} />

        <InputField
          placeholder="Mobile Number"
          value={mobile}
          onChangeText={setMobile}
        />

        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgot}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />

        <PrimaryButton
          title="Login"
          onPress={() => {}}
        />

        <TouchableOpacity style={styles.signup}>
          <Text style={styles.signupText}>
            Create New Store
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    padding: Spacing.lg,
  },

  logo: {
    fontSize: 64,
    textAlign: "center",
  },

  title: {
    fontSize: Typography.title,
    fontWeight: "700",
    color: Colors.primary,
    textAlign: "center",
    marginTop: 10,
  },

  subtitle: {
    textAlign: "center",
    color: Colors.textSecondary,
    fontSize: Typography.body,
    marginTop: 8,
    lineHeight: 24,
  },

  forgot: {
    color: Colors.primary,
    textAlign: "right",
    marginTop: 4,
  },

  signup: {
    marginTop: 24,
    alignItems: "center",
  },

  signupText: {
    color: Colors.primary,
    fontWeight: "600",
    fontSize: Typography.body,
  },

});