import ServiceTools from './ServiceTools';

export default {
  title: 'Components/ServiceTools',
  component: ServiceTools,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    heading: { control: 'text' },
    img: { control: 'text' },
    imgAlt: { control: 'text' },
    imgWidth: { control: 'number' },
    imgHeight: { control: 'number' },
  },
};

export const Default = {
  args: {
    title: 'SERVICE TOOLS',
    heading: 'Check out a few of our platforms',
    img: '/images/homepage/platforms.webp',
    imgAlt: 'Obu Interactive platforms including Google Partner, Google Ads, Facebook Ads, Bing Ads, Instagram Business, Reddit, Quora, YouTube, and Twitter',
    imgWidth: 1200,
    imgHeight: 200,
  },
};

export const CustomTools = {
  args: {
    title: 'PLATFORM TOOLS',
    heading: 'Explore our digital solutions',
    img: '/images/homepage/alternative-platforms.jpg', // Replace with another image path if available
    imgAlt: 'Alternative platforms including custom tools and integrations',
    imgWidth: 1000,
    imgHeight: 180,
  },
};