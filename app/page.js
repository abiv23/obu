export const metadata = {
  title: 'Obu Interactive',
  description: 'Marketing for law firms ready to grow.',
};

import Hero from '../src/components/Hero';
import Parallax from '../src/components/Parallax';
import Footer from '../src/components/Footer';
import ImageContentBlock from '../src/components/imageContentBlock';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero img="/images/homepage/hero-image.jpg" />
      <Parallax img="/images/homepage/right-circle.svg" />
      <ImageContentBlock img="/images/homepage/marissa-whiteboard.jpg" />
      <Footer />
    </div>
  );
}