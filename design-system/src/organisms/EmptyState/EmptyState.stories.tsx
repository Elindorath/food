import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Organisms/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    actionLabel: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No recipes found',
    message: 'Start by adding your first recipe!',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithAction: Story = {
  args: {
    title: 'No recipes found',
    message: 'Start by adding your first recipe!',
    actionLabel: 'Add Recipe',
    onAction: () => {
       
      console.log('Action pressed');
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export const CustomIcon: Story = {
  args: {
    icon: 'search',
    title: 'No results',
    message: 'Try adjusting your search criteria',
    actionLabel: 'Clear Filters',
    onAction: () => {
       
      console.log('Clear filters');
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export const Minimal: Story = {
  args: {
    title: 'Empty',
  },
  parameters: {
    layout: 'padded',
  },
};
