import React, { useState } from "react";
import { ChevronDown, CheckCircle2, Settings } from "lucide-react";
import whyImg from "../../assets/aboutUs/why.jpg"; 

const accordionData = [
  {
    title: "Professional Expertise",
    content: "Our team consists of highly skilled engineers and technicians with over a decade of experience in the Oman and GCC markets. We bring specialized knowledge to every MEP and maintenance project we undertake.",
  },
  {
    title: "High-Quality Workmanship",
    content: "We take pride in our precision-driven approach. From custom stainless steel fabrication to complex equipment installations, our work meets the highest international standards of quality and safety.",
  },
  {
    title: "On-Time Delivery",
    content: "We understand that time is critical in business. Our process-oriented management ensures that every project milestone is met promptly without compromising on the integrity of the final result.",
  },
  {
    title: "Guaranteed Durability",
    content: "By using premium materials and advanced engineering techniques, we ensure that our solutions are built to last, providing you with long-term reliability and reduced maintenance costs.",
  },
];

export default function WhyChooseSec() {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-10 sm:py-15 bg-blue-50">
      <div className=" mx-auto px-4 sm:px-10">
        
        {/* Header Section */}

        <div className="text-center mb-10">
          <span className="text-gray-400 uppercase text-sm font-bold">
            Why Choose Us
          </span>
          <h2 className="text-heading text-4xl md:text-5xl font-extrabold mt-2 mb-4">
            Why Choose Our Services
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gray-500"></div>
            <div className=" flex items-center justify-center">
              <Settings size={20} className="text-secondary " />
            </div>
            <div className="w-12 h-px bg-gray-500 "></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side:  Image*/}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={whyImg}
                alt="Our Expertise"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div 
                key={index} 
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  openIndex === index ? "border-secondary shadow-lg" : "border-gray-200"
                }`}
              >
                {/* Accordion Heading  */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex items-center justify-between p-3 sm:p-5 text-left transition-colors duration-300 ${
                    openIndex === index 
                    ? "bg-secondary text-white" 
                    : "bg-gray-50 text-primary hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className={`w-5 h-5 ${openIndex === index ? "text-white" : "text-secondary/60"}`} />
                    <span className="sm:text-lg text-[16px] font-bold uppercase tracking-tight">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-500 ${
                      openIndex === index ? "rotate-180 text-white" : "text-gray-400"
                    }`} 
                  />
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 text-content text-sm leading-relaxed bg-white">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}