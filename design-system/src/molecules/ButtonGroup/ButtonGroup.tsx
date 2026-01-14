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
}: ButtonGroupProps) => {
  styles.useVariants({
    fullWidth,
  })

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            variant={variant}
            size={size}
            onPress={button.onPress}
            disabled={button.disabled}
          >
            {button.label}
          </Button>
        );
      })}
    </View>
  );
};
