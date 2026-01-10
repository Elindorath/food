/**
 * SearchTemplate - Header + SearchBar + Filtres (Tags) + Liste de résultats
 */

import { View, FlatList, ScrollView } from 'react-native';
import { Header } from '../../organisms/Header/Header';
import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import { Tag } from '../../molecules/Tag/Tag';
import { RecipeCard } from '../../organisms/RecipeCard/RecipeCard';
import { LoadingSkeleton } from '../../organisms/LoadingSkeleton/LoadingSkeleton';
import { EmptyState } from '../../organisms/EmptyState/EmptyState';
import type { SearchTemplateProps } from './SearchTemplate.types';
import { spacing } from '../../tokens/spacing';
import { styles } from './SearchTemplate.styles';
import type { RecipeCardProps } from '../../organisms/RecipeCard/RecipeCard.types';

export const SearchTemplate = ({
  header,
  onSearch,
  filters = [],
  results,
  isLoading = false,
  onRecipePress,
  style,
  ...props
}: SearchTemplateProps) => {
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

    if (results.length === 0) {
      return (
        <EmptyState
          title="Aucun résultat"
          message="Essayez de modifier vos critères de recherche"
        />
      );
    }

    return (
      <FlatList
        data={results}
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
      {filters.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContainer}
        >
          {filters.map((filter, index) => (
            <Tag key={index} {...filter} style={[filter.style, index > 0 && { marginLeft: spacing[2] }]} />
          ))}
        </ScrollView>
      )}
      {renderContent()}
    </View>
  );
};
