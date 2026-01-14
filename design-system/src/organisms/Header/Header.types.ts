/**
 * Header component types
 */

export type HeaderAction = {
  label?: string;
  icon?: string;
  onPress: () => void;
};

export type HeaderProps = {
  title: string;
  leftActions?: HeaderAction[];
  rightActions?: HeaderAction[];
  testID?: string;
};
