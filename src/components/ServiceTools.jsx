'use client';

import Image from 'next/image';

const ServiceTools = ({ 
  title = "SERVICE TOOLS", 
  heading = "Check out a few of our platforms", 
  img, 
  imgAlt = "Obu Interactive platforms including Google Partner, Google Ads, Facebook Ads, Bing Ads, Instagram Business, Reddit, Quora, YouTube, and Twitter", 
  imgWidth = 1200, 
  imgHeight = 200 
}) => {
  return (
    <div className="bg-gray-200 py-12 px-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-500 text-sm uppercase mb-2">{title}</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">{heading}</h1>
        <div className="flex justify-center">
          <Image 
            src={img}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceTools;