import type { Meta, StoryObj } from '@storybook/react';
import { ScrollView, Text as RNText, View as RNView } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { colors } from '../colors/colors';
import { spacing } from '../spacing/spacing';

import type { Typography } from './typography';
import { typography } from './typography';

const SAMPLE_TEXT = 'The quick brown fox jumps over the lazy dog';

function getTypographyDescription(style: Typography[keyof Typography]): string {
  return `${style.fontFamily} · ${style.fontSize}px · ${style.fontWeight}`;
}

type TypographyCardProps = {
  name: string;
  style: Typography[keyof Typography];
};

function TypographyCard({ name, style }: TypographyCardProps) {
  const description = getTypographyDescription(style);

  return (
    <RNView style={styles.card}>
      <RNView style={styles.cardHeader}>
        <RNText style={styles.cardName}>{name}</RNText>
        <RNText style={styles.cardDescription}>{description}</RNText>
      </RNView>
      <RNText style={[styles.sample, style]} numberOfLines={3}>
        {SAMPLE_TEXT}
      </RNText>
    </RNView>
  );
}

function TypographyPalette() {
  const entries = Object.entries(typography) as unknown as Array<
    [keyof Typography, Typography[keyof Typography]]
  >;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
    >
      <RNText style={styles.title}>Typography</RNText>
      <RNView style={styles.list}>
        {entries.map(([name, style]) => (
          <TypographyCard key={name} name={name} style={style} />
        ))}
      </RNView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.neutral[50],
    borderRadius: spacing[2],
    padding: spacing[4],
  },
  cardDescription: {
    fontSize: typography.caption.fontSize,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[2],
  },
  cardName: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.h4.fontWeight,
    textTransform: 'uppercase',
  },
  list: {
    gap: spacing[6],
  },
  sample: {
    color: colors.neutral[900],
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing[6],
    paddingBottom: spacing[12],
  },
  title: {
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h1.fontWeight,
    marginBottom: spacing[6],
  },
});

const meta: Meta<typeof TypographyPalette> = {
  title: 'Tokens/Typography',
  component: TypographyPalette,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TypographyPalette>;

export const Palette: Story = {};
