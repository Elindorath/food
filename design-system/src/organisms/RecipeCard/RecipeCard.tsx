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
  ...props
}: RecipeCardProps) => {
  const totalTime = (preparationTime ?? 0) + (cookingTime ?? 0);

  const content = (
    <Card style={styles.card} {...props}>
      {imageUrl !== undefined ? (
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      ) : null}
      <View style={styles.content}>
        <Text variant="h4">
          {title}
        </Text>
        {description !== undefined ? (
          <Text variant="bodySmall" numberOfLines={2}>
            {description}
          </Text>
        ) : null}
        <View style={styles.metadata}>
          {difficulty !== undefined ? (
            <Badge variant="info" size="small">
              Difficulté: {difficulty}/5
            </Badge>
          ) : null}
          {totalTime !== 0 ? (
            <Badge variant="primary" size="small">
              {totalTime} min
            </Badge>
          ) : null}
          {rating !== undefined ? (
            <Badge variant="warning" size="small">
              ⭐ {rating}/5
            </Badge>
          ) : null}
        </View>
        {tags.length !== 0 ? (
          <View style={styles.tags}>
            {tags.slice(0, 3).map((tag, index) => (
              <Tag key={index} size="small" variant="primary">
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
