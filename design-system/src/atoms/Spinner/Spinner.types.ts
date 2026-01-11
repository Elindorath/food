/**
 * Spinner component types
 */

export type SpinnerSize = 'small' | 'medium' | 'large';

export type SpinnerProps = {
  size?: SpinnerSize;
  color?: string;
  testID?: string;
};
