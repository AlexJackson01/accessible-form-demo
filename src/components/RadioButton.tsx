import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { ContactPreference } from "./AccessibleForm";

// --- Radio Button ---
// A single radio option within a group.
// accessibilityRole="radio" tells screen readers this is a radio button.
// accessibilityState.checked reflects the selected state so screen readers
// announce "selected" or "not selected" alongside the label.
// The error message is passed in from the group and embedded in the
// accessibilityLabel of the first option so it is read when focus arrives.

interface RadioButtonProps {
  label: string;
  value: ContactPreference;
  selected: boolean;
  onSelect: () => void;
  error?: string;
  isFirst?: boolean;
}

export const RadioButton = ({
  label,
  selected,
  onSelect,
  error,
  isFirst,
}: RadioButtonProps) => (
  <TouchableOpacity
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
);
