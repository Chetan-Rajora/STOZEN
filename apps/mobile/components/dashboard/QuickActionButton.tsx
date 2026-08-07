import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "../../theme";

interface Props {
  title: string;
  onPress: () => void;
}

export default function QuickActionButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: Spacing.md,
    borderRadius: Radius.md,
    alignItems: "center",
    marginTop: Spacing.sm,
  },

  text: {
    color: "#fff",
    fontWeight: "600",
  },
});