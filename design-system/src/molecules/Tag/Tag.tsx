/**
 * Tag component - Badge + Text (pour catégories et filtres)
 */

import { TouchableOpacity } from 'react-native';
import { Badge } from '../../atoms/Badge/Badge';
import type { TagProps } from './Tag.types';

export const Tag = ({
  children,
  selected = false,
  onPress,
  variant = 'primary',
  ...props
}: TagProps) => {
  const displayVariant = selected ? 'primary' : variant;

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Badge variant={displayVariant} {...props}>
          {children}
        </Badge>
      </TouchableOpacity>
    );
  }

  return (
    <Badge variant={displayVariant} {...props}>
      {children}
    </Badge>
  );
};
