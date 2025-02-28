import Image from 'next/image';

const ImageContentBlock = ({img}) => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Image on the left */}
      <div className="w-full md:w-1/2">
        <Image 
          src={img}
          alt="Our Content Strategist, Marissa, sketches out ideas on the whiteboard"
          width={600} // Adjust size as needed
          height={400} // Adjust size as needed
          className="object-cover rounded-lg shadow-md"
        />
        <p className="text-gray-500 text-sm mt-2 text-center">Our Content Strategist, Marissa, sketches out ideas on the whiteboard.</p>
      </div>

      {/* Text content on the right */}
      <div className="w-full md:w-1/2">
        <div className="text-gray-800">
          <h2 className="pb-10 text-light-grey text-uppercase">ABOUT</h2>
          <h1 className="text-2xl font-bold mb-4">Who is Obu Interactive?</h1>
          <p className="text-lg leading-relaxed">
            We’re a San Diego-based legal marketing agency who’s been serving personal injury firms nationwide for over ten years. We connect notable attorneys with people in critical need of legal help. When justice is served, our neighborhoods become safer, negligent manufacturers are held accountable, and injured consumers are empowered. In the end, we all sleep a little better at night.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageContentBlock;