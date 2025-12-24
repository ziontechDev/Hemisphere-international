import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom"; 

const PageBanner = ({
  title,
  bgImage,
  currentPage,
  parentLinks = []
}) => {
  return (
    <section
      className="relative h-100 w-full bg-cover bg-center lg:h-135.5"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* === Light Overlay === */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* === Content === */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Page Title */}
        <h1 className="mt-20 mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {/* Breadcrumb Pill */}
        <div className="inline-flex items-center gap-1 sm:gap-3 rounded-full shadow-sm shadow-white/20  bg-white/5 px-3 sm:px-6 py-2  transition-colors hover:bg-white/10">
          
          {/*  Home Link */}
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>

          {/*  Parent Links  */}
          {parentLinks.map((link, index) => (
            <React.Fragment key={index}>
              <ChevronRight size={14} className="text-gray-500" />
              <Link
                to={link.path}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </React.Fragment>
          ))}

          {/* 3. Current Page  */}
          <ChevronRight size={14} className="text-gray-300" />
          <span className="text-sm font-semibold text-blue-400">
            {currentPage || title}
          </span>
          
        </div>
      </div>
    </section>
  );
};

export default PageBanner;