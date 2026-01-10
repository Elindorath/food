import type { Meta, StoryObj } from '@storybook/react';
import { StepIndicator } from './StepIndicator';

const meta: Meta<typeof StepIndicator> = {
  title: 'Molecules/StepIndicator',
  component: StepIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    stepNumber: {
      control: { type: 'number', min: 1, max: 10 },
    },
    instruction: {
      control: 'text',
    },
    duration: {
      control: { type: 'number', min: 0, max: 120 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StepIndicator>;

export const Default: Story = {
  args: {
    stepNumber: 1,
    instruction: 'Mix the flour and eggs together',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithDuration: Story = {
  args: {
    stepNumber: 2,
    instruction: 'Cook the pasta for 10 minutes',
    duration: 10,
  },
  parameters: {
    layout: 'padded',
  },
};

export const LongInstruction: Story = {
  args: {
    stepNumber: 3,
    instruction: 'Add the tomatoes, garlic, and basil to the pan and simmer for 15 minutes until the sauce thickens',
    duration: 15,
  },
  parameters: {
    layout: 'padded',
  },
};

export const HighStepNumber: Story = {
  args: {
    stepNumber: 10,
    instruction: 'Final step: Serve and enjoy!',
  },
  parameters: {
    layout: 'padded',
  },
};
