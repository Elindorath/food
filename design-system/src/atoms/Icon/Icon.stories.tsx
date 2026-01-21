import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { icons } from '@/tokens/icons/icons';

import { Icon } from './Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(icons),
    },
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
    name: 'user',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    name: 'user',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    name: 'user',
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    name: 'user',
    size: 'xlarge',
  },
};

export const CustomColor: Story = {
  args: {
    name: 'user',
    size: 'medium',
    color: '#3B82F6',
  },
};

export const AllSizes: Story = {
  render: () => (
    <View style={styles.container}>
      <Icon name="user" size="small" />
      <Icon name="user" size="medium" />
      <Icon name="user" size="large" />
      <Icon name="user" size="xlarge" />
    </View>
  ),
  parameters: {
    layout: 'padded',
  },
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
});
