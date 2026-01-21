import type { Meta, StoryObj } from '@storybook/react';
import { ScrollView, Text as RNText, View as RNView } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { spacing } from '../spacing/spacing';
import { typography } from '../typography/typography';

import { colors } from './colors';

const SHADE_ORDER = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

function getLuminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function getContrastColor(hex: string): string {
  return getLuminance(hex) > 0.5 ? colors.neutral[900] : colors.neutral[50];
}

type ColorSwatchProps = {
  name: string;
  hex: string;
};

function ColorSwatch({ name, hex }: ColorSwatchProps) {
  const textColor = getContrastColor(hex);

  return (
    <RNView style={[styles.swatch, { backgroundColor: hex }]}>
      <RNText style={[styles.swatchLabel, { color: textColor }]}>{name}</RNText>
      <RNText style={[styles.swatchHex, { color: textColor }]}>{hex}</RNText>
    </RNView>
  );
}

type ColorGroupProps = {
  groupName: string;
  shades: { [shade: number]: string };
};

function ColorGroup({ groupName, shades }: ColorGroupProps) {
  return (
    <RNView style={styles.group}>
      <RNText style={styles.groupTitle}>{groupName}</RNText>
      <RNView style={styles.swatchRow}>
        {SHADE_ORDER.map((shade) => (
          <ColorSwatch
            key={shade}
            name={String(shade)}
            hex={shades[shade]}
          />
        ))}
      </RNView>
    </RNView>
  );
}

function ColorPalette() {
  const groups = Object.entries(colors) as Array<
    [keyof typeof colors, (typeof colors)[keyof typeof colors]]
  >;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
    >
      <RNText style={styles.title}>Colors palette</RNText>
      {groups.map(([name, shadeMap]) => (
        <ColorGroup key={name} groupName={name} shades={shadeMap} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  group: {
    marginBottom: spacing[6],
  },
  groupTitle: {
    fontSize: typography.h4.fontSize,
    fontWeight: typography.h4.fontWeight,
    marginBottom: spacing[3],
    textTransform: 'capitalize',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing[6],
    paddingBottom: spacing[12],
  },
  swatch: {
    borderRadius: spacing[2],
    justifyContent: 'flex-end',
    minHeight: 72,
    minWidth: 100,
    padding: spacing[3],
  },
  swatchHex: {
    fontSize: typography.caption.fontSize,
  },
  swatchLabel: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.h4.fontWeight,
  },
  swatchRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  title: {
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h1.fontWeight,
    marginBottom: spacing[6],
  },
});

const meta: Meta<typeof ColorPalette> = {
  title: 'Tokens/Colors',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const Palette: Story = {};
