import { Text } from 'react-native';
import { styles } from '../styles/styles';
import { strings } from '../constants/strings';

export const SubmissionError = () => {
  return (
    <Text style={styles.submissionError}>{strings.errors.submission}</Text>
  );
};
