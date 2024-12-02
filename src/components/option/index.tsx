import {
  Pressable,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

type OptionProps = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export function Option({
  name,
  icon,
  variant = "primary",
  ...rest
}: OptionProps) {
  const color = variant === "primary" ? colors.green[300] : colors.gray[400];
  const titleStyle =
    variant == "primary" ? styles.primaryTitle : styles.secondaryTitle;
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={20} color={color} />
      <Text style={titleStyle}>{name}</Text>
    </TouchableOpacity>
  );
}
