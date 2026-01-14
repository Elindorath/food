import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'caption', 'label'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const H1: Story = {
  name: 'H1',
  args: {
    children: 'Heading 1',
    variant: 'h1',
  },
};

export const H2: Story = {
  name: 'H2',
  args: {
    children: 'Heading 2',
    variant: 'h2',
  },
};

export const H3: Story = {
  name: 'H3',
  args: {
    children: 'Heading 3',
    variant: 'h3',
  },
};

export const Body: Story = {
  args: {
    children: 'Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    variant: 'body',
  },
};

export const Caption: Story = {
  args: {
    children: 'Caption text',
    variant: 'caption',
  },
};

export const Label: Story = {
  args: {
    children: 'Label text',
    variant: 'label',
  },
};

export const CustomColor: Story = {
  args: {
    children: 'Text with custom color',
    variant: 'body',
    color: '#FF5733',
  },
};

export const AllVariants: Story = {
  render: () => (
    <>
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="h5">Heading 5</Text>
      <Text variant="h6">Heading 6</Text>
      <Text variant="body">Body text</Text>
      <Text variant="caption">Caption text</Text>
      <Text variant="label">Label text</Text>
    </>
  ),
  parameters: {
    layout: 'padded',
  },
};
