import type { Meta, StoryObj } from '@storybook/react';
import { colors } from './colors';
import { Text } from '@/atoms/Text/Text';
import { View as RNView } from 'react-native';

function ColorPalette() {
  return (
    <RNView>
      <Text>Color Palette</Text>
    </RNView>
  );
}

const meta: Meta<typeof ColorPalette> = {
  title: 'Tokens/Colors',
  component: ColorPalette,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
  args: {
    children: <Text>Color Palette</Text>,
  },
};

function ColorBox({ name, color }: { name: string, color: string }) {
  return (
    <RNView style={{ backgroundColor: color }}>
      <Text>{color}</Text>
    </RNView>
  );
}
