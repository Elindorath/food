/**
 * RecipeListTemplate - Header + SearchBar + Liste de RecipeCard + TabBar
 */

import { View, FlatList } from 'react-native';
import { Header } from '../../organisms/Header/Header';
import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import { RecipeCard } from '../../organisms/RecipeCard/RecipeCard';
import { LoadingSkeleton } from '../../organisms/LoadingSkeleton/LoadingSkeleton';
import { EmptyState } from '../../organisms/EmptyState/EmptyState';
import type { RecipeListTemplateProps } from './RecipeListTemplate.types';
import { styles } from './RecipeListTemplate.styles';
import type { RecipeCardProps } from '../../organisms/RecipeCard/RecipeCard.types';

export const RecipeListTemplate = ({
  header,
  onSearch,
  recipes,
  isLoading = false,
  onRecipePress,
  style,
  ...props
}: RecipeListTemplateProps) => {
  const renderRecipe = ({ item }: { item: RecipeCardProps }) => (
    <RecipeCard
      {...item}
      onPress={onRecipePress ? () => { onRecipePress(item.title); } : item.onPress}
    />
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          {[1, 2, 3].map((i) => (
            <LoadingSkeleton key={i} type="card" height={250} style={styles.skeleton} />
          ))}
        </View>
      );
    }

    if (recipes.length === 0) {
      return (
        <EmptyState
          title="Aucune recette"
          message="Commencez par ajouter votre première recette !"
          actionLabel="Ajouter une recette"
        />
      );
    }

    return (
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={(item, index) => item.title || index.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <View style={[styles.container, style]} {...props}>
      <Header {...header} />
      {onSearch && (
        <View style={styles.searchContainer}>
          <SearchBar onSearch={onSearch} />
        </View>
      )}
      {renderContent()}
    </View>
  );
};
