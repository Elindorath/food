import type { Meta, StoryObj } from '@storybook/react';
import { StepList } from './StepList';

const meta: Meta<typeof StepList> = {
  title: 'Organisms/StepList',
  component: StepList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StepList>;

export const Default: Story = {
  args: {
    steps: [
      { stepNumber: 1, instruction: 'Mix the flour and eggs together', duration: 5 },
      { stepNumber: 2, instruction: 'Knead the dough for 10 minutes', duration: 10 },
      { stepNumber: 3, instruction: 'Let the dough rest for 30 minutes', duration: 30 },
      { stepNumber: 4, instruction: 'Roll out the dough', duration: 5 },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithoutDuration: Story = {
  args: {
    steps: [
      { stepNumber: 1, instruction: 'Preheat the oven to 180°C' },
      { stepNumber: 2, instruction: 'Prepare the ingredients' },
      { stepNumber: 3, instruction: 'Mix everything together' },
      { stepNumber: 4, instruction: 'Bake for 25 minutes' },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const LongSteps: Story = {
  args: {
    steps: [
      {
        stepNumber: 1,
        instruction: 'Heat olive oil in a large pan over medium heat. Add the garlic and cook until fragrant, about 1 minute.',
        duration: 5,
      },
      {
        stepNumber: 2,
        instruction: 'Add the tomatoes, breaking them up with a spoon. Season with salt and pepper.',
        duration: 10,
      },
      {
        stepNumber: 3,
        instruction: 'Simmer the sauce for 15-20 minutes until it thickens and the flavors meld together.',
        duration: 20,
      },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const ManySteps: Story = {
  args: {
    steps: [
      { stepNumber: 1, instruction: 'Step 1', duration: 2 },
      { stepNumber: 2, instruction: 'Step 2', duration: 3 },
      { stepNumber: 3, instruction: 'Step 3', duration: 5 },
      { stepNumber: 4, instruction: 'Step 4', duration: 4 },
      { stepNumber: 5, instruction: 'Step 5', duration: 6 },
      { stepNumber: 6, instruction: 'Step 6', duration: 3 },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};
