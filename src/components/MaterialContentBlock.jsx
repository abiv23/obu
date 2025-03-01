'use client';

import Image from 'next/image';
import Button from './Button'; // Assuming you have the Button component from previous steps

const MaterialContentBlock = ({ 
  title, 
  heading, 
  paragraph,
  icons,
  buttonText,
  buttonClass
}) => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <div className="bg-white shadow-2xl rounded-lg p-6 border border-gray-100 transform hover:scale-102 transition-transform duration-300">
          <div className="text-center">
            <p className="text-gray-500 text-sm uppercase mb-2">{title}</p>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{heading}</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">{paragraph}</p>

            {/* Service icons and text */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {icons.map((service, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image 
                    src={service.icon} // Dynamic icon path from props
                    alt={`${service.label} icon`}
                    width={100} // Adjust size as needed to match your image dimensions
                    height={100} // Adjust size as needed to match your image dimensions
                  />
                  <p className="text-gray-800 text-lg font-bold mt-4">{service.label}</p>
                </div>
              ))}
            </div>

            <Button>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialContentBlock;