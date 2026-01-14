/**
 * RecipeDetailTemplate - Header + Image + RecipeCard + IngredientList + StepList
 */

import { View, ScrollView, Image } from 'react-native';
import { Header } from '../../organisms/Header/Header';
import { RecipeCard } from '../../organisms/RecipeCard/RecipeCard';
import { IngredientList } from '../../organisms/IngredientList/IngredientList';
import { StepList } from '../../organisms/StepList/StepList';
import { Text } from '../../atoms/Text/Text';
import { Divider } from '../../atoms/Divider/Divider';
import type { RecipeDetailTemplateProps } from './RecipeDetailTemplate.types';
import { styles } from './RecipeDetailTemplate.styles';

export const RecipeDetailTemplate = ({
  header,
  imageUrl,
  title,
  description,
  tags,
  difficulty,
  preparationTime,
  cookingTime,
  rating,
  ingredients,
  steps,
  ...props
}: RecipeDetailTemplateProps) => {
  return (
    <View style={styles.container} {...props}>
      <Header {...header} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {imageUrl !== undefined ? (
          <Image
            source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
            style={styles.image}
            resizeMode="cover"
          />
        ) : null}
        <View style={styles.infoSection}>
          <Text variant="h2">
            {title}
          </Text>
          {description !== undefined ? (
            <Text variant="body">
              {description}
            </Text>
          ) : null}
          <RecipeCard
            title=""
            tags={tags}
            difficulty={difficulty}
            preparationTime={preparationTime}
            cookingTime={cookingTime}
            rating={rating}
          />
        </View>
        <Divider />
        <View style={styles.section}>
          <Text variant="h4">
            Ingrédients
          </Text>
          <IngredientList ingredients={ingredients} />
        </View>
        <Divider />
        <View style={styles.section}>
          <Text variant="h4">
            Étapes
          </Text>
          <StepList steps={steps} />
        </View>
      </ScrollView>
    </View>
  );
};
