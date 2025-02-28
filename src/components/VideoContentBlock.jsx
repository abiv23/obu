'use client';

import ReactPlayer from 'react-player/vimeo'; // Import Vimeo player from react-player
import Button from './Button'; // Assuming you have the Button component from previous steps

const VideoContentBlock = ({video}) => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Vimeo video on the left */}
      <div className="w-full md:w-1/2">
        <ReactPlayer 
          url={video} // Updated to your specific Vimeo video URL
          width="100%"
          height="100%"
          className="rounded-lg shadow-md"
          controls={true} // Show video controls (play, pause, volume, etc.)
          playing={false} // Auto-play is off by default (set to true if you want auto-play, but note browser restrictions)
          loop={false} // Disable loop by default (set to true if you want the video to loop)
          muted={false} // Mute is off by default; adjust if auto-play is needed
        />
      </div>

      {/* Text content on the right */}
      <div className="w-full md:w-1/2">
        <div className="text-gray-800">
          <h2 className="text-xl font-bold mb-2 uppercase">STRATEGY</h2>
          <h1 className="text-2xl font-bold mb-4">Do your clients know how to find you?</h1>
          <p className="text-lg leading-relaxed">
            You have a physical address, but what about your online presence? The fact is that nowadays, more and more people find their lawyer online. Not only will we help them find you on the internet, we’ll show them you’re the best attorney for their needs.
          </p>
          <Button>
            BETTER RETURN ON ADVERTISING BUDGET
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoContentBlock;