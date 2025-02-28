export const metadata = {
  title: 'Obu Interactive',
  description: 'Marketing for law firms ready to grow.',
};

import Hero from '../src/components/Hero';
import Parallax from '../src/components/Parallax';
import Footer from '../src/components/Footer';
import ImageContentBlock from '../src/components/imageContentBlock';
import LeadGen from '../src/components/LeadGen'
import HorizontalDivider from '../src/components/HorizontalDivider';
import ServiceTools from '../src/components/ServiceTools';
import Process from '../src/components/Process';
import MaterialContentBlock from '../src/components/MaterialContentBlock';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero img="/images/homepage/hero-image.jpg" />
      <Parallax img="/images/homepage/right-circle.svg" />
      <ImageContentBlock 
        img="/images/homepage/marissa-whiteboard.jpg"
        imgSub="Our Content Strategist, Marissa, sketches out ideas on the whiteboard."
        h1="Who is Obu Interactive?"
        h2="ABOUT"
        body="We’re a San Diego-based legal marketing agency who’s been serving personal injury firms nationwide 
            for over ten years. We connect notable attorneys with people in critical need of legal help. When justice is served, 
            our neighborhoods become safer, negligent manufacturers are held accountable, and injured consumers are empowered. 
            In the end, we all sleep a little better at night."
      />
      <LeadGen img="/images/homepage/customer-circles-background.png" />
      <ImageContentBlock 
        img="/images/homepage/vimeo.png" 
        imgLink="https://vimeo.com/311931430"
        h1="Do your clients know how to find you?"
        h2="STRATEGY"
        body="You have a physical address, but what about your online presence? 
                The fact is that nowadays, more and more people find their lawyer online. 
                Not only will we help them find you on the internet, we’ll show them you’re 
                the best attorney for their needs."
        button=""
      />
      <HorizontalDivider />
      <Process />
      <MaterialContentBlock 
        title="SERVICES"
        heading="How can we serve your firm?"
        paragraph="From data analytics to website design, we’ve got you covered. If you’re not sure what you’re looking for, simply reach out to us and we’ll be happy to discuss your firm’s needs."
        buttonText="SEE OUR SERVICES"
        icons={[
          { icon: "/images/homepage/icon-bullhorn.svg", label: "ONLINE ADVERTISING" },
          { icon: "/images/homepage/icon-graph.svg", label: "SEARCH ENGINE OPTIMIZATION (SEO)" },
          { icon: "/images/homepage/icon-serving-content.svg", label: "CONTENT MARKETING" },
          { icon: "/images/homepage/icon-spidey-sense.svg", label: "LEAD GENERATION (PPC)" },
          { icon: "/images/homepage/icon-magnifying.svg", label: "SOCIAL MEDIA ADVERTISING" },
        ]}
      />
      <ServiceTools img="/images/homepage/platforms.webp"/>
      <Footer />
    </div>
  );
}