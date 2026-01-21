/**
 * Card component - View + contenu structuré avec ombre
 */

import { View } from 'react-native';
import type { CardProps } from './Card.types';
import { shadows } from '../../tokens/shadows/shadows';
import { styles } from './Card.styles';

export const Card = ({ children, style, ...props }: CardProps) => {
  return (
    <View style={[styles.card, shadows.md, style]} {...props}>
      {children}
    </View>
  );
};
