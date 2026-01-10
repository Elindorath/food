/**
 * IngredientRow component types
 */

import type { ViewStyle } from 'react-native';

export type IngredientRowProps = {
  name: string;
  quantity: number | string;
  unit: string;
  style?: ViewStyle;
  testID?: string;
};
