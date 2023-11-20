import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../components/Button/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    rounded: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning'] },
    onClick: { action: 'clicked' },
  },
  args: { backgroundColor: 'primary' }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};

export const Primary: Story = {
  args: {
    label: 'Button',
    backgroundColor: 'primary',
  },
};