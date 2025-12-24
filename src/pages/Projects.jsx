import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/pageBanners/projectsBg.jpg";
import ProjectsList from "../components/projects/ProjectsList";

const Projects = () => {
  return (
    <>
      <PageBanner title="Projects" currentPage="Projects" bgImage={bannerBg} />
      <ProjectsList/>
    </>
  );
};

export default Projects;
