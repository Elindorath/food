import type { Meta, StoryObj } from '@storybook/react';
import { ScrollView, Text as RNText, View as RNView } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { colors } from '../colors/colors';
import { typography } from '../typography/typography';

import type { Spacing } from './spacing';
import { spacing } from './spacing';

type SpacingCardProps = {
  name: string;
  value: number;
};

function SpacingCard({ name, value }: SpacingCardProps) {
  return (
    <RNView style={styles.card}>
      <RNView style={styles.cardHeader}>
        <RNText style={styles.cardName}>{name}</RNText>
        <RNText style={styles.cardValue}>{value}px</RNText>
      </RNView>
      <RNView style={styles.barContainer}>
        <RNView style={[styles.bar, { width: value }]} />
      </RNView>
    </RNView>
  );
}

function SpacingPalette() {
  const entries = Object.entries(spacing) as unknown as Array<
    [keyof Spacing, Spacing[keyof Spacing]]
  >;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
    >
      <RNText style={styles.title}>Spacing</RNText>
      <RNView style={styles.grid}>
        {entries.map(([name, value]) => (
          <SpacingCard key={String(name)} name={String(name)} value={value} />
        ))}
      </RNView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.primary[500],
    borderRadius: spacing[1],
    height: spacing[2],
  },
  barContainer: {
    minHeight: spacing[2],
    marginTop: spacing[2],
  },
  card: {
    backgroundColor: colors.neutral[50],
    borderRadius: spacing[2],
    minWidth: 120,
    padding: spacing[4],
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName: {
    fontSize: typography.bodySmall.fontSize,
    fontWeight: typography.h4.fontWeight,
    textTransform: 'uppercase',
  },
  cardValue: {
    fontSize: typography.caption.fontSize,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[6],
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

const meta: Meta<typeof SpacingPalette> = {
  title: 'Tokens/Spacing',
  component: SpacingPalette,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SpacingPalette>;

export const Palette: Story = {};
