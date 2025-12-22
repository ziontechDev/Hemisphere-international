import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import your images
import bannerImg1 from "../../assets/banners/banner.jpg";
import bannerImg2 from "../../assets/banners/banner2.jpg";
import bannerImg3 from "../../assets/banners/banner3.jpg";

export default function BannerSec() {
  const images = [bannerImg1, bannerImg2, bannerImg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen min-h-130 w-full overflow-hidden bg-black">
      {/* Background Images with Zoom & Fade Effect */}
      {images.map((img, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-2000 ease-in-out ${
              isActive ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-6000 ease-linear ${
                isActive ? "scale-110 rotate-1" : "scale-100 rotate-0"
              }`}
            />
          </div>
        );
      })}

      {/* Dark Gradient Overlay  */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl">
            {/* Top label */}
            <span className="inline-block mb-2 mt-15 text-sm tracking-[0.3em] uppercase text-white font-semibold opacity-0 animate-fade-up">
              Always Ahead
            </span>

            {/* Heading */}
            <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-6xl lg:text-7xl opacity-0 animate-fade-up animate-delay-200">
              Unlocking Solutions for Business Success
            </h1>

            {/* Description */}
            <p className="mt-6 text-white text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up animate-delay-400">
              Your Trusted Partner for Comprehensive MEP, Installation,
              Maintenance, and Environmental Solutions - Excellence in Every
              Sector.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center opacity-0 animate-fade-up animate-delay-600">
              <Link to="/divisions">
                <button className="group relative px-8 py-3 overflow-hidden rounded-md bg-white border-2 border-white">
                  <span className="absolute inset-y-0 left-0 w-0 bg-secondary transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative z-10 text-secondary font-bold  tracking-wider transition-colors duration-300 group-hover:text-white">
                    Discover More
                  </span>
                </button>
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-md px-8 py-3 border-2 border-white text-white font-bold  tracking-wider transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                Our Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators  */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-500 ${
              i === currentIndex ? "w-8 bg-white" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
