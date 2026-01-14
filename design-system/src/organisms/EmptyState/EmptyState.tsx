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
  ...props
}: EmptyStateProps) => {
  return (
    <View style={styles.container} {...props}>
      <Icon name={icon} size="xlarge" color={colors.neutral[400]} />
      <Text variant="h4">
        {title}
      </Text>
      {message !== undefined ? (
        <Text variant="body">
          {message}
        </Text>
      ) : null}
      {actionLabel !== undefined && onAction !== undefined ? (
        <Button variant="primary" onPress={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </View>
  );
};
