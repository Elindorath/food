import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { RecipeCard } from './RecipeCard';

const meta: Meta<typeof RecipeCard> = {
  title: 'Organisms/RecipeCard',
  component: RecipeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    difficulty: {
      control: { type: 'range', min: 1, max: 5, step: 1 },
    },
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RecipeCard>;

export const Default: Story = {
  args: {
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish with eggs, cheese, and pancetta',
    tags: ['Italian', 'Pasta', 'Dinner'],
    difficulty: 3,
    preparationTime: 15,
    cookingTime: 20,
    rating: 4.5,
  },
};

export const WithImage: Story = {
  args: {
    title: 'Chocolate Chip Cookies',
    description: 'Soft and chewy cookies with chocolate chips',
    imageUrl: 'https://via.placeholder.com/300x200',
    tags: ['Dessert', 'Baking'],
    difficulty: 2,
    preparationTime: 20,
    cookingTime: 12,
    rating: 4.8,
  },
};

export const Minimal: Story = {
  args: {
    title: 'Simple Salad',
    description: 'Fresh greens with vinaigrette',
    difficulty: 1,
    preparationTime: 10,
  },
};

export const HighRating: Story = {
  args: {
    title: 'Beef Wellington',
    description: 'Elegant dish with beef tenderloin wrapped in puff pastry',
    tags: ['French', 'Gourmet', 'Dinner'],
    difficulty: 5,
    preparationTime: 60,
    cookingTime: 45,
    rating: 5.0,
  },
};
