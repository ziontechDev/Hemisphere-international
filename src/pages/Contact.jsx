import React from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/pageBanners/contactBg.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Contact Us"
        currentPage="Contact Us"
        bgImage={bannerBg}
      />

      {/* --- Section 2: Contact Form & Info  --- */}
      <section className="relative pt-10 sm:pt-15 pb-7">
        <div className=" mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Contact Form (Takes 2/3 space) */}
            <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-2xl p-5 md:p-12">
              <h2 className="text-primary text-3xl font-extrabold mb-2">
                Send a Message
              </h2>
              <p className="text-gray-500 mb-10">
                We usually respond within 24 business hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder=""
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder=""
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase">
                    How can we help?
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition resize-none"
                  ></textarea>
                </div>

                <button className="group relative w-full md:w-max px-10 py-4 bg-secondary text-white font-bold uppercase tracking-widest rounded-lg overflow-hidden transition-all hover:bg-primary">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                </button>
              </form>
            </div>

            {/* Right Column: Contact Details */}

            <div className="bg-primary text-white rounded-2xl p-5 md:p-10 shadow-2xl flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-80">
                        Call Us
                      </p>
                      <p className="md:text-lg text-sm font-medium">+968-97892123</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-80">
                        Email Us
                      </p>
                      <p className="md:text-lg text-sm font-medium">info@hemisphere.com</p>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-80">
                        Our Office
                      </p>
                      <p className="md:text-lg text-sm font-medium">
                        123 Industrial Zone, Muscat, Oman
                      </p>
                    </div>
                  </div>
                  {/* business hours */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-80">
                        Business Hours
                      </p>
                      <p className="md:text-lg text-sm font-medium">
                        Monday — Friday: 9am - 6pm
                      </p>
                      <p className="md:text-lg text-sm font-medium">
                        Saturday: 10am - 2pm
                      </p>
                    </div>
                  </div>
                </div>

                {/* --- Social Icons  --- */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-6 font-semibold text-center lg:text-left">
                    Follow Our Socials
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    {[
                      { icon: <FaFacebookF />, link: "#" },
                      { icon: <FaInstagram />, link: "#" },
                      { icon: <FaLinkedinIn />, link: "#" },
                      { icon: <FaXTwitter />, link: "#" },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        className="w-11 h-11 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-secondary hover:border-secondary hover:-translate-y-1"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Google Maps --- */}
      <section className="w-full h-112.5 bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606803.816419347!2d50.85585996887658!3d21.419035872314936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd69f66a9d59bbf%3A0x3a064c7665b1a817!2sOman!5e0!3m2!1sen!2sin!4v1766293119045!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
