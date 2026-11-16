import React from 'react';

const Video: React.FC = () => {
  return (
    <section className="px-[clamp(20px,4vw,48px)] pt-[clamp(72px,10vw,136px)]">
      <div className="wrap flex flex-col gap-9">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <h2 className="h2-display">Watch our story</h2>
          <div className="eyebrow text-paper/60">Film · Ultra Shaheens</div>
        </div>
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src="https://www.youtube.com/embed/uixqmF_8z9s?rel=0"
            title="Ultra Shaheens video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
