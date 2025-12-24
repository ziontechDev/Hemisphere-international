import React, { useState } from "react";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { divisionsData } from "../../data/divisions";
import { useNavigate } from "react-router-dom";


export default function DivisionsList() {
  const [activeTab, setActiveTab] = useState("Stainless Steel & Fabrication");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate()

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  const handleNavigate = () => {
    closeModal();
    navigate("/contact");
  };

  return (
    <section className="py-20 bg-gray-50/50">
      <div className=" mx-auto px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Section */}
          <div className="lg:w-1/4">
            <div className="sticky top-22">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-0.5 bg-secondary"></span>
                <h4 className="text-secondary font-bold uppercase tracking-widest text-xs">
                  Expertise
                </h4>
              </div>
              <h2 className="text-heading text-2xl lg:text-[40px] font-black uppercase leading-tight mb-10">
                Core <br /> Business{" "}
                <span className="text-secondary">Divisions</span>
              </h2>

              <div className="flex flex-col gap-3">
                {Object.keys(divisionsData).map((menu) => (
                  <button
                    key={menu}
                    onClick={() => setActiveTab(menu)}
                    className={`px-6 py-4 rounded-xl font-extrabold uppercase tracking-wider text-sm transition-all duration-300 border-2 text-left flex justify-between items-center ${
                      activeTab === menu
                        ? "bg-primary border-primary text-white shadow-lg translate-x-2"
                        : "bg-white border-transparent text-gray-500 hover:border-secondary shadow-sm"
                    }`}
                  >
                    {menu}
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        activeTab === menu ? "bg-secondary" : "bg-gray-200"
                      }`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Cards */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-700">
              {divisionsData[activeTab].map((item, index) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-primary font-black uppercase text-lg mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {Array.isArray(item.desc) ? item.desc[0] : item.desc}
                    </p>
                    <button
                      onClick={() => openModal(item)}
                      className="mt-auto text-secondary font-bold text-xs uppercase flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---  Modal --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-md cursor-zoom-out"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[80vh] animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute sm:top-4 sm:right-4 top-2 right-2 z-210 p-2 bg-white/80 backdrop-blur-md rounded-full text-primary hover:bg-secondary hover:text-white transition shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Image */}
            <div className="w-full lg:w-1/2 h-55 sm:h-100 lg:h-auto bg-gray-50 shrink-0 flex items-center justify-center p-3 lg:p-5">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-1/2 p-4 sm:p-8 lg:p-10 overflow-y-auto">
              <div className="sm:mb-6 mb-2">
                <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] block mb-2">
                  Technical Specifications
                </span>
                <h3 className="text-heading text-xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight">
                  {selectedProduct.title}
                </h3>
              </div>

              <div className="w-12 h-1 bg-secondary sm:mb-8 mb-3"></div>

              {selectedProduct.type === "paragraph" ? (
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {selectedProduct.desc}
                </p>
              ) : (
                <ul className="space-y-2">
                  {selectedProduct.desc.map((point, idx) => (
                    <li key={idx} className="flex gap-4 text-gray-600">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-sm sm:text-base font-medium leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="sm:mt-12 mt-6">
                <button
                  onClick={handleNavigate}
                  className="w-full bg-primary text-white py-5 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300"
                >
                  Request A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
