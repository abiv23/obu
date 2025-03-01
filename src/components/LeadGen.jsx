import Image from 'next/image';
import Button from './Button';

const LeadGen = ({ 
  img, 
  title = "LEAD GENERATION", 
  titleColor = "#91949F", 
  heading = "When was your last <span className=\"text-[#9DB73B]\">qualified</span> lead?", 
  body = "Attracting empty leads wastes your time and money. We’ll help put an end to this by designing a strategy that speaks to your perfect client. You’ll get customized marketing based on data and research to target the leads you want while filtering out those you don’t. More cases, less fluff.", 
  buttonText = "GET MORE LEADS",
  imgAlt = "People with circles",
  imgWidth = 400,
  imgHeight = 400
}) => {
  return (
    <div className="relative flex justify-center items-center w-full h-[600px] bg-[url('/images/homepage/computer-chip-background.svg')] bg-cover" style={{ backgroundColor: '#2B313F' }}>
      <div className="absolute inset-0" style={{ backgroundImage: `url('/images/homepage/computer-chip-background.svg')`, backgroundSize: 'cover', opacity: 0.25 }}></div>
      <div className="container relative text-white w-[400px] mr-8">
        <p className={`text-sm uppercase`} style={{ color: titleColor }}>{title}</p>
        {heading.includes('<span') ? (
          <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: heading }}></h1>
        ) : (
          <h1 className="text-4xl font-bold mb-4">{heading}</h1>
        )}
        <p className="text-lg max-w-2xl mb-8">{body}</p>
        
        <Button>{buttonText}</Button>
      </div>
      <div>
        <Image 
          src={img}
          alt={imgAlt}
          width={imgWidth} // Adjust size as needed to match your single image dimensions
          height={imgHeight} // Adjust size as needed to match your single image dimensions
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LeadGen;