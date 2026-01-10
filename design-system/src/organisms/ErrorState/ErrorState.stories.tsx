import type { Meta, StoryObj } from '@storybook/react';
import { ErrorState } from './ErrorState';

const meta: Meta<typeof ErrorState> = {
  title: 'Organisms/ErrorState',
  component: ErrorState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    retryLabel: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  args: {
    message: 'Unable to load recipes. Please check your connection and try again.',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithRetry: Story = {
  args: {
    message: 'Unable to load recipes. Please check your connection and try again.',
    retryLabel: 'Retry',
    onRetry: () => {
       
      console.log('Retry pressed');
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Oops! Something went wrong',
    message: 'We encountered an error while processing your request.',
    retryLabel: 'Try Again',
    onRetry: () => {
       
      console.log('Retry pressed');
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithoutRetry: Story = {
  args: {
    title: 'Error',
    message: 'This operation cannot be completed at this time.',
  },
  parameters: {
    layout: 'padded',
  },
};
