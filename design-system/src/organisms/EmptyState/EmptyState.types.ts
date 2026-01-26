/**
 * EmptyState component types
 */

import type { IconName } from '@/tokens/icons/icons';

export type EmptyStateProps = {
  icon?: IconName;
  title: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  testID?: string;
};
