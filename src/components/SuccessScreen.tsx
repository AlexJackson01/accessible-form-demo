import { forwardRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';
import { strings } from '../constants/strings';
import { useAccessibilityFocusOnMount } from '../hooks/useAccessibilityFocus';
import { useRef } from 'react';

interface SuccessScreenProps {
  onReset: () => void;
}

export const SuccessScreen = ({ onReset }: SuccessScreenProps) => {
  const titleRef = useRef<Text>(null);

  useAccessibilityFocusOnMount(titleRef, true);

  return (
    <View style={styles.successContainer}>
      <Text
        ref={titleRef}
        style={styles.successTitle}
        accessible
        accessibilityRole="header"
      >
        {strings.success.title}
      </Text>
      <Text style={styles.successSubtitle}>{strings.success.subtitle}</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onReset}
        accessibilityRole="button"
        accessibilityLabel={strings.success.backButton}
      >
        <Text style={styles.backButtonText}>{strings.success.backButton}</Text>
      </TouchableOpacity>
    </View>
  );
};
