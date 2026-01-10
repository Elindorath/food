import type { Meta, StoryObj } from '@storybook/react';
import { IngredientList } from './IngredientList';

const meta: Meta<typeof IngredientList> = {
  title: 'Organisms/IngredientList',
  component: IngredientList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IngredientList>;

export const Default: Story = {
  args: {
    ingredients: [
      { name: 'Flour', quantity: 250, unit: 'g' },
      { name: 'Eggs', quantity: 3, unit: '' },
      { name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
      { name: 'Salt', quantity: 1, unit: 'tsp' },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const LongList: Story = {
  args: {
    ingredients: [
      { name: 'Flour', quantity: 250, unit: 'g' },
      { name: 'Sugar', quantity: 100, unit: 'g' },
      { name: 'Butter', quantity: 125, unit: 'g' },
      { name: 'Eggs', quantity: 2, unit: '' },
      { name: 'Vanilla Extract', quantity: 1, unit: 'tsp' },
      { name: 'Baking Powder', quantity: 1, unit: 'tsp' },
      { name: 'Salt', quantity: 0.5, unit: 'tsp' },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithStringQuantities: Story = {
  args: {
    ingredients: [
      { name: 'Olive Oil', quantity: '2-3', unit: 'tbsp' },
      { name: 'Garlic', quantity: '3-4', unit: 'cloves' },
      { name: 'Tomatoes', quantity: '400', unit: 'g' },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const SingleIngredient: Story = {
  args: {
    ingredients: [
      { name: 'Water', quantity: 500, unit: 'ml' },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};
