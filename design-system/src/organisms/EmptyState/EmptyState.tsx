/**
 * EmptyState component - Icon + Text (message) + Button (action)
 */

import { View } from 'react-native';
import { Icon } from '../../atoms/Icon/Icon';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';
import type { EmptyStateProps } from './EmptyState.types';
import { colors } from '../../tokens/colors';
import { styles } from './EmptyState.styles';

export const EmptyState = ({
  icon = 'inbox',
  title,
  message,
  actionLabel,
  onAction,
  style,
  ...props
}: EmptyStateProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Icon name={icon} size="xlarge" color={colors.neutral[400]} style={styles.icon} />
      <Text variant="h4" style={styles.title}>
        {title}
      </Text>
      {message !== undefined ? (
        <Text variant="body" style={styles.message}>
          {message}
        </Text>
      ) : null}
      {actionLabel !== undefined && onAction !== undefined ? (
        <Button variant="primary" onPress={onAction} style={styles.button}>
          {actionLabel}
        </Button>
      ) : null}
    </View>
  );
};
