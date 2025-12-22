import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { productsData } from "../../data/products";
import { useNavigate } from "react-router-dom";

export default function ProductsList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

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
    <section className="py-15 bg-white">
      <div className=" mx-auto px-4 sm-px-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-gray-400 uppercase text-sm font-bold">
              our inventory
            </span>
          </div>
          <h2 className="text-primary text-4xl md:text-5xl font-extrabold mb-4">
            High-Performance Products
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Delivering unsurpassed service and technical support across MEP,
            environmental solutions, and general trading sectors with precision.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-3xl p-3 sm:p-4 border border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              {/* Product Image */}
              <div className="w-full aspect-square rounded-xl mb-6 overflow-hidden bg-gray-50">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-primary font-bold text-lg mb-3 line-clamp-1 group-hover:text-secondary transition-colors">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {product.type === "paragraph"
                  ? product.desc
                  : product.desc.join(", ")}
              </p>

              <button
                onClick={() => openModal(product)}
                className="mt-auto w-full py-3 border-2 border-secondary text-secondary font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ---  Modal --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[80vh] animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute sm:top-4 sm:right-4 top-2 right-2 z-110 p-1 bg-white/60 backdrop-blur-md rounded-full text-primary hover:bg-secondary hover:text-white transition shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Image */}
            <div className="w-full lg:w-1/2 h-55 sm:h-100 lg:h-auto bg-grayBg shrink-0 flex items-center justify-center p-3 lg:p-5">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Right Column: Content  */}
            <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 overflow-y-auto">
              <div className="sm:mb-6 mb-2">
                <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] block mb-2">
                  Technical Specifications
                </span>
                <h3 className="text-primary text-xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight">
                  {selectedProduct.name}
                </h3>
              </div>

              <div className="w-12 h-1 bg-secondary sm:mb-8 mb-3"></div>

              {selectedProduct.type === "paragraph" ? (
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {selectedProduct.desc}
                </p>
              ) : (
                <ul className="space-y-4">
                  {selectedProduct.desc.map((point, idx) => (
                    <li key={idx} className="flex gap-4 text-gray-600 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="sm:mt-12 mt-8">
                <button
                  onClick={handleNavigate}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300"
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
