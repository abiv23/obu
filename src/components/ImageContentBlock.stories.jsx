import ImageContentBlock from './ImageContentBlock';
import Button from './Button';

export default {
  title: 'Components/ImageContentBlock',
  component: ImageContentBlock,
  tags: ['autodocs'],
  argTypes: {
    img: { control: 'text' },
    imgLink: { control: 'text' },
    imgSub: { control: 'text' },
    button: { control: 'text' },
    h1: { control: 'text' },
    h2: { control: 'text' },
    body: { control: 'text' },
  },
};

export const Default = {
  args: {
    img: '/images/homepage/marissa-whiteboard.jpg',
    imgLink: false,
    imgSub: 'Our Content Strategist, Marissa, sketches out ideas on the whiteboard.',
    button: false,
    h1: 'Who is Obu Interactive?',
    h2: 'ABOUT',
    body: 'We’re a San Diego-based legal marketing agency who’s been serving personal injury firms nationwide for over ten years. We connect notable attorneys with people in critical need of legal help. When justice is served, our neighborhoods become safer, negligent manufacturers are held accountable, and injured consumers are empowered. In the end, we all sleep a little better at night.',
  },
};

export const WithLink = {
  args: {
    img: '/images/homepage/vimeo.png',
    imgLink: 'https://vimeo.com/311931430',
    imgSub: 'Video thumbnail for Obu Interactive strategy',
    button: 'LEARN MORE',
    h1: 'Do your clients know how to find you?',
    h2: 'STRATEGY',
    body: 'You have a physical address, but what about your online presence? The fact is that nowadays, more and more people find their lawyer online. Not only will we help them find you on the internet, we’ll show them you’re the best attorney for their needs.',
  },
};

export const Custom = {
  args: {
    img: '/images/homepage/alternative-image.jpg', // Replace with another image path if available
    imgLink: 'https://example.com',
    imgSub: 'Custom image subtitle',
    button: 'EXPLORE NOW',
    h1: 'Explore Our Services',
    h2: 'FEATURES',
    body: 'Discover how our innovative solutions can transform your business. Contact us to learn more about our offerings and how we can help you grow.',
  },
};