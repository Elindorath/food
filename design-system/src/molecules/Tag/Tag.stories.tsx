import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Molecules/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'error', 'warning', 'info'],
    },
    selected: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Tag',
    variant: 'primary',
  },
};

export const Selected: Story = {
  args: {
    children: 'Selected Tag',
    selected: true,
  },
};

export const Clickable: Story = {
  args: {
    children: 'Clickable Tag',
    onPress: () => {
       
      console.log('Tag clicked');
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="info">Info</Tag>
    </View>
  ),
  parameters: {
    layout: 'padded',
  },
};
