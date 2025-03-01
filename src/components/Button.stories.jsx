import Button from './Button';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    onClick: { action: 'clicked' }, // Use action for testing clicks
    className: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'Click Me',
    href: '/#',
    onClick: fn(), // Use fn for mock function
    className: '',
  },
};

export const WithCustomClass = {
  args: {
    children: 'Custom Button',
    href: '/about',
    onClick: fn(),
    className: 'bg-blue-500 hover:bg-blue-600 text-white',
  },
};

export const WithOnClick = {
  args: {
    children: 'Click Handler',
    href: '/#',
    onClick: fn(), // Use fn for mock function
    className: '',
  },
};