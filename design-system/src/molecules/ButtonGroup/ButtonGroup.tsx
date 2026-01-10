/**
 * ButtonGroup component - Groupe de boutons liés
 */

import { View } from 'react-native';
import { Button } from '../../atoms/Button/Button';
import type { ButtonGroupProps } from './ButtonGroup.types';
import { styles } from './ButtonGroup.styles';

export const ButtonGroup = ({
  buttons,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  style,
}: ButtonGroupProps) => {
  return (
    <View style={[styles.container, fullWidth && styles.fullWidth, style]}>
      {buttons.map((button, index) => {
        const buttonStyle = index > 0
          ? [styles.button, styles.buttonSpacing]
          : styles.button;

        return (
          <Button
            key={index}
            variant={variant}
            size={size}
            onPress={button.onPress}
            disabled={button.disabled}
            style={buttonStyle}
          >
            {button.label}
          </Button>
        );
      })}
    </View>
  );
};
