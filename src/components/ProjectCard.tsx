import { LuCircleArrowOutUpRight } from "react-icons/lu";
import ImageSection from "./ImageSection";

export interface Projects {
    image: string,
    imageScreen: string,
    Demo: string,
    title: string,
    languages?: string,
    details?: string,
    history?: string,
    frameWork?: string,
    libraries?: string,
    repo?: string,
    }
    interface ProjectCardProps extends Projects {
        onFullScreen?: (img: string) => void;
        onDetailsClick?: () => void;
    }


    const ProjectCard = ({ image, imageScreen, Demo, title, languages,onFullScreen,onDetailsClick }: ProjectCardProps) => {

    
    return (
        <div className="w-[350px] h-[320px] rounded-[8px]  border-[0.3px] border-solid border-[#BEC0BF] dark:shadow-[0_4px_7px_0_#ffffff33] shadow-[0_4px_7px_0_#00000033] bg-white overflow-hidden dark:bg-dark-mainBackground dark:text-dark-mainText">
        <div className="relative w-full h-[220px]">
            <ImageSection
                image={image}
                title={title}
                showOverlayButtons={true}
                onFullscreen={() =>  onFullScreen?.(imageScreen || image)}
                onDetailsClick={onDetailsClick}
            />
        </div>

        <div className="p-4 flex justify-between items-center">
            <div>
            <h5 className="font-semibold text-lg" onClick={onDetailsClick}>{title}</h5>
            <p className="text-sm text-gray-600 dark:text-[#71abca]">{languages}</p>
            </div>
            <a href={Demo} target="_blank" >
            <LuCircleArrowOutUpRight className="text-[#0C96E2]" size={24} />
            </a>
        </div>
        </div>
    );
};

export default ProjectCard;
