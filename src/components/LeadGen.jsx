import Image from 'next/image';
import Button from './Button';

const LeadGen = ({ img }) => {
  return (
    <div className="relative flex justify-center items-center w-full h-[600px] bg-[url('/images/homepage/computer-chip-background.svg')] bg-cover" style={{ backgroundColor: '#2B313F' }}>
      <div className="absolute inset-0" style={{ backgroundImage: `url('/images/homepage/computer-chip-background.svg')`, backgroundSize: 'cover', opacity: 0.25 }}></div>
      <div className="container relative text-white w-[400px] mr-8">
        <p className="text-sm uppercase text-[#91949f]">LEAD GENERATION</p>
        <h1 className="text-4xl font-bold mb-4">When was your last <span className="text-[#9db73b]">qualified</span> lead?</h1>
        <p className="text-lg max-w-2xl mb-8">
          Attracting empty leads wastes your time and money. We’ll help put an end to this by designing a strategy that speaks to your perfect client. You’ll get customized marketing based on data and research to target the leads you want while filtering out those you don’t. More cases, less fluff.
        </p>
        
        <Button>
          GET MORE LEADS
        </Button>
        </div>
        <div>
            <Image 
                src={img}
                alt="People with circles"
                width={400} // Adjust size as needed to match your single image dimensions
                height={400} // Adjust size as needed to match your single image dimensions
                className="object-contain"
            />
        </div>
    </div>
  );
};

export default LeadGen;