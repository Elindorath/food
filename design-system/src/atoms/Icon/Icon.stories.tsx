import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Small: Story = {
  args: {
    name: 'icon',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    name: 'icon',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    name: 'icon',
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    name: 'icon',
    size: 'xlarge',
  },
};

export const CustomColor: Story = {
  args: {
    name: 'icon',
    size: 'medium',
    color: '#3B82F6',
  },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Icon name="icon" size="small" />
      <Icon name="icon" size="medium" />
      <Icon name="icon" size="large" />
      <Icon name="icon" size="xlarge" />
    </View>
  ),
  parameters: {
    layout: 'padded',
  },
};
