import React from "react";
import bigImg from "../../assets/aboutUs/about1.jpg"; // Main large image
import smallImg from "../../assets/aboutUs/about2.jpg"; // Overlapping small image

export default function FirstSec() {
  return (
    <section className="w-full py-10 lg:py-16 bg-grayBg overflow-hidden">
      <div className=" mx-auto px-4 sm:px-10">
        {/* Changed to a 12-column grid to control the ratio (7 cols for text, 5 for image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-stretch">
          
          {/* Left Content Side: Now spans 7 columns */}
          <div className="flex flex-col justify-center order-2 lg:order-1 lg:col-span-7 pr-0 lg:pr-10">
            {/* Small Heading with Border */}
            <div className="flex items-center  gap-4 mb-4">
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm">
                Our Story
              </h4>
            </div>

            {/* Big Heading */}
            <h2 className="text-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
             HEMISPHERE INTERNATIONAL
            </h2>

            {/* Description Text */}
            <div className="space-y-4 text-content text-[16px] leading-relaxed">
              <p>
                Welcome to our company! Our main focus is on delivering
                exceptional service and support across a variety of sectors,
                including Mechanical, Electrical, and Plumbing Solutions (MEP),
                Plant & Equipment Installation, Civil & Contractual Works, Laundry
                & Kitchen Services, Environmental & Waste Management Services,
                Building Maintenance Services, and General Trading, among others.
              </p>
              <p>
                At the heart of our operations lies our commitment to providing
                technologically advanced, process-oriented, and customer-centric
                products and services. We understand the importance of tailoring
                our offerings to match the specific requirements of our clients.
              </p>
              <p>
                By continuously refining our products and services, we strive to
                stay ahead of the curve, offering the latest industry advancements
                at competitive prices and value. Trust us to fulfill your needs
                as we embark on our journey toward excellence.
              </p>
            </div>
          </div>

          {/* Right Image Side: Now spans 5 columns */}
          <div className="relative order-1 lg:order-2 lg:col-span-5 pr-5 flex justify-center lg:justify-end">
            {/* Main Big Image - Increased max-width */}
            <div className="relative w-full   overflow-hidden rounded-2xl shadow-xl">
              <img
                src={bigImg}
                alt="Our Main Facility"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Small Overlapping Image */}
            <div className="absolute -top-6 -right-2 lg:-right-4 w-1/2 max-w-30 md:max-w-50 aspect-square overflow-hidden rounded-full border-4 md:border-8 border-white shadow-2xl z-20">
              <img
                src={smallImg}
                alt="Service Detail"
                className="w-full h-full object-cover"
              />
            </div>

           
            
          </div>
        </div>
      </div>
    </section>
  );
}