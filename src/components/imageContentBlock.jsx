import Image from 'next/image';
import Link from 'next/link';

import Button from './Button'

const ImageContentBlock = ({ img, imgLink = false, imgSub, button = false , h1, h2, body }) => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Image on the left */}
      <div className="w-full md:w-1/2">
        {imgLink ? (
          <>
            <Link href={imgLink} target="_blank" rel="noopener noreferrer">
              <Image 
                src={img}
                alt="Our Content Strategist, Marissa, sketches out ideas on the whiteboard"
                width={600} // Adjust size as needed
                height={400} // Adjust size as needed
                className="object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </>
        ) : (
          <Image 
            src={img}
            alt="Our Content Strategist, Marissa, sketches out ideas on the whiteboard"
            width={600} // Adjust size as needed
            height={400} // Adjust size as needed
            className="object-cover rounded-lg shadow-md"
          />
        )}
        <p className="text-gray-500 text-sm mt-2 text-center">{imgSub}</p>
      </div>

      {/* Text content on the right */}
      <div className="w-full md:w-1/2">
        <div className="text-gray-800">
          <h2 className="pb-10 text-light-grey text-uppercase text-[15px]">{h2}</h2>
          <h1 className="text-2xl font-bold mb-4 text-[40px]">{h1}</h1>
          <p className="text-lg leading-relaxed">{body}</p>
          {button ? (
            <Button>
              {button}
            </Button>
            ) : (<></>)
          }
        </div>
      </div>
    </div>
  );
};

export default ImageContentBlock;