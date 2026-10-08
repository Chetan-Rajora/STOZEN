import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolView, type SymbolViewProps, type SymbolWeight } from "expo-symbols";
import { ColorValue, StyleProp, ViewStyle } from 'react-native';
import type { ComponentProps } from "react";

type IconMapping = Partial<Record<string, ComponentProps<typeof MaterialIcons>["name"]>>;

const MAPPING: IconMapping = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  "person.fill": "person",
  "gearshape.fill": "settings",
  "plus": "add",
};

type IconSymbolProps = Omit<SymbolViewProps, "name"> & {
  name: keyof typeof MAPPING;
  color: ColorValue;
  size?: number;
  weight?: SymbolWeight;
  style?: StyleProp<ViewStyle>;
};

export function IconSymbol({
  name,
  color,
  size = 24,
  weight = "regular",
  style,
}: IconSymbolProps) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name as SymbolViewProps['name']}
      style={[{ width: size, height: size }, style]}
    />
  );
}
