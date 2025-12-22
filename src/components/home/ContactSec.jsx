import React from "react";
import { Phone, Mail, Send } from "lucide-react";
import contactBg from "../../assets/contactBg2.jpg"; 

export default function ContactSec() {
  return (
    <section 
      className="relative min-h-screen py-10 sm:py-20 flex items-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Dark Overlay to make the glass pop */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto px-4 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side: Contact Form Box */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-5 md:p-12 rounded-2xl shadow-2xl">
            <div className="mb-8">
              <h2 className="text-white text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-300">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:outline-none focus:border-secondary transition"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:outline-none focus:border-secondary transition"
                />
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:outline-none focus:border-secondary transition"
              />
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:outline-none focus:border-secondary transition resize-none"
              ></textarea>
              
              <button className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-white hover:text-secondary text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info Box */}
          <div className="backdrop-blur-xl bg-black/20 border border-white/10 p-5 md:p-12 rounded-2xl shadow-2xl flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-white text-3xl font-bold mb-2">Get In Touch</h2>
              <p className="text-gray-300">We're here to help. Contact us using the information below:</p>
            </div>

            <div className="space-y-8">
              {/* Phone Info */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary/20 border border-secondary/30 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-all duration-500">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Phone Number</p>
                  <p className="text-white text-sm sm:text-xl font-semibold">+968-97892123</p>
                </div>
              </div>

              {/* Email Info */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary/20 border border-secondary/30 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-all duration-500">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-white text-sm sm:text-xl font-semibold">info@hemisphere.com</p>
                </div>
              </div>
            </div>

            {/* Socials / Extra Info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-300 text-sm">
                Available Monday - Friday, 9:00 AM to 6:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}