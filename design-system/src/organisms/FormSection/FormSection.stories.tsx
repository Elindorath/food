import type { Meta, StoryObj } from '@storybook/react';
import { FormSection } from './FormSection';
import { FormField } from '../../molecules/FormField/FormField';

const meta: Meta<typeof FormSection> = {
  title: 'Organisms/FormSection',
  component: FormSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormSection>;

export const Default: Story = {
  args: {
    title: 'Personal Information',
    children: (
      <>
        <FormField label="First Name" placeholder="Enter your first name" />
        <FormField label="Last Name" placeholder="Enter your last name" />
        <FormField label="Email" placeholder="Enter your email" required />
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};

export const RecipeInfo: Story = {
  args: {
    title: 'Recipe Information',
    children: (
      <>
        <FormField label="Recipe Name" placeholder="Enter recipe name" required />
        <FormField label="Description" placeholder="Enter description" />
        <FormField label="Preparation Time" placeholder="Minutes" />
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithErrors: Story = {
  args: {
    title: 'Form with Errors',
    children: (
      <>
        <FormField label="Email" placeholder="Enter your email" error="This field is required" />
        <FormField label="Password" placeholder="Enter your password" error="Password too short" />
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};
