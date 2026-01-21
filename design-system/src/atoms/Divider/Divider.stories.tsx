import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

import { Text } from '@/atoms/Text/Text'

import { Divider } from './Divider'

import type { Meta, StoryObj } from '@storybook/react'

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
    <View style={styles.horizontalContainer}>
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
    <View style={styles.verticalContainer}>
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
    <View style={styles.horizontalContainer}>
      <Text>Custom color divider</Text>
      <Divider {...args} />
      <Text>Below divider</Text>
    </View>
  ),
}

const styles = StyleSheet.create({
  horizontalContainer: {
    width: 300,
  },
  verticalContainer: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
  },
})
