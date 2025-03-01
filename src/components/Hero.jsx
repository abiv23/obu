import Image from 'next/image';
import Button from './Button';

const Hero = ({ 
  img = "/images/homepage/hero-image.jpg", 
  title = "OBU INTERACTIVE | LEGAL MARKETING AGENCY", 
  headline = "Changing lives, one lead at a time.", 
  description = "We are more than just a legal marketing team, we are in the business of helping people. See how we help introduce lawyers to those who need them.", 
  buttonText = "SEE OUR WORK" 
}) => {
  return (
    <div className="hero relative bg-gray-900 text-white max-h-[548px] w-full" style={{ height: '548px', maxHeight: '548px' }}>
      <Image 
        src={img}
        alt="Person in beanie and glasses at an event" 
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-50"
        priority
      />
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center h-full">
        <div className="max-w-md text-left space-y-4 ml-20 py-5">
          <h1 className="font-['Montserrat'] font-bold text-[14px] tracking-[2px] leading-[1.1em] pb-3">
            {title}
          </h1>
          <p className="font-['Montserrat'] font-bold tracking-[2px] leading-[1.1em] text-5xl pb-3">
            {headline}
          </p>
          <p className="font-['Montserrat'] font-bold text-xl">
            {description}
          </p>
          <div className="mt-4">
            <Button>{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;