import React from "react";
import { Link } from "react-router-dom";
// products
import prod1 from "../../assets/products/BlackSteel.jpg";
import prod2 from "../../assets/products/HRSteelSheet.jpg";
import prod3 from "../../assets/products/bar.jpg";
import prod4 from "../../assets/products/VAYUJAL_Max_2200_LPD.jpg";

import { Settings } from "lucide-react";

const products = [
  {
    id: "black-steel",
    name: "Black Steel",
    img: prod1,
    desc: "Black steel is a term given to steel pipe with a black oxide scale on the surface. This black oxide scale is formed when the pipe is forged and is typically sealed with a protective oil to prevent corrosion.",
  },
  {
    id: "hr-steel",
    name: "HR Steel Sheet",
    img: prod2,
    desc: "With excellent properties such as high strength, good toughness, easy machinability and good weldability, Baosteel's hot-rolled steel products are widely used in ships, automobiles.",
  },
  {
    id: "steel-bar",
    name: "Bar",
    img: prod3,
    desc: "With the features of high-level purity, precise chemical composition control, high reduction ratio, high dimensional accuracy and excellent surface quality, the products are mainly used.",
  },
  {
    id: "vayujal-max",
    name: "VAYUJAL Max 2200 LPD",
    img: prod4,
    desc: "Best suited for: Large Sized Organizations/Institutions/Hotels with an average of 1500 users. Actual size (LxWxH): 235*270 x 215 (cms). Power consumption: 0.28 kWh / ltr.",
  },
];

export default function ProductsSec() {
  return (
    <section className="pb-15 pt-5 bg-white">
      <div className=" mx-auto px-4 sm:px-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-gray-400 uppercase text-sm font-bold">
            Products
          </span>
          <h2 className="text-heading text-3xl md:text-5xl font-extrabold mt-2 mb-4">
            Our most popular Products for you
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gray-500"></div>
            <div className=" flex items-center justify-center">
              <Settings size={20} className="text-secondary " />
            </div>
            <div className="w-12 h-px bg-gray-500"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-4/3 overflow-hidden mb-6 shadow-md">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-primary font-bold text-2xl mb-3 group-hover:text-secondary transition-colors">
                {product.name}
              </h3>

              {/* Description  */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {product.desc}
              </p>

              {/* Read More Button */}
              <Link to={"/products"}>
                <button className="bg-secondary text-white px-8 py-2 font-bold uppercase tracking-widest text-xs rounded-sm shadow-sm hover:bg-primary transition-all duration-300">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
