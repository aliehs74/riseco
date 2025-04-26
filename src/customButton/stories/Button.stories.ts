import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CustomButton from '../CustomButton.tsx';

const meta = {
  title: 'CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
  args: { onClick: fn() },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};
export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Button',
  },
};
export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};
