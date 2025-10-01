import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const BlogsPage: React.FC = () => {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      
      {/* Blogs Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] relative">
        {/* Background Logo with 60% opacity */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
          <Image 
            src="/ultra-shaheens-logo.png" 
            alt="Ultra Shaheens Logo Background" 
            width={600}
            height={350}
            className="h-96 sm:h-[500px] lg:h-[600px] w-auto object-contain"
          />
        </div>
        
        {/* Coming Soon Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-racing-green mb-8" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            BLOGS
            <br />
            <span className="text-dell">COMING SOON</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-medium">
            Stay tuned for exciting content
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
