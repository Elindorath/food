import type { Meta, StoryObj } from '@storybook/react';
import { View } from './View';
import { Text } from '../Text/Text';

const meta: Meta<typeof View> = {
  title: 'Atoms/View',
  component: View,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof View>;

export const Default: Story = {
  args: {
    children: <Text>View content</Text>,
  },
};

export const WithBackground: Story = {
  args: {
    children: <Text>View with background color</Text>,
    style: { backgroundColor: '#F3F4F6', padding: 16, borderRadius: 8 },
  },
};

export const WithBorder: Story = {
  args: {
    children: <Text>View with border</Text>,
    style: { borderWidth: 1, borderColor: '#E5E7EB', padding: 16, borderRadius: 8 },
  },
};

export const Nested: Story = {
  render: () => (
    <View style={{ padding: 16, backgroundColor: '#F9FAFB' }}>
      <Text variant="h4" style={{ marginBottom: 8 }}>Parent View</Text>
      <View style={{ padding: 12, backgroundColor: '#FFFFFF', borderRadius: 4 }}>
        <Text>Nested View</Text>
      </View>
    </View>
  ),
  parameters: {
    layout: 'padded',
  },
};
