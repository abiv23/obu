import HorizontalDivider from './HorizontalDivider';

export default {
  title: 'Components/HorizontalDivider',
  component: HorizontalDivider,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    color: { control: 'color' },
    position: { control: 'text' },
  },
};

export const Default = {
  args: {
    width: 'auto',
    height: 'h-px',
    color: 'bg-gray-300',
    position: 'left-0 bottom-0',
  },
};

export const ThickLine = {
  args: {
    width: 'auto',
    height: 'h-2',
    color: 'bg-gray-400',
    position: 'top-0 left-0',
  },
};

export const CustomColor = {
  args: {
    width: 'auto',
    height: 'h-px',
    color: 'bg-blue-500',
    position: 'left-4 top-1/2 transform -translate-y-1/2',
  },
};