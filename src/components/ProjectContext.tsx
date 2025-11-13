import { createContext, useContext, useState } from "react";
import { allProjects } from "./ProjectsData";

export interface Project {
    image: string,
    imageScreen: string,
    Demo: string,
    title: string,
    languages?: string,
    details?:string,
    history?:string,
    libraries?:string,
    frameWork?:string,
    repo?:string,
    onFullScreen?: (img: string) => void

    }

    interface ProjectContextType {
    selectedProject: Project | null,
    setSelectedProject: (project: Project) => void,
    projects: Project[]
    }

    const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

    export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedProject, setSelectedProjectState] = useState<Project | null>(null);


    const setSelectedProject = (project: Project) => {
        setSelectedProjectState(project);
    };

    return (
        <ProjectContext.Provider value={{ selectedProject, setSelectedProject , projects: allProjects}} >
        {children}
        </ProjectContext.Provider>
    );
    };

    export const useProjectContext = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useProjectContext must be used within a ProjectProvider");
    }
    return context;
};
