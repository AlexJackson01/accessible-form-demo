# rn-accessible-form-demo

A reference implementation of an accessible form in React Native. Built to accompany the blog post [Accessible Forms in React Native: A Complete Reference Guide](https://alexjjackson.hashnode.dev/accessible-forms-react-native) — fork it, run it on a real device and explore the patterns yourself.

---

## What this demonstrates

**Labels**
- Visual labels hidden from assistive technology using `importantForAccessibility="no"` and `accessibilityElementsHidden`
- `accessibilityLabel` on each `TextInput` as the single source of truth for screen readers
- Required fields declared in the label - not just with a visual asterisk
- `accessibilityHint` for additional context that doesn't belong in the label

**Radio buttons**
- `accessibilityRole="radiogroup"` on the container groups options for screen readers
- `accessibilityRole="radio"` and `accessibilityState={{ selected }}` on each option
- Error focus moves to the group container via `setAccessibilityFocus`
- Used for predefined options where free text would be harder to navigate

**Checkbox**
- `accessibilityRole="checkbox"` and `accessibilityState={{ checked }}` on the element
- Used for legal consent - users must make a deliberate, informed choice

**Keyboard navigation**
- `returnKeyType="next"` and `returnKeyType="done"` set correctly on all fields
- Focus chains between fields via `onSubmitEditing` and refs

**Validation errors**
- Focus moves automatically to the first errored field on submit
- Error message embedded in the field's `accessibilityLabel` - read out immediately without the user needing to navigate
- Visual error messages hidden from assistive technology to avoid double-reading
- Errors clear as the user corrects them

**Submission errors**
- `AccessibilityInfo.announceForAccessibility` used for errors not tied to a specific field
- Toggle on screen lets you trigger a submission error without breaking anything - see below

**Success state**
- Form replaced entirely on successful submission - no ambiguity about what happened
- Focus moves to the success heading automatically via `AccessibilityInfo.setAccessibilityFocus`
- `accessibilityRole="header"` on the success heading

---

## Getting started

**Prerequisites**
- Node.js 18+
- Expo Go on your device ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

**Run it**

```bash
git clone https://github.com/YOUR_USERNAME/rn-accessible-form-demo.git
cd rn-accessible-form-demo
npm install
npx expo start
```

Scan the QR code with your device. Make sure your phone and laptop are on the same WiFi network.

If you're on a network that blocks local connections, use:

```bash
npx expo start --tunnel
```

---

## Testing the patterns

This demo is designed to be explored with real assistive technology on a real device. Simulators won't give you an accurate picture.

### Simulating a submission error

The form has a **Simulate submission error** toggle at the top. When enabled:

1. Fill in all five fields with valid data
2. Select a contact preference
3. Tick the Terms and Conditions checkbox
4. Tap Submit
5. The form triggers a submission error instead of succeeding
6. `AccessibilityInfo.announceForAccessibility` reads the error immediately
7. The error message appears visually above the submit button

This lets you test the submission error pattern without needing to break anything in the code.

### Testing with VoiceOver (iOS)

1. Settings → Accessibility → VoiceOver → enable
2. Swipe right to move forward through elements, left to go back
3. Double-tap to activate
4. Navigate through the entire form - are all fields announced correctly?
5. Submit with errors and check that focus moves to the first errored field
6. Check that the radio group and checkbox announce their state correctly
7. Submit successfully and verify focus moves to the success heading

### Testing with TalkBack (Android)

1. Settings → Accessibility → TalkBack → enable
2. Swipe right/left to navigate, double-tap to activate
3. Follow the same steps as VoiceOver above
4. Pay particular attention to `importantForAccessibility="no"` - verify the visual labels are being skipped
5. Check that the checkbox announces "checked" and "not checked" explicitly

### Testing with an external keyboard

1. Connect a Bluetooth keyboard
2. Navigate using Tab and Return only
3. You should never get trapped in a field
4. Focus should move logically through the form
5. Pressing Return on the final field should submit the form

---

## Things to try and break

Fork the repo and experiment. Here are some good starting points:

- **Remove `importantForAccessibility="no"`** from a visual label — the label and input will both be announced by screen readers
- **Remove the error from the `accessibilityLabel`** — observe how a screen reader user would need to navigate to find out what went wrong
- **Remove the hook that moves focus to errored fields** — add a valid email and leave the other fields with errors and observe that screen readers stay wherever they were with no indication anything went wrong
- **Remove `accessibilityRole="radiogroup"`** from the contact preference container — observe how screen readers lose the grouping context
- **Remove `accessibilityState={{ checked }}`** from the checkbox — observe that the checked state is no longer announced
- **Remove `accessible` from the success heading** — observe that `setAccessibilityFocus` can't move focus to it
- **Switch off the simulate error toggle and submit valid data** — observe focus moving to the success heading automatically

---

## Project structure

```
rn-accessible-form-demo/
├── App.tsx                           # Entry point
├── src/
│   ├── components/
│   │   ├── AccessibleForm.tsx        # Main form component
│   │   ├── Checkbox.tsx              # Accessible checkbox
│   │   ├── ErrorToggle.tsx           # Toggle to simulate submission errors
│   │   ├── FormField.tsx             # Accessible text input wrapper
│   │   ├── RadioButton.tsx           # Single radio option
│   │   ├── RadioGroup.tsx            # Accessible radio group container
│   │   ├── SubmissionError.tsx       # Submission error display
│   │   ├── SubmitButton.tsx          # Form submit button
│   │   ├── SuccessScreen.tsx         # Success state after submission
│   │   └── TermsCheckbox.tsx         # Terms & conditions checkbox
│   ├── constants/
│   │   └── strings.ts                # All user-facing copy in one place
│   ├── hooks/
│   │   ├── useAccessibilityFocus.ts  # Focus management for errors
│   │   └── useFormState.ts           # Form state and validation
│   ├── styles/
│   │   └── styles.ts                 # Shared styles
│   └── utils/
│       └── utils.ts                  # Validation utilities
└── README.md
```

---

## Related

- 📖 [Blog post: Accessible Forms in React Native — A Complete Reference Guide](https://alexjjackson.hashnode.dev/accessible-forms-react-native)
- 📚 [React Native Accessibility docs](https://reactnative.dev/docs/accessibility)

---

## Contributing

Found a pattern that's missing or something that could be improved? Open an issue or a PR — this is meant to be a living reference.

---

*Written by [Alex Jackson](https://linkedin.com/in/alex-j-jackson) · React Native developer · Accessibility specialist*
