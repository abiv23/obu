// src/lib/builder.js
import { builder } from '@builder.io/sdk';
import Hero from '../components/Hero';
import TopNav from '../components/TopNav';
import LeadGen from '../components/LeadGen';
import Parallax from '../components/Parallax';
import Footer from '../components/Footer';
import ImageContentBlock from '../components/ImageContentBlock';
import HorizontalDivider from '../components/HorizontalDivider';
import Process from '../components/Process';
import MaterialContentBlock from '../components/MaterialContentBlock';
import ServiceTools from '../components/ServiceTools';
// Import other components as needed

// Initialize Builder.io with the environment variable
builder.init(process.env.BUILDER_API_KEY || '');

// Register your components
builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'img', type: 'file', allowedFileTypes: ['jpeg', 'png', 'webp'] },
    { name: 'title', type: 'text' },
    { name: 'headline', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'buttonText', type: 'text' },
  ],
});

builder.registerComponent(TopNav, {
  name: 'TopNav',
  inputs: [], // No inputs if stateless
});

builder.registerComponent(LeadGen, {
  name: 'LeadGen',
  inputs: [
    { name: 'img', type: 'file', allowedFileTypes: ['jpeg', 'png', 'webp'] },
    { name: 'title', type: 'text' },
    { name: 'titleColor', type: 'text' },
    { name: 'heading', type: 'html' }, // Use 'html' for dangerouslySetInnerHTML support
    { name: 'body', type: 'text' },
    { name: 'buttonText', type: 'text' },
    { name: 'imgAlt', type: 'text' },
    { name: 'imgWidth', type: 'number' },
    { name: 'imgHeight', type: 'number' },
  ],
});

builder.registerComponent(Parallax, {
  name: 'Parallax',
  inputs: [
    { name: 'img', type: 'file', allowedFileTypes: ['jpeg', 'png', 'svg', 'webp'] },
  ],
});

builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [
    { name: 'logoSrc', type: 'file', allowedFileTypes: ['svg', 'png', 'webp'] },
    { name: 'logoAlt', type: 'text' },
    { name: 'logoWidth', type: 'number' },
    { name: 'logoHeight', type: 'number' },
    { name: 'obuTitle', type: 'text' },
    { name: 'obuLinks', type: 'list', subFields: [{ name: 'link', type: 'text' }] },
    { name: 'contactTitle', type: 'text' },
    { name: 'contactInfo', type: 'object', subFields: [
      { name: 'phone', type: 'text' },
      { name: 'email', type: 'text' },
    ]},
    { name: 'socialMediaIcons', type: 'list', subFields: [
      { name: 'src', type: 'file', allowedFileTypes: ['png', 'webp'] },
      { name: 'alt', type: 'text' },
    ]},
    { name: 'socialIconWidth', type: 'number' },
    { name: 'socialIconHeight', type: 'number' },
    { name: 'locationTitle', type: 'text' },
    { name: 'locationLines', type: 'list', subFields: [{ name: 'line', type: 'text' }] },
    { name: 'copyrightText', type: 'text' },
    { name: 'privacyPolicyLink', type: 'text' },
  ],
});

builder.registerComponent(ImageContentBlock, {
  name: 'ImageContentBlock',
  inputs: [
    { name: 'img', type: 'file', allowedFileTypes: ['jpeg', 'png', 'webp'] },
    { name: 'imgLink', type: 'text' },
    { name: 'imgSub', type: 'text' },
    { name: 'button', type: 'text' },
    { name: 'h1', type: 'text' },
    { name: 'h2', type: 'text' },
    { name: 'body', type: 'text' },
  ],
});

builder.registerComponent(HorizontalDivider, {
  name: 'HorizontalDivider',
  inputs: [], // No inputs if stateless
});

builder.registerComponent(Process, {
  name: 'Process',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'steps', type: 'list', subFields: [
      { name: 'iconSrc', type: 'file', allowedFileTypes: ['svg', 'png', 'webp'] },
      { name: 'iconAlt', type: 'text' },
      { name: 'iconWidth', type: 'number' },
      { name: 'iconHeight', type: 'number' },
      { name: 'stepTitle', type: 'text' },
      { name: 'stepBody', type: 'text' },
    ]},
    { name: 'arrowSrc', type: 'file', allowedFileTypes: ['png', 'webp'] },
    { name: 'arrowAlt', type: 'text' },
    { name: 'arrowWidth', type: 'number' },
    { name: 'arrowHeight', type: 'number' },
  ],
});

builder.registerComponent(MaterialContentBlock, {
  name: 'MaterialContentBlock',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'paragraph', type: 'text' },
    { name: 'buttonText', type: 'text' },
    { name: 'icons', type: 'list', subFields: [
      { name: 'icon', type: 'file', allowedFileTypes: ['svg', 'png', 'webp'] },
      { name: 'label', type: 'text' },
    ]},
  ],
});

builder.registerComponent(ServiceTools, {
  name: 'ServiceTools',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'img', type: 'file', allowedFileTypes: ['webp', 'png', 'jpeg'] },
    { name: 'imgAlt', type: 'text' },
    { name: 'imgWidth', type: 'number' },
    { name: 'imgHeight', type: 'number' },
  ],
});

export { builder };