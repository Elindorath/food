/**
 * View component types
 */

import type { ViewProps as RNViewProps } from 'react-native';

export type ViewProps = Omit<RNViewProps, 'style'> & {
  testID?: string;
};
