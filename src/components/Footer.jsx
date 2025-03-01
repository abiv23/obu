import Image from 'next/image';

const Footer = ({ 
  logoSrc = "/images/footer/obu-logo.svg", 
  logoAlt = "Obu Interactive Logo",
  logoWidth = 100,
  logoHeight = 50,
  obuTitle = "Obu",
  obuLinks = ["About", "Services", "Careers"],
  contactTitle = "Contact Us",
  contactInfo = { phone: "619-289-8466", email: "hello@obuinteractive.com" },
  socialMediaIcons = [
    { src: "/images/footer/social-media-fb.png", alt: "Facebook" },
    { src: "/images/footer/social-media-ig.png", alt: "Instagram" },
    { src: "/images/footer/social-media-linkedin.png", alt: "LinkedIn" },
  ],
  socialIconWidth = 25,
  socialIconHeight = 25,
  locationTitle = "Location",
  locationLines = ["701 Island Ave", "Suite 250,", "San Diego, CA 92101"],
  copyrightText = "© 2025 Obu Interactive LLC. All Rights Reserved.",
  privacyPolicyLink = "/privacy-policy",
}) => {
  return (
    <footer className="bg-gray-200 py-8 px-4">
      <div className="container mx-auto flex items-start justify-between">
        {/* Logo/Image on the far left */}
        <div className="mr-8">
          <Image 
            src={logoSrc}
            alt={logoAlt}
            width={logoWidth}
            height={logoHeight}
            className="object-contain"
          />
        </div>
        
        {/* Three columns */}
        <div className="flex-1 flex justify-between">
          {/* Obu Column */}
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-4">{obuTitle}</h3>
            {obuLinks.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>

          {/* Contact Us Column */}
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-4">{contactTitle}</h3>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
            <div className="flex space-x-4 mt-2">
              {socialMediaIcons.map((icon, index) => (
                <Image 
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  width={socialIconWidth}
                  height={socialIconHeight}
                  className="object-contain"
                />
              ))}
            </div>
          </div>

          {/* Location Column */}
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-4">{locationTitle}</h3>
            {locationLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright at the very bottom */}
      <div className="mt-8 text-left text-gray-800 text-sm pl-[45px] pt-[30px]">
        {copyrightText} <a href={privacyPolicyLink} className="underline">Privacy Policy</a>.
      </div>
    </footer>
  );
};

export default Footer;