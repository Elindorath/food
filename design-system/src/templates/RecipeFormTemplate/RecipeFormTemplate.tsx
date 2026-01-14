/**
 * RecipeFormTemplate - Header + FormSection (infos) + FormSection (ingrédients) + FormSection (étapes) + ButtonGroup
 */

import { View, ScrollView } from 'react-native';
import { Header } from '../../organisms/Header/Header';
import { FormSection } from '../../organisms/FormSection/FormSection';
import { ButtonGroup } from '../../molecules/ButtonGroup/ButtonGroup';
import type { RecipeFormTemplateProps } from './RecipeFormTemplate.types';
import { styles } from './RecipeFormTemplate.styles';

export const RecipeFormTemplate = ({
  header,
  infoSection,
  ingredientsSection,
  stepsSection,
  actions,
  ...props
}: RecipeFormTemplateProps) => {
  return (
    <View style={styles.container} {...props}>
      <Header {...header} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <FormSection {...infoSection} />
        <FormSection {...ingredientsSection} />
        <FormSection {...stepsSection} />
        <View style={styles.actions}>
          <ButtonGroup buttons={actions} fullWidth />
        </View>
      </ScrollView>
    </View>
  );
};
