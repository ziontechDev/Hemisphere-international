import React from "react";
import leftBg from "../../assets/expBg2.jpg"; 
import rightBg from "../../assets/expBg.jpg"; 
import { FaAward } from "react-icons/fa";

export default function ExperienceSec() {
  return (
    <section className="py-12 bg-white">
      <div className=" mx-auto px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          
          {/* Left Large Box  */}
          <div className="relative flex-2 min-h-87.5 group overflow-hidden rounded-sm flex items-center justify-center text-center px-10">
            {/* Background Image */}
            <img 
              src={leftBg} 
              alt="Industrial Excellence" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
            
            {/* Content */}
            <div className="relative z-10 text-white">
              <h2 className="text-3xl md:text-6xl font-bold mb-4">
                Excellence in Engineering
              </h2>
              <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed text-gray-200">
                We are a leading provider of comprehensive industrial solutions, 
                dedicated to delivering high-quality MEP, fabrication, and maintenance 
                services to global clients with precision and reliability.
              </p>
            </div>
          </div>

          {/* Right Small Box  */}
          <div className="relative flex-1 min-h-87.5 group overflow-hidden rounded-sm flex items-center justify-center text-center px-8">
            {/* Background Image */}
            <img 
              src={rightBg} 
              alt="Experience" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
            
            {/* Content */}
            <div className="relative z-10 text-white flex flex-col items-center">
              <div className="mb-4 p-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:border-secondary transition-all duration-300">
                <FaAward className="w-10 h-10 text-white group-hover:text-secondary" />
              </div>
              <h3 className="text-4xl md:text-6xl font-black mb-1">10+</h3>
              <p className="text-2xl md:text-3xl font-black">Years of Experience</p>
              <p className="text-sm mt-2 text-white">
                A Decade of Proven Success in the Industry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}