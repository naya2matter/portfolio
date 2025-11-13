import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { useProjectContext, type Project } from "./ProjectContext";
import ImageSection from "./ImageSection";
import { useContext, useEffect, useRef, useState } from "react";
import ProjectSlider from "./ProjectSlider";
import { useParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { ModeContext } from "../Pages/HomeBage";

const DetailsBage = () => {
  const mode = useContext(ModeContext)
  const { title } = useParams();
  const { projects, setSelectedProject } = useProjectContext();
  const [project, setProject] =  useState<Project | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const fullImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const found = projects.find((p) => p.title == title);
    if (found) {
      setProject(found);
      setSelectedProject(found);
    }
  }, [title]);

  useEffect(() => {
    if (fullscreenImage && fullImgRef.current) {
      const container = fullImgRef.current.parentElement;

      const enterFull = async () => {
        try {
          if (container) await container.requestFullscreen();
        } catch (e) {
          console.error("Fullscreen error:", e);
        }
      };

      enterFull();

      const handleExit = () => {
        setFullscreenImage(null);
      };

      const onFullChange = () => {
        if (!document.fullscreenElement) {
          handleExit();
        }
      };

      document.addEventListener("fullscreenchange", onFullChange);

      return () => {
        document.removeEventListener("fullscreenchange", onFullChange);
      };
    }
  }, [fullscreenImage]);

  if (!project) return <div>Loading or Not Found</div>;

  const { image, title: projectTitle, history, details, Demo, languages, libraries, frameWork, repo, imageScreen } = project;

  const openFullscreen = (img: string) => {
    setFullscreenImage(img);
  };

  return (
    <>
    <ScrollToTop/>
    <div className="dark:bg-dark-mainBackground dark:text-dark-mainText min-h-screen lg:pb-32">
      <div className="w-full py-[170px]">
        <section className="flex  flex-col-reverse lg:flex-row lg:items-center text-center lg:text-start gap-10 max-w-full min-h-[400px] lg:px-[69px] px-6">
          <div className="lg:w-1/2 w-full h-[400px]">
            <ImageSection
              image={image}
              imageScreen={imageScreen}
              title={projectTitle}
              showOverlayButtons={false}
              onFullscreen={() => openFullscreen(imageScreen || image)}
            />
          </div>

          <div className="flex flex-col lg:w-1/2 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-[28px] font-semibold">{projectTitle}</h1>
              <a href={Demo} target="_blank">
                <LuCircleArrowOutUpRight className="text-[#0C96E2]" size={35} />
              </a>
            </div>
            <p className="text-[14px] font-medium text-[#A6A6A6]">{history}</p>
            <p className="pt-[11px] pb-[15px] font-normal text-[18px] text-[#1D2130] dark:text-dark-mainText">{details}</p>
            <p className="text-[#1D2130] pb-[5px]"><span className="font-semibold">Basic Languages: </span>{languages}</p>
            {frameWork && <p className="text-[#1D2130] pb-[5px]"><span className="font-semibold">Framework: </span>{frameWork}</p>}
            {libraries && <p className="text-[#1D2130] pb-[5px]"><span className="font-semibold">Libraries: </span>{libraries}</p>}
            <a href={repo} target="_blank" className="bg-[#0C96E2] text-white rounded-[8px] w-[163.47px] h-[51px] text-[16px] font-medium flex justify-center items-center mx-auto lg:mx-0">
              Github Repo
            </a>
          </div>
        </section>

        {fullscreenImage && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center" onClick={() => document.exitFullscreen()}>
            <img
              ref={fullImgRef}
              src={fullscreenImage}
              className="max-w-full max-h-full cursor-pointer"
              alt="Fullscreen"
            />
          </div>
        )}
      </div>

      <img src={mode ? "/assets/img/dark-line.png": "/assets/img/line-light-dot.png"} className=" w-full h-4 lg:h-full object-cover" />


      <section className="lg:h-[460px]  w-full py-10 lg:px-[70px] pb-20 relative z-10 ">
        <div className="lg:text-start text-center">
          <p className="text-[#0C96E2] text-[20px] font-medium">Portfolio</p>
          <h2 className="text-[40px] font-semibold">The Best <span className="text-[#0C96E2]">Projects</span></h2>
        </div>
        <ProjectSlider
          projects={projects}
          onFullScreen={openFullscreen}
          onDetailsClick={(project) => {
            setSelectedProject(project);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </section>
    </div>
    </>
  );
};

export default DetailsBage;
