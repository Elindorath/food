/**
 * ErrorState component - Icon + Text (message) + Button (retry)
 */

import { View } from 'react-native';
import { Icon } from '../../atoms/Icon/Icon';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';
import type { ErrorStateProps } from './ErrorState.types';
import { colors } from '../../tokens/colors/colors';
import { styles } from './ErrorState.styles';

export const ErrorState = ({
  title = 'Une erreur est survenue',
  message,
  retryLabel = 'Réessayer',
  onRetry,
  ...props
}: ErrorStateProps) => {
  return (
    <View style={styles.container} {...props}>
      <Icon name="alert-circle" size="xlarge" color={colors.error[600]} />
      <Text variant="h4">
        {title}
      </Text>
      <Text variant="body">
        {message}
      </Text>
      {onRetry && (
        <Button variant="primary" onPress={onRetry}>
          {retryLabel}
        </Button>
      )}
    </View>
  );
};
