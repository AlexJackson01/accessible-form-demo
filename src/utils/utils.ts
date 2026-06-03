import { ContactPreference } from "../components/AccessibleForm";
import { strings } from "../constants/strings";

export const validateEmail = (value: string): string | undefined => {
  if (!value.trim()) return strings.errors.email.empty;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return strings.errors.email.invalid;
};

export const validatePhone = (value: string): string | undefined => {
  if (!value.trim()) return strings.errors.phone.empty;
  if (!/^[\d\s+()-]{7,}$/.test(value)) return strings.errors.phone.invalid;
};

export const validateMessage = (value: string): string | undefined => {
  if (!value.trim()) return strings.errors.message.empty;
};

export const validateContactPreference = (
  value: ContactPreference
): string | undefined => {
  if (!value) return strings.errors.contactPreference.empty;
};

export const validateTerms = (value: boolean): string | undefined => {
  if (!value) return strings.errors.terms.empty;
};
