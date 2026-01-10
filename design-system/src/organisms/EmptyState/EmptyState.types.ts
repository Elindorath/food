/**
 * EmptyState component types
 */

import type { ViewStyle } from 'react-native';

export type EmptyStateProps = {
  icon?: string;
  title: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  style?: ViewStyle;
  testID?: string;
};
