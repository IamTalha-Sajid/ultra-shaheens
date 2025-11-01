import React from 'react';

const Video: React.FC = () => {
  // Extract video ID from YouTube URL: https://youtu.be/uixqmF_8z9s?si=GjmCWldhEZDk1b3j
  const videoId = 'uixqmF_8z9s';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section id="video" className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-racing-green mb-4" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            WATCH OUR STORY
          </h2>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src={embedUrl}
              title="Ultra Shaheens Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
