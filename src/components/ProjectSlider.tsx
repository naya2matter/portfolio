import { useRef, useState } from "react";
import ProjectCard, { type Projects } from "./ProjectCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useProjectContext } from "./ProjectContext";

interface Props {
    projects: Projects[];
    onDetailsClick: (project: Projects) => void;
    onFullScreen: (img: string) => void;
    }

    const ProjectSlider = ({ projects, onFullScreen ,onDetailsClick }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const { setSelectedProject } = useProjectContext();


    const scrollByStep = (direction: number) => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const card = container.children[0] as HTMLElement;
        if (!card) return;

        const style = window.getComputedStyle(container);
        const gap = parseInt(style.columnGap || style.gap || "0", 10);
        const cardWidth = card.offsetWidth + gap;

        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = projects.length - 1;
        if (newIndex >= projects.length) newIndex = 0;

        setCurrentIndex(newIndex);

        container.scrollTo({
            left: newIndex * cardWidth,
            behavior: "smooth",
        });
    };

    const handleNext = () => scrollByStep(1);
    const handlePrev = () => scrollByStep(-1);

    const handleGoToDetails = (project: Projects) => {
        if (onDetailsClick) {
            onDetailsClick(project);
        } else {
            setSelectedProject(project);
            navigate(`/details/${project.title}`);
        }
    };

    return (
        <div className=" lg:px-8 px-4 flex flex-col gap-3 lg:gap-0 py-5 relative z-10  ">

            <div className="lg:top-[-40px] flex lg:gap-3 z-10 justify-between lg:justify-end lg:pb-0">
                <button onClick={handlePrev}>
                <BsArrowLeftCircle size={30} className="text-[#0C96E2] hover:bg-[#0C96E2] hover:rounded-full hover:text-white dark:hover:text-black" />
                </button>
                <button onClick={handleNext}>
                <BsArrowRightCircle size={30} className="text-[#0C96E2] hover:bg-[#0C96E2] hover:rounded-full hover:text-white dark:hover:text-black" />
                </button>
            </div>

            <div className="flex overflow-x-hidden gap-10 pt-5 " ref={containerRef}>
                {projects.map((proj, idx) => (
                <div key={idx} className="flex-shrink-0 w-[350px] ">
                    <ProjectCard
                    {...proj}
                    onDetailsClick={() => handleGoToDetails(proj)}
                    onFullScreen={() => onFullScreen(proj.imageScreen || proj.image)}
                    />
                </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSlider;
