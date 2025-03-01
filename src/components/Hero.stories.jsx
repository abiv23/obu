import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    img: { control: 'text' },
    title: { control: 'text' },
    headline: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
  },
};

export const Default = {
  args: {
    img: '/images/homepage/hero-image.jpg',
    title: 'OBU INTERACTIVE | LEGAL MARKETING AGENCY',
    headline: 'Changing lives, one lead at a time.',
    description: 'We are more than just a legal marketing team, we are in the business of helping people. See how we help introduce lawyers to those who need them.',
    buttonText: 'SEE OUR WORK',
  },
};

export const Custom = {
  args: {
    img: '/images/homepage/alternative-hero.jpg', // Replace with another image path if available
    title: 'NEW COMPANY | MARKETING SOLUTIONS',
    headline: 'Transforming businesses, one strategy at a time.',
    description: 'We provide innovative marketing solutions to help companies grow. Discover how we can assist you today.',
    buttonText: 'LEARN MORE',
  },
};