import { useEffect, RefObject } from 'react';
import { AccessibilityInfo, TextInput, View, Text, findNodeHandle } from 'react-native';

type FocusableRef = RefObject<TextInput | View | Text | null>;

export const focusAccessibilityElement = (ref: FocusableRef) => {
  if (!ref.current) return;
  const reactTag = findNodeHandle(ref.current);
  if (reactTag) {
    AccessibilityInfo.setAccessibilityFocus(reactTag);
  }
};

export const useAccessibilityFocusOnError = (
  errorFieldPairs: Array<{ error: string | undefined; ref: FocusableRef; isTextInput?: boolean }>
) => {
  const firstErrorKey = errorFieldPairs.find(({ error }) => error)?.error;

  useEffect(() => {
    const firstError = errorFieldPairs.find(({ error }) => error);
    if (!firstError) return;

    if (firstError.isTextInput) {
      (firstError.ref.current as TextInput)?.focus();
    } else {
      focusAccessibilityElement(firstError.ref);
    }
  }, [firstErrorKey]);
};

export const useAccessibilityFocusOnMount = (
  ref: FocusableRef,
  shouldFocus: boolean,
  delay = 100
) => {
  useEffect(() => {
    if (shouldFocus) {
      const timeout = setTimeout(() => {
        focusAccessibilityElement(ref);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [shouldFocus]);
};
