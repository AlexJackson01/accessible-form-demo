import { forwardRef } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { Checkbox } from './Checkbox';
import { strings } from '../constants/strings';

interface TermsCheckboxProps {
  checked: boolean;
  onToggle: () => void;
  error?: string;
}

export const TermsCheckbox = forwardRef<View, TermsCheckboxProps>(
  ({ checked, onToggle, error }, ref) => {
    return (
      <View ref={ref} style={styles.fieldContainer}>
        <Checkbox
          label={strings.fields.terms.label}
          checked={checked}
          onToggle={onToggle}
          error={error}
        />
        {error && !checked && (
          <Text
            style={styles.errorText}
            importantForAccessibility="no"
            accessibilityElementsHidden
          >
            {error}
          </Text>
        )}
      </View>
    );
  }
);
