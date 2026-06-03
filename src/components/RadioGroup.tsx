import { forwardRef } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { RadioButton } from './RadioButton';
import { ContactPreference } from '../hooks/useFormState';
import { strings } from '../constants/strings';

interface RadioGroupProps {
  value: ContactPreference;
  onChange: (value: ContactPreference) => void;
  error?: string;
}

export const RadioGroup = forwardRef<View, RadioGroupProps>(
  ({ value, onChange, error }, ref) => {
    const options = Object.entries(strings.fields.contactPreference.options) as [
      ContactPreference,
      string
    ][];

    return (
      <View style={styles.fieldContainer}>
        <Text
          style={styles.label}
          importantForAccessibility="no"
          accessibilityElementsHidden
        >
          {strings.fields.contactPreference.label}
          <Text style={styles.required}> *</Text>
        </Text>
        <View
          ref={ref}
          accessibilityRole="radiogroup"
          accessibilityLabel={
            error
              ? `${strings.fields.contactPreference.labelRequired}, ${error}`
              : strings.fields.contactPreference.labelRequired
          }
          accessibilityHint={strings.fields.contactPreference.hint}
          style={[styles.radioGroup, error && styles.radioGroupError]}
        >
          {options.map(([optionValue, label], index) => (
            <RadioButton
              key={optionValue}
              label={label}
              value={optionValue}
              selected={value === optionValue}
              onSelect={() => onChange(optionValue)}
              error={error}
              isFirst={index === 0}
            />
          ))}
        </View>
        {error && (
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
