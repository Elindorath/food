import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    size: 'medium',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
    size: 'medium',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
    size: 'medium',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
    size: 'medium',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    variant: 'primary',
    size: 'large',
  },
};

export const AllVariants: Story = {
  render: () => (
    <>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </>
  ),
  parameters: {
    layout: 'padded',
  },
};
