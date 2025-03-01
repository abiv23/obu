import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    logoSrc: { control: 'text' },
    logoAlt: { control: 'text' },
    logoWidth: { control: 'number' },
    logoHeight: { control: 'number' },
    obuTitle: { control: 'text' },
    obuLinks: { control: 'object' },
    contactTitle: { control: 'text' },
    contactInfo: { control: 'object' },
    socialMediaIcons: { control: 'object' },
    socialIconWidth: { control: 'number' },
    socialIconHeight: { control: 'number' },
    locationTitle: { control: 'text' },
    locationLines: { control: 'object' },
    copyrightText: { control: 'text' },
    privacyPolicyLink: { control: 'text' },
  },
};

export const Default = {
  args: {
    logoSrc: '/images/footer/obu-logo.svg',
    logoAlt: 'Obu Interactive Logo',
    logoWidth: 100,
    logoHeight: 50,
    obuTitle: 'Obu',
    obuLinks: ['About', 'Services', 'Careers'],
    contactTitle: 'Contact Us',
    contactInfo: { phone: '619-289-8466', email: 'hello@obuinteractive.com' },
    socialMediaIcons: [
      { src: '/images/footer/social-media-fb.png', alt: 'Facebook' },
      { src: '/images/footer/social-media-ig.png', alt: 'Instagram' },
      { src: '/images/footer/social-media-linkedin.png', alt: 'LinkedIn' },
    ],
    socialIconWidth: 25,
    socialIconHeight: 25,
    locationTitle: 'Location',
    locationLines: ['701 Island Ave', 'Suite 250,', 'San Diego, CA 92101'],
    copyrightText: '© 2025 Obu Interactive LLC. All Rights Reserved.',
    privacyPolicyLink: '/privacy-policy',
  },
};

export const Custom = {
  args: {
    logoSrc: '/images/footer/new-logo.svg', // Replace with another logo path if available
    logoAlt: 'New Company Logo',
    logoWidth: 120,
    logoHeight: 60,
    obuTitle: 'Company',
    obuLinks: ['Home', 'Products', 'Jobs'],
    contactTitle: 'Get in Touch',
    contactInfo: { phone: '555-123-4567', email: 'contact@newcompany.com' },
    socialMediaIcons: [
      { src: '/images/footer/twitter.png', alt: 'Twitter' },
      { src: '/images/footer/instagram.png', alt: 'Instagram' },
    ],
    socialIconWidth: 30,
    socialIconHeight: 30,
    locationTitle: 'Address',
    locationLines: ['123 Main St', 'Suite 100', 'New York, NY 10001'],
    copyrightText: '© 2025 New Company Inc. All Rights Reserved.',
    privacyPolicyLink: '/privacy',
  },
};