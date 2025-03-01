/** @type { import('@storybook/nextjs').Preview } */
import '../app/globals.css'; // Import Tailwind CSS or global styles

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;