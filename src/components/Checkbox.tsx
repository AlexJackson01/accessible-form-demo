import { forwardRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { strings } from "../constants/strings";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  error?: string;
}

export const Checkbox = forwardRef<View, CheckboxProps>(({ label, checked, onToggle, error }, ref) => (
  <TouchableOpacity
    ref={ref}
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
));
