/**
 * FormSection component - Plusieurs FormField groupés avec titre
 */

import { View } from 'react-native';
import { Text } from '../../atoms/Text/Text';
import type { FormSectionProps } from './FormSection.types';
import { Divider } from '../../atoms/Divider/Divider';
import { styles } from './FormSection.styles';

export const FormSection = ({
  title,
  children,
  style,
  ...props
}: FormSectionProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Text variant="h5" style={styles.title}>
        {title}
      </Text>
      <Divider style={styles.divider} />
      <View style={styles.content}>{children}</View>
    </View>
  );
};
