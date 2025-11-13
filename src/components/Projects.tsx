import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { GoArrowUpRight } from "react-icons/go";
import { allProjects } from "./ProjectsData";



    const Projects = () => {
        const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
        const fullImgRef = useRef<HTMLImageElement>(null);

        const openFullscreen = (img: string) => {
            setFullscreenImage(img);
        };

        useEffect(() => {
            if (fullscreenImage && fullImgRef.current) {
            const imgElement = fullImgRef.current;

            const enterFull = async () => {
                try {
                await imgElement.requestFullscreen();
                } catch (e) {
                console.error("Fullscreen error:", e);
                }
            };

            enterFull();

            const handleExit = () => {
                setFullscreenImage(null);
            };

            document.addEventListener("fullscreenchange", () => {
                if (!document.fullscreenElement) {
                handleExit();
                }
            });

            return () => {
                document.removeEventListener("fullscreenchange", handleExit);
            };
            }
    }, [fullscreenImage]);

    return (
        <div className="w-full lg:px-[70px] px-6 py-[94px] relative">

        {fullscreenImage && (
            <img
            ref={fullImgRef}
            src={fullscreenImage}
            alt="Fullscreen Project"
            onClick={() => document.exitFullscreen()}
            className="fixed top-0 left-0 w-full h-full object-contain bg-black z-[9999] cursor-pointer"
            />
        )}

        <div className="flex justify-between items-center flex-wrap w-full text-center lg:text-start pb-10 lg:pb-0">
            <div className="pb-14 max-w-[400px]">
            <h5 className="text-[#0C96E2] font-medium text-[20px]">Portfolio</h5>
            <h2 className="text-[40px] font-semibold">
                My Creative Works Latest <span className="text-[#0C96E2]">Projects</span>
            </h2>
            </div>
            <a href="https://github.com/naya2matter"
            target="_blank"
            className="w-[163.47px] h-[50px] text-white bg-[#0C96E2] rounded-[8px] flex justify-center items-center mx-auto lg:mx-0">
            View Github <GoArrowUpRight />
            </a>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
            {allProjects.map((project, index) => (
            <ProjectCard
                key={index}
                image={project.image}
                imageScreen={project.imageScreen}
                Demo={project.Demo}
                title={project.title}
                languages={project.languages}
                onFullScreen={openFullscreen}
                history={project.history}
                details={project.details}
                frameWork={project.frameWork}
                libraries={project.libraries}
                repo={project.repo}
            />
            ))}
        </div>
        </div>
    );
};

export default Projects;
