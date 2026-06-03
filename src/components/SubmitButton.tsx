import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { strings } from '../constants/strings';

interface SubmitButtonProps {
  onPress: () => void;
}

export const SubmitButton = ({ onPress }: SubmitButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={strings.buttons.submit}
    >
      <Text style={styles.buttonText}>{strings.buttons.submit}</Text>
    </TouchableOpacity>
  );
};
