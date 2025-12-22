import React from "react";
import aboutImg from "../../assets/about.jpg"; 
import { Link } from "react-router-dom";

export default function AboutSec() {
  return (
    <section className="w-full py-10 lg:py-16 bg-white">
      <div className=" mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content Side */}
          <div className="flex flex-col justify-center">
            {/* Small Heading with Border */}
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-0.5 bg-secondary"></span>
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm">
                About Us
              </h4>
            </div>

            {/* Big Heading (2 Lines) */}
            <h2 className="text-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Industry Leaders in MEP, Environmental, and Building Maintenance Services
            </h2>

            {/* Description Text */}
            <p className="text-content text-[16px] leading-relaxed mb-8">
              Hemisphere International Business Solutions LLC was established to
              provide unsurpassed service and support relating to various fields
              - Trading, Maintenance of Laundry, Kitchen & Boiler Products &
              Services, Piping Solutions, Environmental & Waste-management
              Solutions, HVAC, and MEP & Electrical Solutions. We have a team of
              experienced professionals with more than 10 years of experience in
              the Oman and GCC market. Over the years, our team has been able to
              cater to the market by refining our products and services.
            </p>

            {/* Optional Button (Using your redesigned style) */}
            <div>
              <Link to="/about">
                <button className="relative group overflow-hidden px-8 py-3 border-2 border-secondary rounded-md bg-transparent text-secondary font-bold uppercase tracking-wider transition-colors duration-300 ease-in-out hover:text-white">
                  <span className="absolute inset-y-0 left-0 w-0 bg-secondary transition-all duration-500 ease-in-out group-hover:w-full" />
                  <span className="relative z-10">Read Our Story</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative min-h-75 lg:min-h-full overflow-hidden rounded-xl shadow-2xl">
            <img
              src={aboutImg}
              alt="Our Team at Work"
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
