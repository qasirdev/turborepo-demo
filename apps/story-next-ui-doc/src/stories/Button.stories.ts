import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './Button';
import { Button } from '@repo/ui/button';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    className: "text-1xl bg-blue-400 font-bold p-3 rounded-md",
    children: 'Click me',
    appName: 'storybook'
  },
};

export const Secondary: Story = {
  args: {
    className: "text-1xl bg-green-400 font-bold p-3 rounded-md",
    children: 'Click me',
    appName: 'storybook'
  },
};

export const Large: Story = {
  args: {
    className: "text-2xl bg-green-400 font-bold p-3 rounded-md",
    children: 'Click me',
    appName: 'storybook'
  },
};

export const Small: Story = {
  args: {
    className: "text-2xm bg-green-400 font-bold p-3 rounded-md",
    children: 'Click me',
    appName: 'storybook'
  },
};
