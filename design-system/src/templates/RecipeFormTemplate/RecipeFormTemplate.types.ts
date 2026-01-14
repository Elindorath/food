/**
 * RecipeFormTemplate component types
 */

import type { HeaderProps } from '../../organisms/Header/Header.types';
import type { FormSectionProps } from '../../organisms/FormSection/FormSection.types';
import type { ButtonGroupProps } from '../../molecules/ButtonGroup/ButtonGroup.types';

export type RecipeFormTemplateProps = {
  header: HeaderProps;
  infoSection: FormSectionProps;
  ingredientsSection: FormSectionProps;
  stepsSection: FormSectionProps;
  actions: ButtonGroupProps['buttons'];
  testID?: string;
};
