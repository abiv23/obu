import Image from 'next/image';

const ServiceTools = ({ img }) => {
  return (
    <div className="bg-gray-200 py-12 px-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-500 text-sm uppercase mb-2">SERVICE TOOLS</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Check out a few of our platforms</h1>
        <div className="flex justify-center">
          <Image 
            src={img}
            alt="Obu Interactive platforms including Google Partner, Google Ads, Facebook Ads, Bing Ads, Instagram Business, Reddit, Quora, YouTube, and Twitter"
            width={1200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceTools;