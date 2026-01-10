import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { LoadingSkeleton } from './LoadingSkeleton';

const meta: Meta<typeof LoadingSkeleton> = {
  title: 'Organisms/LoadingSkeleton',
  component: LoadingSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'card', 'circle', 'rect'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoadingSkeleton>;

export const Text: Story = {
  args: {
    type: 'text',
    width: 200,
  },
};

export const Card: Story = {
  args: {
    type: 'card',
    width: 300,
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    type: 'circle',
    width: 50,
  },
};

export const Rect: Story = {
  args: {
    type: 'rect',
    width: 250,
    height: 150,
  },
};

export const MultipleText: Story = {
  render: () => (
    <View style={{ width: 300 }}>
      <LoadingSkeleton type="text" width="100%" height={20} style={{ marginBottom: 8 }} />
      <LoadingSkeleton type="text" width="80%" height={20} style={{ marginBottom: 8 }} />
      <LoadingSkeleton type="text" width="90%" height={20} />
    </View>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <View style={{ width: 300 }}>
      <LoadingSkeleton type="rect" width="100%" height={150} style={{ marginBottom: 12, borderRadius: 8 }} />
      <LoadingSkeleton type="text" width="100%" height={16} style={{ marginBottom: 8 }} />
      <LoadingSkeleton type="text" width="70%" height={16} />
    </View>
  ),
  parameters: {
    layout: 'padded',
  },
};
