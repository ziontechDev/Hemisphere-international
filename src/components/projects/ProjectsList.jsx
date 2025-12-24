import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { projectsData } from "../../data/projects";

export default function ProjectsList() {
  const [activeTab, setActiveTab] = useState("completed");
  const [selectedProject, setSelectedProject] = useState(null);

  const openLightbox = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Section:  Headings & Buttons */}
          <div className="lg:w-1/4">
            <div className="sticky top-22">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-0.5 bg-secondary"></span>
                <h4 className="text-secondary font-bold uppercase tracking-widest text-sm">
                  Our Portfolio
                </h4>
              </div>
              <h2 className="text-heading text-2xl lg:text-[40px] font-black uppercase leading-tight mb-10">
                Inspiring <br /> Project{" "}
                <span className="text-secondary">Achievements</span>
              </h2>

              {/* Filter Buttons */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setActiveTab("completed")}
                  className={`px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 border-2 text-left flex justify-between items-center ${
                    activeTab === "completed"
                      ? "bg-primary border-primary text-white shadow-xl translate-x-2"
                      : "bg-transparent border-gray-300 text-gray-500 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  Completed Projects
                  <span
                    className={`w-2 h-2 rounded-full ${
                      activeTab === "completed" ? "bg-secondary" : "bg-gray-200"
                    }`}
                  ></span>
                </button>

                <button
                  onClick={() => setActiveTab("ongoing")}
                  className={`px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 border-2 text-left flex justify-between items-center ${
                    activeTab === "ongoing"
                      ? "bg-primary border-primary text-white shadow-xl translate-x-2"
                      : "bg-transparent border-gray-300 text-gray-500 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  Ongoing Projects
                  <span
                    className={`w-2 h-2 rounded-full ${
                      activeTab === "ongoing" ? "bg-secondary" : "bg-gray-200"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Image Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in duration-700">
              {projectsData[activeTab].map((project) => (
                <div
                  key={project.id}
                  onClick={() => openLightbox(project)}
                  className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-gray-100"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---  Modal --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-200 flex flex-col items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-primary/45 backdrop-blur-md cursor-zoom-out"
            onClick={closeLightbox}
          />

          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-secondary text-white rounded-full z-210"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main Container */}
          <div className="relative z-205 w-fit max-w-5xl flex flex-col items-center animate-in zoom-in-95 duration-300">
            {/* Image */}
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="max-h-[70vh] w-auto block rounded-t-2xl shadow-2xl"
            />

            {/* Text Section */}
            {(selectedProject.title || selectedProject.description) && (
              <div className="w-full bg-white p-6 rounded-b-2xl">
                {selectedProject.title && (
                  <h3 className="text-primary text-xl md:text-2xl font-black uppercase mb-2">
                    {selectedProject.title}
                  </h3>
                )}
                {selectedProject.description && (
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
