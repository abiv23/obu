import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 px-4"> {/* Removed fixed/absolute positioning */}
      <div className="container mx-auto flex items-start justify-between">
        {/* Logo/Image on the far left */}
        <div className="mr-8">
          <Image 
            src="/images/footer/obu-logo.svg" // Replace with your logo path (e.g., /images/obu-logo.svg if in public/images/)
            alt="Obu Interactive Logo"
            width={100} // Adjust size as needed
            height={50} // Adjust size as needed
            className="object-contain"
          />
        </div>
        
        {/* Three columns */}
        <div className="flex-1 flex justify-between">
          {/* Obu Column */}
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-4">Obu</h3>
            <p>About</p>
            <p>Services</p>
            <p>Careers</p>
          </div>

          {/* Contact Us Column */}
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>619-289-8466</p>
            <p>hello@obuinteractive.com</p>
            <div className="flex space-x-4 mt-2">
                <Image 
                    src="/images/footer/social-media-fb.png" // Replace with your logo path (e.g., /images/obu-logo.svg if in public/images/)
                    alt="Obu Interactive Logo"
                    width={25} // Adjust size as needed
                    height={25} // Adjust size as needed
                    className="object-contain"
                />
                <Image 
                    src="/images/footer/social-media-ig.png" // Replace with your logo path (e.g., /images/obu-logo.svg if in public/images/)
                    alt="Obu Interactive Logo"
                    width={25} // Adjust size as needed
                    height={25} // Adjust size as needed
                    className="object-contain"
                />
                <Image 
                    src="/images/footer/social-media-linkedin.png" // Replace with your logo path (e.g., /images/obu-logo.svg if in public/images/)
                    alt="Obu Interactive Logo"
                    width={25} // Adjust size as needed
                    height={25} // Adjust size as needed
                    className="object-contain"
                />
            </div>
          </div>

          {/* Location Column */}
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-4">Location</h3>
            <p>701 Island Ave</p>
            <p>Suite 250,</p>
            <p>San Diego, CA 92101</p>
          </div>
        </div>
      </div>

      {/* Copyright at the very bottom */}
      <div className="mt-8 text-left text-gray-800 text-sm pl-[45px] pt-[30px]">
        © 2025 Obu Interactive LLC. All Rights Reserved. <a href="/privacy-policy" className="underline">Privacy Policy</a>.
      </div>
    </footer>
  );
};

export default Footer;