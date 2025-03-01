import VideoContentBlock from './VideoContentBlock';
import Button from './Button';

export default {
  title: 'Components/VideoContentBlock',
  component: VideoContentBlock,
  tags: ['autodocs'],
  argTypes: {
    video: { control: 'text' },
    subtitle: { control: 'text' },
    title: { control: 'text' },
    body: { control: 'text' },
    buttonText: { control: 'text' },
    playerWidth: { control: 'text' },
    playerHeight: { control: 'text' },
    playerControls: { control: 'boolean' },
    playerPlaying: { control: 'boolean' },
    playerLoop: { control: 'boolean' },
    playerMuted: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    video: 'https://vimeo.com/311931430',
    subtitle: 'STRATEGY',
    title: 'Do your clients know how to find you?',
    body: 'You have a physical address, but what about your online presence? The fact is that nowadays, more and more people find their lawyer online. Not only will we help them find you on the internet, we’ll show them you’re the best attorney for their needs.',
    buttonText: 'BETTER RETURN ON ADVERTISING BUDGET',
    playerWidth: '100%',
    playerHeight: '100%',
    playerControls: true,
    playerPlaying: false,
    playerLoop: false,
    playerMuted: false,
  },
};

export const CustomVideo = {
  args: {
    video: 'https://vimeo.com/123456789', // Replace with another Vimeo video URL if available
    subtitle: 'INNOVATION',
    title: 'Discover Our New Approach',
    body: 'Learn how our innovative strategies can transform your business and drive results. Watch this video to see the impact we can make for you.',
    buttonText: 'LEARN MORE',
    playerWidth: '80%',
    playerHeight: '400px',
    playerControls: true,
    playerPlaying: true,
    playerLoop: true,
    playerMuted: true,
  },
};