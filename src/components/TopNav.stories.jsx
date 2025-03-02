import TopNav from './TopNav';
import Button from './Button';

// Mock Image component for Storybook
const MockImage = ({ src, alt, width, height, className }) => (
  <img src={src} alt={alt} width={width} height={height} className={className} />
);

// Mock Link component for Storybook
const MockLink = ({ href, children, className }) => (
  <a href={href} className={className}>{children}</a>
);

export default {
  title: 'Components/TopNav',
  component: TopNav,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '200vh', paddingTop: '100px' }}>
        {/* Add extra height to simulate scrolling */}
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen', // Fullscreen layout to simulate real page behavior
    viewport: { defaultViewport: 'desktop' }, // Default to desktop, but test mobile
  },
  argTypes: {
    // No args needed since TopNav is stateless but reactive to scroll
  },
};

export const Default = {
  render: () => (
    <TopNav />
  ),
  parameters: {
    // Simulate scroll behavior in Storybook by manually triggering state
    // Note: Scroll behavior is handled by useEffect in TopNav, so we wrap in a decorator
    chromatic: { disableSnapshot: true }, // Disable Chromatic snapshots for dynamic scroll
  },
  decorators: [
    (Story) => {
      jest.mock('next/image', () => MockImage);
      jest.mock('next/link', () => MockLink);
      return <Story />;
    },
  ],
};

// Add a mobile viewport story to test responsiveness
export const Mobile = {
  render: () => (
    <TopNav />
  ),
  parameters: {
    viewport: { defaultViewport: 'mobile1' }, // Use Storybook's mobile viewport
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    (Story) => {
      jest.mock('next/image', () => MockImage);
      jest.mock('next/link', () => MockLink);
      return <Story />;
    },
  ],
};