'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button'; // Assuming Button exists from previous steps

const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger shrink/sticky at 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-item')) {
        setIsServicesOpen(false);
        setIsCaseStudiesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesItems = [
    'CONTENT SERVICES',
    'PAID AD CAMPAIGNS',
    'SEARCH ENGINE OPTIMIZATION',
    'SOCIAL MEDIA',
    'WEBSITE DESIGN',
  ];

  const caseStudiesItems = [
    'PHILIPS CPAP RECALL CASE STUDY',
    'TOXIC BABY FOOD CAMPAIGN CASE STUDY',
    'VETERANS AFFAIRS DENIED CLAIMS CASE STUDY',
    'USC CASE STUDY',
    'ROUNDUP CASE STUDY',
    'COSMETIC SURGEON SEXUAL BATTERY CASE STUDY',
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-grey shadow-md py-2' // Smaller height (48px total) when scrolled
          : 'bg-transparent py-4' // Initial height (64px total) when not scrolled
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Logo - Adjust size when scrolled */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/footer/obu-logo.svg" // Use your logo path, adjust if different
            alt="Obu Interactive Logo"
            width={isScrolled ? 80 : 100} // Shrink logo width when scrolled
            height={isScrolled ? 40 : 50} // Shrink logo height when scrolled
            className="object-contain transition-all duration-300"
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {['ABOUT', 'SERVICES', 'CASE STUDIES', 'BLOG', 'PODCAST', 'CAREERS'].map((item) => {
            if (item === 'SERVICES') {
              return (
                <div key={item} className="nav-item relative group">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="font-montserrat text-white uppercase text-sm hover:text-custom-green transition-colors flex items-center"
                    aria-label="Toggle Services dropdown"
                  >
                    {item} ▼
                  </button>
                  {isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      {servicesItems.map((subItem) => (
                        <Link
                          key={subItem}
                          href={`/${subItem.toLowerCase().replace(' ', '-').replace(/[^a-z0-9-]/g, '')}`}
                          className="font-montserrat text-dark-blue block px-4 py-2 text-sm hover:bg-gray-100 transition-colors truncate"
                          aria-label={subItem}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            if (item === 'CASE STUDIES') {
              return (
                <div key={item} className="nav-item relative group">
                  <button
                    onClick={() => setIsCaseStudiesOpen(!isCaseStudiesOpen)}
                    onMouseEnter={() => setIsCaseStudiesOpen(true)}
                    onMouseLeave={() => setIsCaseStudiesOpen(false)}
                    className="font-montserrat text-white uppercase text-sm hover:text-custom-green transition-colors flex items-center"
                    aria-label="Toggle Case Studies dropdown"
                  >
                    {item} ▼
                  </button>
                  {isCaseStudiesOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                      {caseStudiesItems.map((subItem) => (
                        <Link
                          key={subItem}
                          href={`/${subItem.toLowerCase().replace(' ', '-').replace(/[^a-z0-9-]/g, '')}`}
                          className="font-montserrat text-dark-blue block px-4 py-2 text-sm hover:bg-gray-100 transition-colors truncate"
                          aria-label={subItem}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="font-montserrat text-white uppercase text-sm hover:text-custom-green transition-colors"
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Contact Button and Search (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-custom-green text-white rounded-full px-4 py-1 text-sm hover:bg-opacity-80">
            CONTACT
          </Button>
          <button className="text-white">
            <span className="text-lg">🔍</span> {/* Using Unicode magnifying glass, replace with SVG if preferred */}
          </button>
        </div>

        {/* Mobile Menu (Hamburger) - Simplified for now, expand as needed */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-white text-2xl" aria-label="Open mobile menu">☰</button> {/* Hamburger icon, replace with SVG or component */}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;