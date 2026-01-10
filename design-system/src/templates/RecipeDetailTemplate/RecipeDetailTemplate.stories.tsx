import type { Meta, StoryObj } from '@storybook/react';
import { RecipeDetailTemplate } from './RecipeDetailTemplate';

const meta: Meta<typeof RecipeDetailTemplate> = {
  title: 'Templates/RecipeDetailTemplate',
  component: RecipeDetailTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RecipeDetailTemplate>;

export const Default: Story = {
  args: {
    header: {
      title: 'Recipe Details',
      leftActions: [
        {
          icon: 'arrow-left',
          onPress: () => {
             
            console.log('Back');
          },
        },
      ],
    },
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish with eggs, cheese, and pancetta',
    tags: ['Italian', 'Pasta', 'Dinner'],
    difficulty: 3,
    preparationTime: 15,
    cookingTime: 20,
    rating: 4.5,
    ingredients: [
      { name: 'Spaghetti', quantity: 400, unit: 'g' },
      { name: 'Eggs', quantity: 4, unit: '' },
      { name: 'Pancetta', quantity: 200, unit: 'g' },
      { name: 'Parmesan', quantity: 100, unit: 'g' },
      { name: 'Black Pepper', quantity: 1, unit: 'tsp' },
    ],
    steps: [
      { stepNumber: 1, instruction: 'Cook spaghetti according to package directions', duration: 10 },
      { stepNumber: 2, instruction: 'Fry pancetta until crispy', duration: 5 },
      { stepNumber: 3, instruction: 'Mix eggs and parmesan in a bowl', duration: 2 },
      { stepNumber: 4, instruction: 'Combine pasta with pancetta, then add egg mixture', duration: 2 },
      { stepNumber: 5, instruction: 'Season with black pepper and serve', duration: 1 },
    ],
  },
};

export const WithImage: Story = {
  args: {
    header: {
      title: 'Recipe Details',
      leftActions: [
        {
          icon: 'arrow-left',
          onPress: () => {
             
            console.log('Back');
          },
        },
      ],
    },
    imageUrl: 'https://via.placeholder.com/400x300',
    title: 'Chocolate Chip Cookies',
    description: 'Soft and chewy cookies with chocolate chips',
    tags: ['Dessert', 'Baking'],
    difficulty: 2,
    preparationTime: 20,
    cookingTime: 12,
    rating: 4.8,
    ingredients: [
      { name: 'Flour', quantity: 250, unit: 'g' },
      { name: 'Butter', quantity: 125, unit: 'g' },
      { name: 'Sugar', quantity: 100, unit: 'g' },
      { name: 'Chocolate Chips', quantity: 200, unit: 'g' },
    ],
    steps: [
      { stepNumber: 1, instruction: 'Preheat oven to 180°C', duration: 10 },
      { stepNumber: 2, instruction: 'Mix butter and sugar', duration: 5 },
      { stepNumber: 3, instruction: 'Add flour and chocolate chips', duration: 3 },
      { stepNumber: 4, instruction: 'Bake for 12 minutes', duration: 12 },
    ],
  },
};

export const Minimal: Story = {
  args: {
    header: {
      title: 'Recipe',
    },
    title: 'Simple Salad',
    ingredients: [
      { name: 'Lettuce', quantity: 200, unit: 'g' },
      { name: 'Tomatoes', quantity: 2, unit: '' },
      { name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
    ],
    steps: [
      { stepNumber: 1, instruction: 'Wash and chop lettuce' },
      { stepNumber: 2, instruction: 'Slice tomatoes' },
      { stepNumber: 3, instruction: 'Mix and drizzle with olive oil' },
    ],
  },
};
