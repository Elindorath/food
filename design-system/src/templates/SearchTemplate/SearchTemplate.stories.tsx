import type { Meta, StoryObj } from '@storybook/react';
import { SearchTemplate } from './SearchTemplate';

const meta: Meta<typeof SearchTemplate> = {
  title: 'Templates/SearchTemplate',
  component: SearchTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchTemplate>;

export const Default: Story = {
  args: {
    header: {
      title: 'Search Recipes',
    },
    filters: [
      { children: 'Italian', variant: 'default' },
      { children: 'Dessert', variant: 'default' },
      { children: 'Quick', variant: 'default' },
    ],
    results: [
      {
        title: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish',
        tags: ['Italian', 'Pasta'],
        difficulty: 3,
        preparationTime: 15,
        cookingTime: 20,
        rating: 4.5,
      },
      {
        title: 'Chocolate Chip Cookies',
        description: 'Soft and chewy cookies',
        tags: ['Dessert', 'Baking'],
        difficulty: 2,
        preparationTime: 20,
        cookingTime: 12,
        rating: 4.8,
      },
    ],
  },
};

export const WithManyResults: Story = {
  args: {
    header: {
      title: 'Search Recipes',
    },
    filters: [
      { children: 'All', variant: 'primary' },
      { children: 'Italian', variant: 'default' },
      { children: 'French', variant: 'default' },
      { children: 'Dessert', variant: 'default' },
    ],
    results: [
      {
        title: 'Recipe 1',
        description: 'Description 1',
        tags: ['Tag1'],
        difficulty: 2,
        rating: 4.0,
      },
      {
        title: 'Recipe 2',
        description: 'Description 2',
        tags: ['Tag2'],
        difficulty: 3,
        rating: 4.5,
      },
      {
        title: 'Recipe 3',
        description: 'Description 3',
        tags: ['Tag3'],
        difficulty: 1,
        rating: 3.5,
      },
      {
        title: 'Recipe 4',
        description: 'Description 4',
        tags: ['Tag4'],
        difficulty: 4,
        rating: 5.0,
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    header: {
      title: 'Search Recipes',
    },
    filters: [
      { children: 'All', variant: 'default' },
      { children: 'Italian', variant: 'default' },
    ],
    results: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    header: {
      title: 'Search Recipes',
    },
    filters: [
      { children: 'All', variant: 'default' },
    ],
    results: [],
    isLoading: false,
  },
};
