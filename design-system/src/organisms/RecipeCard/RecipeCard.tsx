/**
 * RecipeCard component - Card + Image + Text (titre) + Text (description) + Tag(s) + Badge (difficulté/temps)
 */

import { View, TouchableOpacity, Image } from 'react-native';
import { Card } from '../../molecules/Card/Card';
import { Text } from '../../atoms/Text/Text';
import { Badge } from '../../atoms/Badge/Badge';
import { Tag } from '../../molecules/Tag/Tag';
import type { RecipeCardProps } from './RecipeCard.types';
import { styles } from './RecipeCard.styles';

export const RecipeCard = ({
  title,
  description,
  imageUrl,
  tags = [],
  difficulty,
  preparationTime,
  cookingTime,
  rating,
  onPress,
  style,
  ...props
}: RecipeCardProps) => {
  const totalTime = (preparationTime ?? 0) + (cookingTime ?? 0);

  const content = (
    <Card style={[styles.card, style]} {...props}>
      {imageUrl !== undefined ? (
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      ) : null}
      <View style={styles.content}>
        <Text variant="h4" style={styles.title}>
          {title}
        </Text>
        {description !== undefined ? (
          <Text variant="bodySmall" style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        ) : null}
        <View style={styles.metadata}>
          {difficulty !== undefined ? (
            <Badge variant="info" size="small" style={styles.badge}>
              Difficulté: {difficulty}/5
            </Badge>
          ) : null}
          {totalTime !== 0 ? (
            <Badge variant="default" size="small" style={styles.badge}>
              {totalTime} min
            </Badge>
          ) : null}
          {rating !== undefined ? (
            <Badge variant="warning" size="small" style={styles.badge}>
              ⭐ {rating}/5
            </Badge>
          ) : null}
        </View>
        {tags.length !== 0 ? (
          <View style={styles.tags}>
            {tags.slice(0, 3).map((tag, index) => (
              <Tag key={index} size="small" variant="default" style={index > 0 ? styles.tag : undefined}>
                {tag}
              </Tag>
            ))}
          </View>
        ) : null}
      </View>
    </Card>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};
