import { forwardRef } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from '../styles/styles';

interface FormFieldProps extends Omit<TextInputProps, 'style'> {
  label: string;
  labelRequired: string;
  error?: string;
  multiline?: boolean;
}

export const FormField = forwardRef<TextInput, FormFieldProps>(
  ({ label, labelRequired, error, multiline, ...inputProps }, ref) => {
    return (
      <View style={styles.fieldContainer}>
        <Text
          style={styles.label}
          importantForAccessibility="no"
          accessibilityElementsHidden
        >
          {label}
          <Text style={styles.required}> *</Text>
        </Text>
        <TextInput
          ref={ref}
          style={[
            styles.input,
            multiline && styles.textArea,
            error && styles.inputError,
          ]}
          accessibilityLabel={error ? `${labelRequired}, ${error}` : labelRequired}
          placeholderTextColor="#94A3B8"
          {...inputProps}
          multiline={multiline}
        />
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
