import type { Meta, StoryObj } from '@storybook/react';
import { ScrollView, Text as RNText, View as RNView } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { spacing } from '../spacing/spacing';
import { typography } from '../typography/typography';

import { colors } from '../colors/colors';

import type { Shadows } from './shadows';
import { shadows } from './shadows';

function getShadowDescription(shadow: Shadows[keyof Shadows]): string {
  const s = shadow as { [key: string]: unknown };

  if (typeof s.boxShadow === 'string') {
    return s.boxShadow;
  }

  if (typeof s.elevation === 'number') {
    return `elevation: ${s.elevation}`;
  }

  if (
    s.shadowOffset !== null &&
    typeof s.shadowOpacity === 'number' &&
    typeof s.shadowRadius === 'number'
  ) {
    const offset = s.shadowOffset as { width: number; height: number };

    return `offset: ${offset.width},${offset.height} · opacity: ${s.shadowOpacity} · radius: ${s.shadowRadius}`;
  }

  return 'none';
}

type ShadowCardProps = {
  name: string;
  shadow: Shadows[keyof Shadows];
};

function ShadowCard({ name, shadow }: ShadowCardProps) {
  const description = getShadowDescription(shadow);

  return (
    <RNView style={[styles.card, shadow]}>
      <RNText style={styles.cardName}>{name}</RNText>
      <RNText style={styles.cardDescription} numberOfLines={2}>
        {description}
      </RNText>
    </RNView>
  );
}

function ShadowsPalette() {
  const entries = Object.entries(shadows) as Array<
    [keyof Shadows, Shadows[keyof Shadows]]
  >;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
    >
      <RNText style={styles.title}>Shadows</RNText>
      <RNView style={styles.grid}>
        {entries.map(([name, shadow]) => (
          <ShadowCard key={name} name={name} shadow={shadow} />
        ))}
      </RNView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.neutral[50],
    borderRadius: spacing[2],
    minHeight: 100,
    padding: spacing[4],
  },
  cardDescription: {
    fontSize: typography.caption.fontSize,
    marginTop: spacing[1],
  },
  cardName: {
    fontSize: typography.bodySmall.fontSize,
    fontWeight: typography.h4.fontWeight,
    textTransform: 'uppercase',
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

const meta: Meta<typeof ShadowsPalette> = {
  title: 'Tokens/Shadows',
  component: ShadowsPalette,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ShadowsPalette>;

export const Palette: Story = {};
