import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { router } from "expo-router";

import ScreenHeader from "../components/common/ScreenHeader";
import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";
import { Colors, Spacing } from "../theme";

export default function StoreSetupScreen() {
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  const handleContinue = () => {
    router.replace("/(tabs)/dashboard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScreenHeader
          title="Let's Setup Your Store"
          subtitle="Enter your business details to get started."
        />

        <InputField
          placeholder="Shop Name"
          value={shopName}
          onChangeText={setShopName}
        />

        <InputField
          placeholder="Owner Name"
          value={ownerName}
          onChangeText={setOwnerName}
        />

        <InputField
          placeholder="Mobile Number"
          value={mobile}
          onChangeText={setMobile}
        />

        <InputField
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />

        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            title="Continue"
            onPress={handleContinue}
          />
        </View>
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
});