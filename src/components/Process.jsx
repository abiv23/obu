'use client';

import Image from 'next/image';

const Process = () => {
  return (
    <div className="bg-gray-200 py-12 px-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-500 text-sm uppercase mb-2">PROCESS</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-12">Here’s how it works:</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Step 1: Tell us your goals */}
          <div className="flex flex-col items-center">
            <Image 
              src="/images/homepage/icon-goal.svg"
              alt="Tell us your goals icon"
              width={150} // Adjust size as needed to match your SVG dimensions
              height={150} // Adjust size as needed to match your SVG dimensions
            />
            <p className="text-lg font-bold text-gray-800 mt-4">Tell us your goals</p>
            <p className="text-gray-600 text-base max-w-xs mt-2">
              Let’s start with a simple phone call. We’ll probably ask a lot of questions to help us create the best plan tailored for your firm’s unique goals.
            </p>
          </div>

          {/* Arrow between Step 1 and Step 2 */}
          <div className="hidden md:block">
            <Image 
              src="/images/homepage/arrow-right.png"
              alt="Arrow right"
              width={50} // Adjust size as needed to match your image dimensions
              height={50} // Adjust size as needed to match your image dimensions
              className="object-contain"
            />
          </div>

          {/* Step 2: We execute the plan */}
          <div className="flex flex-col items-center">
            <Image 
              src="/images/homepage/icon-plan.svg"
              alt="We execute the plan icon"
              width={150} // Adjust size as needed to match your SVG dimensions
              height={150} // Adjust size as needed to match your SVG dimensions
            />
            <p className="text-lg font-bold text-gray-800 mt-4">We execute the plan</p>
            <p className="text-gray-600 text-base max-w-xs mt-2">
              We set your strategy in motion, but it doesn’t end there. We’ll also monitor, refine, and optimize your progress to maximize each dollar.
            </p>
          </div>

          {/* Arrow between Step 2 and Step 3 */}
          <div className="hidden md:block">
            <Image 
              src="/images/homepage/arrow-right.png"
              alt="Arrow right"
              width={50} // Adjust size as needed to match your image dimensions
              height={50} // Adjust size as needed to match your image dimensions
              className="object-contain"
            />
          </div>

          {/* Step 3: You get real results */}
          <div className="flex flex-col items-center">
            <Image 
              src="/images/homepage/icon-results.svg"
              alt="You get real results icon"
              width={150} // Adjust size as needed to match your SVG dimensions
              height={150} // Adjust size as needed to match your SVG dimensions
            />
            <p className="text-lg font-bold text-gray-800 mt-4">You get real results</p>
            <p className="text-gray-600 text-base max-w-xs mt-2">
              It’s as simple as that. We’ll take care of bringing you leads so you can take care of your clients. You’ll also receive progress reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;