import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import companyLogo from "../../assets/logo.jpg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Divisions",
      path: "/divisions",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <footer className="bg-grayBg text-gray-800">
      {/* ================= 1. CALL TO ACTION SECTION ================= */}
      <div className="pt-14 px-4 sm:px-10">
        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl text-center sm:text-left font-black text-primary uppercase tracking-tight max-w-3xl leading-tight">
            Ready to Elevate Your Business with Innovation?
          </h2>
          <Link to="/contact">
            <button className="whitespace-nowrap px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-sm hover:bg-secondary transition-all duration-300 shadow-xl active:scale-95">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className=" mx-auto px-4 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* ================= 2. COMPANY INFO ================= */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src={companyLogo}
                alt="Logo"
                className="w-14 h-14 object-contain"
              />
              <div className="sm:whitespace-nowrap">
                <div className="text-lg font-black text-primary leading-none uppercase">
                  Hemisphere International
                </div>
                <div className="text-[10px] text-gray-500 font-medium tracking-[0.2em] mt-1 uppercase">
                  Always Ahead
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed pr-4">
              Empowering global businesses with cutting-edge technology
              solutions and strategic consulting. We bridge the gap between
              complexity and precision innovation.
            </p>
          </div>

          {/* ================= 3. PRODUCTS ================= */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest text-heading mb-6">
              Products
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                "Black Steel",
                "HR Steel Sheet",
                "Bar",
                "Stainless Steel",
                "Heavy Plates",
                "VAYUJAL Max 2200 LPD",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="flex items-center gap-3 hover:text-primary hover:translate-x-1 transition-all group"
                  >
                    <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaChevronRight className="text-[8px] text-white group-hover:text-white" />
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= 4. QUICK LINKS ================= */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest text-heading mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 hover:text-primary hover:translate-x-1 transition-all group"
                  >
                    <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaChevronRight className="text-[8px] text-white group-hover:text-white" />
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= 5. REACH US ================= */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest text-primary mb-6">
              Reach Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <span className="text-gray-600">
                  123 Industrial Zone, Muscat, Oman
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary shrink-0" />
                <span className="text-gray-600">+968-97892123</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary shrink-0" />
                <span className="text-gray-600">info@hemisphere.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-9 h-9 flex items-center justify-center bg-primary text-white hover:bg-secondary transition-colors duration-300 rounded-sm"
                    >
                      <Icon size={14} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 6. COPYRIGHT SECTION ================= */}
      <div className="border-t border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Empty div for spacing on desktop to keep text centered */}
          <div className="hidden md:block w-10"></div>

          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Hemisphere International. All rights
            reserved.
          </p>

          {/*  Go Top Button  */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all active:scale-90 shadow-md"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
