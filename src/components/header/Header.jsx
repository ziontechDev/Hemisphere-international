import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, ArrowRight, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import companyLogo from "../../assets/logo.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // menu items with their paths
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Divisions", path: "/divisions" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        if (!open) setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ================= TOP INFO (DESKTOP ONLY) ================= */}
      <div
        className={`hidden lg:block bg-linear-to-r from-secondary to-primary  text-white overflow-hidden transition-all duration-500 ease-in-out ${
          isAtTop ? "max-h-15 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto px-4 sm:px-10">
          <div className="flex items-center justify-between text-sm py-3">
            {/* left section */}
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                Call us for a quote today! +968 94145176
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                info@hemiinternational.com
              </div>
            </div>
            {/* right section */}
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1 text-gray-300 cursor-pointer hover:text-white">
                <FaFacebookF className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1 text-gray-300 cursor-pointer hover:text-white">
                <FaTwitter className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1 text-gray-300 cursor-pointer hover:text-white">
                <FaInstagram className="w-4 h-4" />
              </div>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/company/hemisphere-international-business-solutions-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 cursor-pointer hover:text-white"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div
        className={`transition-all duration-300 border-b ${
          isAtTop
            ? "bg-white/80 backdrop-blur-md border-transparent"
            : "bg-white shadow-sm border-gray-100"
        }`}
      >
        <div className="mx-auto px-4 sm:px-10">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={companyLogo}
                alt=""
                className="w-14 h-14 object-contain"
              />
              <div>
                <div className="sm:text-xl text-xs font-bold text-primary">
                  HEMISPHERE INTERNATIONAL
                </div>
                <div className="text-[10px] sm:text-sm font-bold text-gray-500">
                  Always Ahead
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6 font-semibold uppercase">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-secondary transition"
                >
                  {item.name}
                </Link>
              ))}
              <GetQuoteButton />
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-105 bg-white h-screen overflow-y-auto
        transform transition-transform duration-300 ease-in-out lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="px-5 py-6 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <img
                src={companyLogo}
                alt=""
                className="w-10 h-10 object-contain"
              />
              <div className="leading-tight">
                <div className="text-xs font-bold text-primary">
                  HEMISPHERE INTERNATIONAL
                </div>
                <div className="text-[10px] text-gray-500">Always Ahead</div>
              </div>
            </div>

            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-gray-300">
            <h4 className="font-semibold mb-3 text-primary">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +968 94145176
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                info@hemiinternational.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ================= CTA BUTTON ================= */

function GetQuoteButton() {
  return (
    <a
      href={`https://wa.me/96894145176?text=${encodeURIComponent(
        "Hello, I would like to request a quote."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="relative group overflow-hidden px-8 py-3 border-2 rounded-md bg-secondary border-secondary text-white font-bold uppercase tracking-wider transition-colors duration-300 ease-in-out hover:text-secondary">
        {/* The Animated Background Layer */}
        <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full" />

        {/* The Button Text */}
        <span className="relative z-10">Request A Quote</span>
      </button>
    </a>
  );
}
