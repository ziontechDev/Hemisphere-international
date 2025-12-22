import React from "react";
import { Target, Eye, Gem, ShieldCheck } from "lucide-react";
import coreImg from "../../assets/aboutUs/core.jpg"; 

const values = [
  {
    title: "Mission",
    desc: "To be the go-to provider for the GCC market in the next 5 years and ensure client satisfaction on every transaction.",
    icon: <Target className="w-6 h-6 text-white" />,
  },
  {
    title: "Vision",
    desc: "To be the go-to provider for the GCC market in the next 5 years and ensure client satisfaction on every transaction.",
    icon: <Eye className="w-6 h-6 text-white" />,
  },
  {
    title: "Precision",
    desc: "Every weld and engineering solution is crafted with extreme accuracy and consistency to meet global industrial standards.",
    icon: <Gem className="w-6 h-6 text-white" />,
  },
  {
    title: "Integrity",
    desc: "We stand by our work with honesty and accountability, building long-lasting partnerships through transparent business ethics.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
];

export default function CoreValuesSec() {
  return (
    <section className="w-full py-10 sm:py-15 bg-white">
      <div className=" mx-auto px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16">
          
          {/* Left Side: Image */}
          <div className="lg:w-1/2 order-1">
            <div className="sticky top-20">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 ">
                <img
                  src={coreImg}
                  alt="Industrial Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Headings & Stacking Cards */}
          <div className="lg:w-1/2 flex flex-col order-2">
            {/* Headings */}
            <div className="mb-6 sm:mb-12">
              <div className="flex items-center gap-4 mb-4">
               <span className="w-12 h-0.5 bg-secondary"></span>
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm">
                our value
              </h4>
              </div>
              
              <h2 className="text-primary text-3xl lg:text-5xl font-black uppercase leading-[0.9]">
                The Core <br /> 
                <span className="text-secondary">That Drives Us</span>
              </h2>
            </div>

            {/* Stacking Cards Container */}
            <div className="flex flex-col">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="sticky w-full min-h-75 p-5 rounded-[36px] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] bg-primary border border-white/10 text-white flex flex-col transition-all duration-500"
                  style={{ 
                      top: `${90 + (index * 80)}px`, 
                      marginBottom: "40px"
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-5 mb-2 sm:mb-4">
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Card Body */}
                  <div className="mt-2">
                      <div className="w-12 h-1 bg-secondary mb-6 opacity-50"></div>
                      <p className="text-gray-200 text-[16px] sm:text-xl leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                  </div>
                </div>
              ))}
              <div className="h-[30vh]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}