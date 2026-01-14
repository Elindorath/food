/**
 * Header component - View + Text (titre) + Button(s) (actions)
 */

import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import type { HeaderProps } from './Header.types';
import { styles } from './Header.styles';

export const Header = ({
  title,
  leftActions = [],
  rightActions = [],
  ...props
}: HeaderProps) => {
  return (
    <View style={styles.container} {...props}>
      <View style={styles.leftActions}>
        {leftActions.map((action, index) => (
          <TouchableOpacity
            key={index}
            onPress={action.onPress}
            style={styles.actionButton}
          >
            {action.icon !== undefined ? (
              <Icon name={action.icon} size="medium" />
            ) : (
              action.label !== undefined ? (
                <Button size="small" variant="tertiary" onPress={action.onPress}>
                  {action.label}
                </Button>
              ) : null
            )}
          </TouchableOpacity>
        ))}
      </View>
      <Text variant="h3">
        {title}
      </Text>
      <View style={styles.rightActions}>
        {rightActions.map((action, index) => (
          <TouchableOpacity
            key={index}
            onPress={action.onPress}
          >
            {action.icon !== undefined ? (
              <Icon name={action.icon} size="medium" />
            ) : (
              action.label !== undefined ? (
                <Button size="small" variant="tertiary" onPress={action.onPress}>
                  {action.label}
                </Button>
              ) : null
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
