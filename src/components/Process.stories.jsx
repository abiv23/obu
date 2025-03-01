import Process from './Process';

export default {
  title: 'Components/Process',
  component: Process,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    heading: { control: 'text' },
    steps: { control: 'object' },
    arrowSrc: { control: 'text' },
    arrowAlt: { control: 'text' },
    arrowWidth: { control: 'number' },
    arrowHeight: { control: 'number' },
  },
};

export const Default = {
  args: {
    title: 'PROCESS',
    heading: 'Here’s how it works:',
    steps: [
      {
        iconSrc: '/images/homepage/icon-goal.svg',
        iconAlt: 'Tell us your goals icon',
        iconWidth: 150,
        iconHeight: 150,
        stepTitle: 'Tell us your goals',
        stepBody: 'Let’s start with a simple phone call. We’ll probably ask a lot of questions to help us create the best plan tailored for your firm’s unique goals.',
      },
      {
        iconSrc: '/images/homepage/icon-plan.svg',
        iconAlt: 'We execute the plan icon',
        iconWidth: 150,
        iconHeight: 150,
        stepTitle: 'We execute the plan',
        stepBody: 'We set your strategy in motion, but it doesn’t end there. We’ll also monitor, refine, and optimize your progress to maximize each dollar.',
      },
      {
        iconSrc: '/images/homepage/icon-results.svg',
        iconAlt: 'You get real results icon',
        iconWidth: 150,
        iconHeight: 150,
        stepTitle: 'You get real results',
        stepBody: 'It’s as simple as that. We’ll take care of bringing you leads so you can take care of your clients. You’ll also receive progress reports.',
      },
    ],
    arrowSrc: '/images/homepage/arrow-right.png',
    arrowAlt: 'Arrow right',
    arrowWidth: 50,
    arrowHeight: 50,
  },
};

export const CustomProcess = {
  args: {
    title: 'STEPS',
    heading: 'Our Workflow:',
    steps: [
      {
        iconSrc: '/images/homepage/custom-icon1.svg', // Replace with another icon path if available
        iconAlt: 'Step 1 icon',
        iconWidth: 120,
        iconHeight: 120,
        stepTitle: 'Define Objectives',
        stepBody: 'We start by understanding your goals through a detailed consultation.',
      },
      {
        iconSrc: '/images/homepage/custom-icon2.svg', // Replace with another icon path if available
        iconAlt: 'Step 2 icon',
        iconWidth: 120,
        iconHeight: 120,
        stepTitle: 'Implement Strategy',
        stepBody: 'Our team executes a tailored plan to achieve your objectives efficiently.',
      },
      {
        iconSrc: '/images/homepage/custom-icon3.svg', // Replace with another icon path if available
        iconAlt: 'Step 3 icon',
        iconWidth: 120,
        iconHeight: 120,
        stepTitle: 'Deliver Results',
        stepBody: 'We ensure measurable outcomes and provide regular updates on progress.',
      },
    ],
    arrowSrc: '/images/homepage/custom-arrow.png', // Replace with another arrow path if available
    arrowAlt: 'Custom arrow',
    arrowWidth: 60,
    arrowHeight: 60,
  },
};