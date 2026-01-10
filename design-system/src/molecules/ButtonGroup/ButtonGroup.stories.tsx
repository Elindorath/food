import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    buttons: [
      { label: 'Cancel', onPress: () => {} },
      { label: 'Save', onPress: () => {} },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const ThreeButtons: Story = {
  args: {
    buttons: [
      { label: 'Previous', onPress: () => {} },
      { label: 'Next', onPress: () => {} },
      { label: 'Finish', onPress: () => {} },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithDisabled: Story = {
  args: {
    buttons: [
      { label: 'Cancel', onPress: () => {} },
      { label: 'Save', onPress: () => {}, disabled: true },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const FullWidth: Story = {
  args: {
    buttons: [
      { label: 'Cancel', onPress: () => {} },
      { label: 'Confirm', onPress: () => {} },
    ],
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Secondary: Story = {
  args: {
    buttons: [
      { label: 'No', onPress: () => {} },
      { label: 'Yes', onPress: () => {} },
    ],
    variant: 'secondary',
  },
  parameters: {
    layout: 'padded',
  },
};
