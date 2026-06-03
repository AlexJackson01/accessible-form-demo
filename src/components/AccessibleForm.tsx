import { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { strings } from '../constants/strings';
import { styles } from '../styles/styles';
import { useFormState } from '../hooks/useFormState';
import { useAccessibilityFocusOnError } from '../hooks/useAccessibilityFocus';
import { FormField } from './FormField';
import { RadioGroup } from './RadioGroup';
import { TermsCheckbox } from './TermsCheckbox';
import { SuccessScreen } from './SuccessScreen';
import { SubmitButton } from './SubmitButton';
import { ErrorToggle } from './ErrorToggle';
import { SubmissionError } from './SubmissionError';

export type { ContactPreference, FormErrors } from '../hooks/useFormState';

export const AccessibleForm = () => {
  const [simulateError, setSimulateError] = useState(false);
  const {
    values,
    errors,
    submissionError,
    submitted,
    setField,
    handleSubmit,
    handleReset,
  } = useFormState(simulateError);

  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const messageRef = useRef<TextInput>(null);
  const contactPreferenceRef = useRef<View>(null);
  const termsRef = useRef<View>(null);

  useAccessibilityFocusOnError([
    { error: errors.email, ref: emailRef, isTextInput: true },
    { error: errors.phone, ref: phoneRef, isTextInput: true },
    { error: errors.message, ref: messageRef, isTextInput: true },
    { error: errors.contactPreference, ref: contactPreferenceRef },
    { error: errors.terms, ref: termsRef },
  ]);

  if (submitted) {
    return <SuccessScreen onReset={handleReset} />;
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoid}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title} accessibilityRole="header">
          {strings.form.title}
        </Text>
        <Text style={styles.subtitle}>{strings.form.subtitle}</Text>

        <ErrorToggle value={simulateError} onValueChange={setSimulateError} />

        <FormField
          ref={emailRef}
          label={strings.fields.email.label}
          labelRequired={strings.fields.email.labelRequired}
          error={errors.email}
          value={values.email}
          onChangeText={(text) => setField('email', text)}
          accessibilityHint={strings.fields.email.hint}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current?.focus()}
        />

        <FormField
          ref={phoneRef}
          label={strings.fields.phone.label}
          labelRequired={strings.fields.phone.labelRequired}
          error={errors.phone}
          value={values.phone}
          onChangeText={(text) => setField('phone', text)}
          accessibilityHint={strings.fields.phone.hint}
          keyboardType="phone-pad"
          returnKeyType="next"
          onSubmitEditing={() => messageRef.current?.focus()}
        />

        <FormField
          ref={messageRef}
          label={strings.fields.message.label}
          labelRequired={strings.fields.message.labelRequired}
          error={errors.message}
          value={values.message}
          onChangeText={(text) => setField('message', text)}
          multiline
          numberOfLines={4}
          returnKeyType="done"
          onSubmitEditing={() => contactPreferenceRef.current?.focus()}
        />

        <RadioGroup
          ref={contactPreferenceRef}
          value={values.contactPreference}
          onChange={(value) => setField('contactPreference', value)}
          error={errors.contactPreference}
        />

        <TermsCheckbox
          ref={termsRef}
          checked={values.termsAccepted}
          onToggle={() => setField('termsAccepted', !values.termsAccepted)}
          error={errors.terms}
        />

        {submissionError && <SubmissionError />}

        <SubmitButton onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
