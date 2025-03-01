import LeadGen from './LeadGen';
import Button from './Button';

export default {
  title: 'Components/LeadGen',
  component: LeadGen,
  tags: ['autodocs'],
  argTypes: {
    img: { control: 'text' },
  },
};

export const Default = {
  args: {
    img: '/images/homepage/customer-circles-background.png',
  },
};

export const CustomImage = {
  args: {
    img: '/images/homepage/alternative-circles.jpg', // Replace with another image path if available
  },
};