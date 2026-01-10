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
  style,
  ...props
}: RecipeDetailTemplateProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
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
          <Text variant="h2" style={styles.title}>
            {title}
          </Text>
          {description !== undefined ? (
            <Text variant="body" style={styles.description}>
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
            style={styles.metadataCard}
          />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.section}>
          <Text variant="h4" style={styles.sectionTitle}>
            Ingrédients
          </Text>
          <IngredientList ingredients={ingredients} />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.section}>
          <Text variant="h4" style={styles.sectionTitle}>
            Étapes
          </Text>
          <StepList steps={steps} />
        </View>
      </ScrollView>
    </View>
  );
};
