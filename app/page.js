export const metadata = {
  title: 'Obu Interactive',
  description: 'Marketing for law firms ready to grow.',
};

import TopNav from '../src/components/TopNav';
import Hero from '../src/components/Hero';
import Parallax from '../src/components/Parallax';
import Footer from '../src/components/Footer';
import ImageContentBlock from '../src/components/ImageContentBlock';
import LeadGen from '../src/components/LeadGen';
import HorizontalDivider from '../src/components/HorizontalDivider';
import ServiceTools from '../src/components/ServiceTools';
import Process from '../src/components/Process';
import MaterialContentBlock from '../src/components/MaterialContentBlock';

export default function Home() {
  return (
    <div className="flex flex-col border-4 border-white" style={{ borderWidth: '12px' }}>
      <TopNav />
      <Hero 
        img="/images/homepage/hero-image.jpg"
        title="OBU INTERACTIVE | LEGAL MARKETING AGENCY"
        headline="Changing lives, one lead at a time."
        description="We are more than just a legal marketing team, we are in the business of helping people. See how we help introduce lawyers to those who need them."
        buttonText="SEE OUR WORK"
      />
      <Parallax img="/images/homepage/right-circle.svg" />
      <ImageContentBlock 
        img="/images/homepage/marissa-whiteboard.jpg"
        imgSub="Our Content Strategist, Marissa, sketches out ideas on the whiteboard."
        h1="Who is Obu Interactive?"
        h2="ABOUT"
        body="We’re a San Diego-based legal marketing agency who’s been serving personal injury firms nationwide for over ten years. We connect notable attorneys with people in critical need of legal help. When justice is served, our neighborhoods become safer, negligent manufacturers are held accountable, and injured consumers are empowered. In the end, we all sleep a little better at night."
      />
      <LeadGen 
        img="/images/homepage/customer-circles-background.png"
        title="LEAD GENERATION"
        titleColor="#91949F"
        heading='When was your last <span className=\"text-[#9DB73B]\">qualified</span> lead?' //  this 'dangerously set' html isn't working circle back
        body="Attracting empty leads wastes your time and money. We’ll help put an end to this by designing a strategy that speaks to your perfect client. You’ll get customized marketing based on data and research to target the leads you want while filtering out those you don’t. More cases, less fluff."
        buttonText="GET MORE LEADS"
        imgAlt="People with circles"
        imgWidth={400}
        imgHeight={400}
      />
      <ImageContentBlock 
        img="/images/homepage/vimeo.png" 
        imgLink="https://vimeo.com/311931430"
        h1="Do your clients know how to find you?"
        h2="STRATEGY"
        body="You have a physical address, but what about your online presence? The fact is that nowadays, more and more people find their lawyer online. Not only will we help them find you on the internet, we’ll show them you’re the best attorney for their needs."
        button=""
      />
      <HorizontalDivider />
      <Process 
        title="PROCESS"
        heading="Here’s how it works:"
        steps={[
          {
            iconSrc: "/images/homepage/icon-goal.svg",
            iconAlt: "Tell us your goals icon",
            iconWidth: 150,
            iconHeight: 150,
            stepTitle: "Tell us your goals",
            stepBody: "Let’s start with a simple phone call. We’ll probably ask a lot of questions to help us create the best plan tailored for your firm’s unique goals.",
          },
          {
            iconSrc: "/images/homepage/icon-plan.svg",
            iconAlt: "We execute the plan icon",
            iconWidth: 150,
            iconHeight: 150,
            stepTitle: "We execute the plan",
            stepBody: "We set your strategy in motion, but it doesn’t end there. We’ll also monitor, refine, and optimize your progress to maximize each dollar.",
          },
          {
            iconSrc: "/images/homepage/icon-results.svg",
            iconAlt: "You get real results icon",
            iconWidth: 150,
            iconHeight: 150,
            stepTitle: "You get real results",
            stepBody: "It’s as simple as that. We’ll take care of bringing you leads so you can take care of your clients. You’ll also receive progress reports.",
          },
        ]}
        arrowSrc="/images/homepage/arrow-right.png"
        arrowAlt="Arrow right"
        arrowWidth={50}
        arrowHeight={50}
      />
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
      <ServiceTools 
        title="SERVICE TOOLS"
        heading="Check out a few of our platforms"
        img="/images/homepage/platforms.webp"
        imgAlt="Obu Interactive platforms including Google Partner, Google Ads, Facebook Ads, Bing Ads, Instagram Business, Reddit, Quora, YouTube, and Twitter"
        imgWidth={1200}
        imgHeight={200}
      />
      <Footer 
        logoSrc="/images/footer/obu-logo.svg"
        logoAlt="Obu Interactive Logo"
        logoWidth={100}
        logoHeight={50}
        obuTitle="Obu"
        obuLinks={["About", "Services", "Careers"]}
        contactTitle="Contact Us"
        contactInfo={{ phone: "619-289-8466", email: "hello@obuinteractive.com" }}
        socialMediaIcons={[
          { src: "/images/footer/social-media-fb.png", alt: "Facebook" },
          { src: "/images/footer/social-media-ig.png", alt: "Instagram" },
          { src: "/images/footer/social-media-linkedin.png", alt: "LinkedIn" },
        ]}
        socialIconWidth={25}
        socialIconHeight={25}
        locationTitle="Location"
        locationLines={["701 Island Ave", "Suite 250,", "San Diego, CA 92101"]}
        copyrightText="© 2025 Obu Interactive LLC. All Rights Reserved."
        privacyPolicyLink="/privacy-policy"
      />
    </div>
  );
}