/**
 * ErrorState component types
 */

import type { ViewStyle } from 'react-native';

export type ErrorStateProps = {
  title?: string;
  message: string;
  retryLabel?: string;
  onRetry?: () => void;
  style?: ViewStyle;
  testID?: string;
};
