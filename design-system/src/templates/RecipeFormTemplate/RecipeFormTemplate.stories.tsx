import type { Meta, StoryObj } from '@storybook/react';
import { RecipeFormTemplate } from './RecipeFormTemplate';
import { FormField } from '../../molecules/FormField/FormField';

const meta: Meta<typeof RecipeFormTemplate> = {
  title: 'Templates/RecipeFormTemplate',
  component: RecipeFormTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RecipeFormTemplate>;

export const Default: Story = {
  args: {
    header: {
      title: 'New Recipe',
      leftActions: [
        {
          icon: 'arrow-left',
          onPress: () => {
             
            console.log('Cancel');
          },
        },
      ],
      rightActions: [
        {
          icon: 'save',
          onPress: () => {
             
            console.log('Save');
          },
        },
      ],
    },
    infoSection: {
      title: 'Recipe Information',
      children: (
        <>
          <FormField label="Recipe Name" placeholder="Enter recipe name" required />
          <FormField label="Description" placeholder="Enter description" />
          <FormField label="Preparation Time" placeholder="Minutes" />
          <FormField label="Cooking Time" placeholder="Minutes" />
        </>
      ),
    },
    ingredientsSection: {
      title: 'Ingredients',
      children: (
        <>
          <FormField label="Ingredient 1" placeholder="Name" />
          <FormField label="Quantity" placeholder="Amount" />
          <FormField label="Unit" placeholder="g, ml, etc." />
        </>
      ),
    },
    stepsSection: {
      title: 'Steps',
      children: (
        <>
          <FormField label="Step 1" placeholder="Enter instruction" />
          <FormField label="Duration (optional)" placeholder="Minutes" />
        </>
      ),
    },
    actions: [
      {
        label: 'Cancel',
        onPress: () => {
           
          console.log('Cancel');
        },
      },
      {
        label: 'Save',
        onPress: () => {
           
          console.log('Save');
        },
      },
    ],
  },
};

export const WithErrors: Story = {
  args: {
    header: {
      title: 'Edit Recipe',
      leftActions: [
        {
          icon: 'arrow-left',
          onPress: () => {
             
            console.log('Cancel');
          },
        },
      ],
    },
    infoSection: {
      title: 'Recipe Information',
      children: (
        <>
          <FormField label="Recipe Name" placeholder="Enter recipe name" required error="This field is required" />
          <FormField label="Description" placeholder="Enter description" />
        </>
      ),
    },
    ingredientsSection: {
      title: 'Ingredients',
      children: (
        <>
          <FormField label="Ingredient" placeholder="Name" />
        </>
      ),
    },
    stepsSection: {
      title: 'Steps',
      children: (
        <>
          <FormField label="Step" placeholder="Enter instruction" />
        </>
      ),
    },
    actions: [
      {
        label: 'Delete',
        onPress: () => {
           
          console.log('Delete');
        },
        disabled: true,
      },
      {
        label: 'Save',
        onPress: () => {
           
          console.log('Save');
        },
      },
    ],
  },
};
