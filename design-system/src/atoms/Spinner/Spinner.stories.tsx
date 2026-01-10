import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const CustomColor: Story = {
  args: {
    size: 'medium',
    color: '#3B82F6',
  },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </View>
  ),
  parameters: {
    layout: 'padded',
  },
};
