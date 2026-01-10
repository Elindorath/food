/**
 * ErrorState component - Icon + Text (message) + Button (retry)
 */

import { View } from 'react-native';
import { Icon } from '../../atoms/Icon/Icon';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';
import type { ErrorStateProps } from './ErrorState.types';
import { colors } from '../../tokens/colors';
import { styles } from './ErrorState.styles';

export const ErrorState = ({
  title = 'Une erreur est survenue',
  message,
  retryLabel = 'Réessayer',
  onRetry,
  style,
  ...props
}: ErrorStateProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Icon name="alert-circle" size="xlarge" color={colors.error[600]} style={styles.icon} />
      <Text variant="h4" style={styles.title}>
        {title}
      </Text>
      <Text variant="body" style={styles.message}>
        {message}
      </Text>
      {onRetry && (
        <Button variant="primary" onPress={onRetry} style={styles.button}>
          {retryLabel}
        </Button>
      )}
    </View>
  );
};
