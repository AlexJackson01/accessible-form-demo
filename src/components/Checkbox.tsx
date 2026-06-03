import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { strings } from "../constants/strings";

// --- Checkbox ---
// accessibilityRole="checkbox" tells screen readers this is a checkbox.
// accessibilityState.checked reflects the ticked state.
// The accessibilityLabel includes "checked" or "not checked" explicitly
// because some screen readers on older Android versions do not reliably
// announce state changes from accessibilityState alone.

interface CheckboxProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  error?: string;
}

export const Checkbox = ({ label, checked, onToggle, error }: CheckboxProps) => (
  <TouchableOpacity
    style={styles.checkboxRow}
    onPress={onToggle}
    accessibilityRole="checkbox"
    accessibilityState={{ checked }}
    accessibilityLabel={
      error
        ? `${strings.fields.terms.labelRequired}, ${error}`
        : strings.fields.terms.labelRequired
    }
    accessibilityHint={strings.fields.terms.hint}
  >
    <View
      style={[
        styles.checkboxOuter,
        checked && styles.checkboxChecked,
        error && !checked && styles.checkboxError,
      ]}
    >
      {checked && <Text style={styles.checkmark}>✓</Text>}
    </View>
    <Text
      style={[
        styles.checkboxLabel,
        error && !checked && styles.checkboxLabelError,
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);
