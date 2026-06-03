import { useState } from 'react';
import { AccessibilityInfo } from 'react-native';
import { strings } from '../constants/strings';
import {
  validateContactPreference,
  validateEmail,
  validateMessage,
  validatePhone,
  validateTerms,
} from '../utils/utils';

export type ContactPreference = 'email' | 'phone' | 'either' | null;

export interface FormErrors {
  email?: string;
  phone?: string;
  message?: string;
  contactPreference?: string;
  terms?: string;
}

export interface FormValues {
  email: string;
  phone: string;
  message: string;
  contactPreference: ContactPreference;
  termsAccepted: boolean;
}

const initialValues: FormValues = {
  email: '',
  phone: '',
  message: '',
  contactPreference: null,
  termsAccepted: false,
};

export const useFormState = (simulateError: boolean) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionError, setSubmissionError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {
      email: validateEmail(values.email),
      phone: validatePhone(values.phone),
      message: validateMessage(values.message),
      contactPreference: validateContactPreference(values.contactPreference),
      terms: validateTerms(values.termsAccepted),
    };

    return Object.fromEntries(
      Object.entries(newErrors).filter(([, v]) => v !== undefined)
    ) as FormErrors;
  };

  const handleSubmit = (): boolean => {
    const activeErrors = validate();

    if (Object.keys(activeErrors).length > 0) {
      setErrors(activeErrors);
      setSubmissionError(false);
      return false;
    }

    setErrors({});

    if (simulateError) {
      setSubmissionError(true);
      AccessibilityInfo.announceForAccessibility(strings.errors.submission);
      return false;
    }

    setSubmissionError(false);
    setSubmitted(true);
    return true;
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
    setSubmissionError(false);
    setSubmitted(false);
  };

  return {
    values,
    errors,
    submissionError,
    submitted,
    setField,
    handleSubmit,
    handleReset,
  };
};
