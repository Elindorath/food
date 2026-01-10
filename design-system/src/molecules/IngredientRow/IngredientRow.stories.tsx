import type { Meta, StoryObj } from '@storybook/react';
import { IngredientRow } from './IngredientRow';

const meta: Meta<typeof IngredientRow> = {
  title: 'Molecules/IngredientRow',
  component: IngredientRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
    },
    quantity: {
      control: 'text',
    },
    unit: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IngredientRow>;

export const Default: Story = {
  args: {
    name: 'Flour',
    quantity: 250,
    unit: 'g',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithStringQuantity: Story = {
  args: {
    name: 'Olive Oil',
    quantity: '2-3',
    unit: 'tbsp',
  },
  parameters: {
    layout: 'padded',
  },
};

export const LongName: Story = {
  args: {
    name: 'Extra Virgin Olive Oil',
    quantity: 1,
    unit: 'cup',
  },
  parameters: {
    layout: 'padded',
  },
};

export const NoUnit: Story = {
  args: {
    name: 'Eggs',
    quantity: 3,
    unit: '',
  },
  parameters: {
    layout: 'padded',
  },
};
