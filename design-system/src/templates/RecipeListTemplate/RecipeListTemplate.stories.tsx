import type { Meta, StoryObj } from '@storybook/react';
import { RecipeListTemplate } from './RecipeListTemplate';

const meta: Meta<typeof RecipeListTemplate> = {
  title: 'Templates/RecipeListTemplate',
  component: RecipeListTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RecipeListTemplate>;

export const Default: Story = {
  args: {
    header: {
      title: 'My Recipes',
      rightActions: [
        {
          icon: 'add',
          onPress: () => {
             
            console.log('Add recipe');
          },
        },
      ],
    },
    recipes: [
      {
        title: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish with eggs, cheese, and pancetta',
        tags: ['Italian', 'Pasta', 'Dinner'],
        difficulty: 3,
        preparationTime: 15,
        cookingTime: 20,
        rating: 4.5,
      },
      {
        title: 'Chocolate Chip Cookies',
        description: 'Soft and chewy cookies with chocolate chips',
        tags: ['Dessert', 'Baking'],
        difficulty: 2,
        preparationTime: 20,
        cookingTime: 12,
        rating: 4.8,
      },
      {
        title: 'Beef Wellington',
        description: 'Elegant dish with beef tenderloin wrapped in puff pastry',
        tags: ['French', 'Gourmet', 'Dinner'],
        difficulty: 5,
        preparationTime: 60,
        cookingTime: 45,
        rating: 5.0,
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    header: {
      title: 'My Recipes',
    },
    recipes: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    header: {
      title: 'My Recipes',
      rightActions: [
        {
          icon: 'add',
          onPress: () => {
             
            console.log('Add recipe');
          },
        },
      ],
    },
    recipes: [],
    isLoading: false,
  },
};

export const WithSearch: Story = {
  args: {
    header: {
      title: 'Recipes',
    },
    onSearch: (query) => {
       
      console.log('Searching for:', query);
    },
    recipes: [
      {
        title: 'Pasta Carbonara',
        description: 'Italian classic',
        tags: ['Italian'],
        difficulty: 3,
        rating: 4.5,
      },
      {
        title: 'Chocolate Cake',
        description: 'Rich and moist',
        tags: ['Dessert'],
        difficulty: 2,
        rating: 4.8,
      },
    ],
  },
};
