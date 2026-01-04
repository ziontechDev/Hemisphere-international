import React from "react";
import {
  Settings,
  Wrench,
  Layers,
  ShoppingCart,
  Construction,
  Bird,
} from "lucide-react";
import { Link } from "react-router-dom";

const divisions = [
  {
    title: "MEP Engineering",
    desc: "Comprehensive Mechanical, Electrical, and Plumbing solutions tailored for large-scale infrastructure.",
    icon: <Settings size={35} />,
  },
  {
    title: "Maintenance Service",
    desc: "Proactive and reactive maintenance programs to ensure your systems run at peak efficiency.",
    icon: <Wrench size={35} />,
  },
  {
    title: "Stainless Steel & Fabrication",
    desc: "Custom high-grade steel fabrication and welding services for industrial and commercial needs.",
    icon: <Layers size={35} />,
  },
  {
    title: "General Trading",
    desc: "Global sourcing and supply chain management for high-quality industrial materials and equipment.",
    icon: <ShoppingCart size={35} />,
  },
  {
    title: "Equipment Installation",
    desc: "Professional precision installation of heavy machinery and specialized industrial systems.",
    icon: <Construction size={35} />,
  },
  {
    title: "Poultry Services",
    desc: "Specialized environmental and technical support for modern poultry production facilities.",
    icon: <Bird size={35} />,
  },
];

export default function DivisionSec() {
  return (
    <section className="py-12 bg-grayBg">
      <div className=" mx-auto px-4 sm:px-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-gray-400 uppercase text-sm font-bold">
            What We Do
          </span>
          <h2 className="text-heading text-4xl md:text-5xl font-extrabold mt-2 mb-4">
            Our Divisions
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gray-500"></div>
            <div className=" flex items-center justify-center">
              <Settings size={20} className="text-secondary " />
            </div>
            <div className="w-12 h-px bg-gray-500 "></div>
          </div>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {divisions.map((item, index) => (
            <div key={index} className="flex items-start gap-5 group">
              {/* Icon Container */}
              <div className="shrink-0 w-18 h-18 rounded-full bg-white flex items-center justify-center text-gray-500 transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                {item.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-primary font-bold text-xl mb-2 transition-colors duration-300 group-hover:text-secondary">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {item.desc}
                </p>
                {/* Decorative Dots */}
                <div className="flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-secondary opacity-40"></span>
                  <span className="w-1 h-1 rounded-full bg-secondary opacity-70"></span>
                  <span className="w-1 h-1 rounded-full bg-secondary"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link to="/divisions">
          <button className="bg-secondary text-white px-10 py-3 font-bold uppercase tracking-widest text-sm rounded shadow-lg hover:bg-primary transition-colors duration-300">
            View All
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
