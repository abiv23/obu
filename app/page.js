export const metadata = {
  title: 'Obu Interactive',
  description: 'Marketing for law firms ready to grow.',
};

import Hero from '../src/components/Hero';
import Parallax from '../src/components/Parallax';
import Footer from '../src/components/Footer';
import ImageContentBlock from '../src/components/imageContentBlock';
import LeadGen from '../src/components/LeadGen'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero img="/images/homepage/hero-image.jpg" />
      <Parallax img="/images/homepage/right-circle.svg" />
      <ImageContentBlock img="/images/homepage/marissa-whiteboard.jpg" />
      <LeadGen img="/images/homepage/customer-circles-background.png" />
      <Footer />
    </div>
  );
}