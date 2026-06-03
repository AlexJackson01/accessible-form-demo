import { forwardRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { ContactPreference } from "./AccessibleForm";

interface RadioButtonProps {
  label: string;
  value: ContactPreference;
  selected: boolean;
  onSelect: () => void;
  error?: string;
  isFirst?: boolean;
}

export const RadioButton = forwardRef<View, RadioButtonProps>(({
  label,
  selected,
  onSelect,
  error,
  isFirst,
}, ref) => (
  <TouchableOpacity
    ref={ref}
    style={styles.radioRow}
    onPress={onSelect}
    accessibilityRole="radio"
    accessibilityState={{ selected }}
    accessibilityLabel={isFirst && error ? `${label}, ${error}` : label}
  >
    <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
      {selected && <View style={styles.radioInner} />}
    </View>
    <Text style={styles.radioLabel}>{label}</Text>
  </TouchableOpacity>
));
