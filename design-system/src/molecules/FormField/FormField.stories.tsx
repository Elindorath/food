import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    required: true,
    placeholder: 'Enter your password',
    secureTextEntry: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'This field is required',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Must be at least 3 characters',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'Disabled value',
  },
};
