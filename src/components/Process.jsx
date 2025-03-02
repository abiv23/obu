import React from 'react';
import Image from 'next/image';

const Process = ({ 
  title = "PROCESS", 
  heading = "Here’s how it works:", 
  steps = [
    {
      iconSrc: "/images/homepage/icon-goal.svg",
      iconAlt: "Tell us your goals icon",
      iconWidth: 150,
      iconHeight: 150,
      stepTitle: "Tell us your goals",
      stepBody: "Let’s start with a simple phone call. We’ll probably ask a lot of questions to help us create the best plan tailored for your firm’s unique goals.",
    },
    {
      iconSrc: "/images/homepage/icon-plan.svg",
      iconAlt: "We execute the plan icon",
      iconWidth: 150,
      iconHeight: 150,
      stepTitle: "We execute the plan",
      stepBody: "We set your strategy in motion, but it doesn’t end there. We’ll also monitor, refine, and optimize your progress to maximize each dollar.",
    },
    {
      iconSrc: "/images/homepage/icon-results.svg",
      iconAlt: "You get real results icon",
      iconWidth: 150,
      iconHeight: 150,
      stepTitle: "You get real results",
      stepBody: "It’s as simple as that. We’ll take care of bringing you leads so you can take care of your clients. You’ll also receive progress reports.",
    },
  ],
  arrowSrc = "/images/homepage/arrow-right.png",
  arrowAlt = "Arrow right",
  arrowWidth = 50,
  arrowHeight = 50,
}) => {
  return (
    <div className="bg-gray-200 py-12 px-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-500 text-sm uppercase mb-2">{title}</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-12">{heading}</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <Image 
                  src={step.iconSrc}
                  alt={step.iconAlt}
                  width={step.iconWidth}
                  height={step.iconHeight}
                />
                <p className="text-lg font-bold text-gray-800 mt-4">{step.stepTitle}</p>
                <p className="text-gray-600 text-base max-w-xs mt-2">{step.stepBody}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block">
                  <Image 
                    src={arrowSrc}
                    alt={arrowAlt}
                    width={arrowWidth}
                    height={arrowHeight}
                    className="object-contain"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;