import type { Meta, StoryObj } from '@storybook/react'
import { View } from 'react-native'
import { Divider } from './Divider'
import { Text } from '../Text/Text'

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    color: {
      control: 'color',
    },
  },
}

export default meta

type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <Text>Content above</Text>
      <Divider {...args} />
      <Text>Content below</Text>
    </View>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <View style={{ flexDirection: 'row', height: 100, alignItems: 'center' }}>
      <Text>Left</Text>
      <Divider {...args} />
      <Text>Right</Text>
    </View>
  ),
}

export const CustomColor: Story = {
  args: {
    orientation: 'horizontal',
    color: '#3B82F6',
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <Text>Custom color divider</Text>
      <Divider {...args} />
      <Text>Below divider</Text>
    </View>
  ),
}
