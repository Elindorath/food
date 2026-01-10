import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Rechercher...',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Rechercher...',
    value: 'Pasta',
  },
  parameters: {
    layout: 'padded',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Search recipes...',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithOnSearch: Story = {
  args: {
    placeholder: 'Rechercher...',
    onSearch: (query) => {
       
      console.log('Searching for:', query);
    },
  },
  parameters: {
    layout: 'padded',
  },
};
