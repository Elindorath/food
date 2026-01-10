import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Card } from './Card';
import { Text } from '../../atoms/Text/Text';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <Text>Card content</Text>,
  },
};

export const WithMultipleChildren: Story = {
  args: {
    children: (
      <>
        <Text variant="h3">Card Title</Text>
        <Text variant="body">This is the card content with multiple elements.</Text>
        <Text variant="caption">Footer text</Text>
      </>
    ),
  },
};

export const WithLongContent: Story = {
  args: {
    children: (
      <>
        <Text variant="h3">Long Content Card</Text>
        <Text variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris.
        </Text>
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};
