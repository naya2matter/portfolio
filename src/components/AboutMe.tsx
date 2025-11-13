
import { useContext } from "react";
import SkillBar from "./SkillBar";
import { useInView } from "react-intersection-observer";
import { ModeContext } from "../Pages/HomeBage";




interface AboutMeProps{
    title:string,
    description:string,
    skills: [
        { name: string, level: number },
        { name: string, level: number },
        { name: string, level: number },
        { name: string, level: number },
        ]

}

function AboutMe({title,description,skills}:AboutMeProps) {
    const mode = useContext(ModeContext)
    
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    return (
        
    <div className="flex  justify-between items-center flex-wrap px-5 md:px-[70px] py-[50px] max-w-screen min-h-[530px] flex-col-reverse lg:flex-row">
        
        <img src={mode? "./assets/img/dark-about.png":"./assets/img/s1.png"} className="w-1/2 h-1/2" />
        <div className="max-w-[598.69px] min-h-[513px] md:text-start text-center">
            <h1 className="text-[40px] font-semibold">{title}</h1>
            <p className="text-[18px] font-normal max-w-[540px]">{description}</p>
            <div ref={ref} className="w-full mx-auto mt-10 p-4  rounded-lg bg-white   dark:bg-dark-mainBackground dark:text-dark-mainText">
                {skills.map((skill) => (
                    <SkillBar 
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    animate={inView}
                    />))}
            </div>
        </div>
    </div>
    )
}

export default AboutMe
