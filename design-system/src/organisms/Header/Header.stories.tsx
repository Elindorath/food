import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Simple: Story = {
  args: {
    title: 'Recipes',
  },
};

export const WithLeftAction: Story = {
  args: {
    title: 'Recipe Details',
    leftActions: [
      {
        icon: 'arrow-left',
        onPress: () => {
           
          console.log('Back pressed');
        },
      },
    ],
  },
};

export const WithRightAction: Story = {
  args: {
    title: 'My Recipes',
    rightActions: [
      {
        icon: 'search',
        onPress: () => {
           
          console.log('Search pressed');
        },
      },
    ],
  },
};

export const WithMultipleActions: Story = {
  args: {
    title: 'Recipe Editor',
    leftActions: [
      {
        icon: 'arrow-left',
        onPress: () => {
           
          console.log('Back pressed');
        },
      },
    ],
    rightActions: [
      {
        icon: 'save',
        onPress: () => {
           
          console.log('Save pressed');
        },
      },
      {
        icon: 'more',
        onPress: () => {
           
          console.log('More pressed');
        },
      },
    ],
  },
};

export const WithButtonActions: Story = {
  args: {
    title: 'Settings',
    leftActions: [
      {
        label: 'Cancel',
        onPress: () => {
           
          console.log('Cancel pressed');
        },
      },
    ],
    rightActions: [
      {
        label: 'Save',
        onPress: () => {
           
          console.log('Save pressed');
        },
      },
    ],
  },
};
