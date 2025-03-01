# Obu Interactive - Legal Marketing Agency Website

## Overview

Obu Interactive is a Next.js-based website for a legal marketing agency, designed to showcase services, processes, and lead generation strategies for law firms. Built with modern web technologies, this project leverages server-side rendering (SSR) for speed, Tailwind CSS for styling, and Storybook for component documentation and testing. The goal is to create a fast, reusable, component-based architecture for rebuilding Obu Interactive’s websites, streamlining their design process, and positioning the developer as a valuable asset for their digital transformation.

## Features

- **Server-Side Rendering (SSR)**: Powered by Next.js 14.2.24 for fast, SEO-friendly pages.
- **Responsive Design**: Utilizes Tailwind CSS v3.4.17 for a utility-first, responsive layout.
- **Component-Based Architecture**: Reusable components (e.g., `Hero`, `Parallax`, `ImageContentBlock`, `LeadGen`, etc.) documented with Storybook 8.6.3.
- **Dynamic Content**: Components accept dynamic props for text, images, and videos, enhancing reusability.
- **Playwright Testing**: Integrated for end-to-end testing of the application.
- **Legal Marketing Focus**: Highlights Obu Interactive’s mission to connect lawyers with people in need, featuring lead generation, SEO, and more.

## Prerequisites

- Node.js 18.17.0 or later
- npm 9.6.7 or later
- Git (optional, for version control)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/abiv23/obu-interactive.git
   cd obu-interactive

2. **Install Dependencies**:
   ```bash
   npm install

3. **Verify Dependencies**:
   Ensure the following packages are installed (check `package.json`):
   - `next@14.2.24`
   - `react@18.3.1`
   - `react-dom@18.3.1`
   - `tailwindcss@3.4.17`
   - `@storybook/nextjs@8.6.3`
   - `react-player@2.16.0`
   - `playwright@1.50.1`

## Usage

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open your browser to http://localhost:3000 to view the website.

# Project Structure

obu-interactive/
├── app/
│   ├── globals.css        # Tailwind CSS and global styles
│   ├── layout.jsx         # Layout component for the app
│   └── page.jsx           # Homepage with all components
├── src/components/        # Reusable components
│   ├── Button.jsx         # Reusable button component
│   ├── CallToActionBlock.jsx # Call-to-action section
│   ├── Footer.jsx         # Footer with logo, links, and contact info
│   ├── Hero.jsx           # Hero section with image and text
│   ├── HorizontalDivider.jsx # Horizontal divider line
│   ├── ImageContentBlock.jsx # Image and text block
│   ├── LeadGen.jsx        # Lead generation section
│   ├── MaterialContentBlock.jsx # Services section with material design
│   ├── Parallax.jsx       # Parallax effect section
│   ├── Process.jsx        # Process steps section
│   ├── ServiceTools.jsx   # Service platforms section
│   ├── TestimonialBlock.jsx # Client testimonials section
│   └── VideoContentBlock.jsx # Video and text block
├── public/                # Static assets (images, SVGs, etc.)
│   ├── images/            # Images for components
│   └── favicon.ico        # Favicon
├── .storybook/            # Storybook configuration
│   ├── main.js            # Storybook configuration
│   └── preview.js         # Storybook preview setup
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration (if using TypeScript)
└── README.md              # This file

# Key Components

* Hero: Displays a hero image with a title, description, and call-to-action button.
* Parallax: Features a parallax effect with an image and mission statement.
* ImageContentBlock: Shows an image on the left and text on the right, optionally with a link or button.
* LeadGen: Highlights lead generation with an image and text, including a call-to-action.
* VideoContentBlock: Embeds a Vimeo video on the left and text on the right with a button.
* Process: Outlines a three-step process with icons, text, and arrows.
* ServiceTools: Displays a list of service platforms with a single image.
* MaterialContentBlock: Presents services in a material design-style paper layout.
* TestimonialBlock: Showcases client testimonials with images and quotes.
* CallToActionBlock: Offers a bold call-to-action section with a button.
* Footer: Includes logo, navigation, contact info, social media links, and copyright.
* HorizontalDivider: A horizontal line for layout separation.
Button: A reusable button component with customizable styling.

## Styling

- **Tailwind CSS**: Utilizes utility-first classes for responsive, consistent styling.
- **Custom Colors**: Defined in `tailwind.config.js` (e.g., `custom-green: '#9AB948'`).
- **Fonts**: Uses `Open Sans` and `Montserrat` from Google Fonts, configured in `app/globals.css`.

## Testing

- **Storybook**: Documents and tests components in isolation at `http://localhost:6006`.
- **Playwright**: Performs end-to-end tests for the application.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature