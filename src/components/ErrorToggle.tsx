import { Switch, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { strings } from '../constants/strings';

interface ErrorToggleProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const ErrorToggle = ({ value, onValueChange }: ErrorToggleProps) => {
  return (
    <View style={styles.toggleRow}>
      <Text style={styles.toggleLabel}>{strings.simulate.label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        accessibilityLabel={strings.simulate.label}
        accessibilityHint={strings.simulate.hint}
        trackColor={{ false: '#CBD5E1', true: '#6366F1' }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
};
