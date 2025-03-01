import Parallax from './Parallax';

export default {
  title: 'Components/Parallax',
  component: Parallax,
  tags: ['autodocs'],
  argTypes: {
    img: { control: 'text' },
  },
};

export const Default = {
  args: {
    img: '/images/homepage/right-circle.svg',
  },
};

export const CustomImage = {
  args: {
    img: '/images/homepage/alternative-parallax.jpg', // Replace with another image path if available
  },
};