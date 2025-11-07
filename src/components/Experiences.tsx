import React from 'react';
import Image from 'next/image';

const Experiences: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Pakistan vs Syria",
      subtitle: "Match Preview",
      event: "AFC Asian Cup 2027 Qualifiers — Group stage (Group E)",
      date: "November 18, 2025",
      description: "It’s the home showdown in Group E! Experience the passion as Pakistan hosts Syria in a high-stakes AFC Asian Cup 2027 Qualifier. Let’s fill the stands with green, bring your loudest support, and help propel the team closer to the Cup!",
      buttonText: "GET MATCH TICKETS",
      image: "/pakistan-syria-home.jpg",
      isHome: true
    },
    {
      id: 2,
      title: "Pakistan vs Myanmar",
      subtitle: "Match Preview",
      event: "AFC Asian Cup 2027 Qualifiers — Group stage (Group E)",
      date: "March 31, 2026",
      description: "Close out the group stage with intensity! Pakistan faces Myanmar in a match that could make history for our qualification dream. Stand with the Ultra Shaheens and let’s make the stadium roar for the boys in green—every chant counts!",
      buttonText: "GET MATCH TICKETS",
      image: "/afghanistan-pakistan-away.png",
      isHome: true   
    },
    // {
    //   id: 3,
    //   title: "TBD",
    //   subtitle: "TBD",
    //   event: "TBD",
    //   date: "TBD",
    //   description: "TBD",
    //   buttonText: "TBD",
    //   image: "/pakistan-vs-afghanistan.jpg",
    //   isHome: false
    // }
  ];

  return (
    <section id="experiences" className="w-full bg-white py-12 sm:py-16 lg:py-20 relative">
      {/* Logo background with 20% opacity */}
      <div className="absolute inset-0 hidden md:flex items-center justify-start opacity-20 pointer-events-none">
        <Image 
          src="/ultra-shaheens-logo.png" 
          alt="Ultra Shaheens Logo Background" 
          width={192}
          height={112}
          className="h-96 sm:h-[500px] lg:h-[600px] w-auto object-contain"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-left mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-racing-green mb-4" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            Choose your next Ultra Shaheens experience…
          </h2>
        </div>

        {/* Experiences Grid */}
        <div className={`grid grid-cols-1 ${experiences.length === 2 ? 'md:grid-cols-2 md:max-w-4xl md:mx-auto lg:grid-cols-2 lg:max-w-4xl lg:mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8`}>
          {experiences.map((experience) => (
            <div key={experience.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={`${experience.title} - ${experience.subtitle}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover object-top"
                  priority={experience.id === 1}
                />
                
                {/* Grey overlay for better text readability */}
                <div className="absolute inset-0 bg-gray-500 opacity-10"></div>
                
                {/* Overlay with Title and Date */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    {experience.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    {experience.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-canary font-semibold">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-racing-green p-4 sm:p-6">
                {/* Event Info */}
                <div className="mb-4">
                  <p className="text-xs sm:text-sm text-gray-300 mb-2 font-medium">
                    {experience.event}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                      experience.isHome 
                        ? 'bg-dell text-white' 
                        : 'bg-canary text-racing-green'
                    }`}>
                      {experience.isHome ? '🏠 HOME MATCH' : '📺 SCREENING'}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Call to Action Button */}
                <button className="w-full bg-dell hover:bg-la-palma hover:scale-105 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 uppercase tracking-wide text-sm sm:text-base transform" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  {experience.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
