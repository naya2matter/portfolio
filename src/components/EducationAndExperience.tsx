import { FaArrowUp } from "react-icons/fa";
import Experience from "./Experience";
import { useEffect, useRef, useState } from "react";

interface EducationProps {
    smallTitle: string;
    header: string;
}

function EducationAndExperience({ smallTitle, header }: EducationProps) {
const supTitle1 =`Bachelor’s Degree in Information Engineering — Artificial Intelligence
                    Damascus University (2018 – 2024)
                    Specialized in Artificial Intelligence and Software Engineering
                    Gained strong background in algorithms, data structures, and web technologies `;
const supTitle2 =  `Frontend Development:  HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Redux Toolkit, Tailwind CSS, Bootstrap `;

const supTitle3=`Frontend Developer Intern — Vica Web Solution
                (Nov 2024 – Nov 2025)
                Developed responsive web interfaces using React.js, Next.js, and Tailwind CSS
                Integrated REST APIs and managed dynamic data with Redux Toolkit
                Collaborated with backend developers to ensure efficient data flow and performance`
const supTitle4=`Backend & Databases:   Node.js (basic), REST APIs, MySQL, PostgreSQL, MongoDB .                                            
                Tools & Platforms: Git, GitHub, Vercel`
const sectionRef = useRef<HTMLDivElement | null>(null);
const [showButton, setShowButton] = useState(false);

useEffect(() => {
    const handleScroll = () => {
    const section = sectionRef.current;
    if (!section) return;
    const positionSection = section.getBoundingClientRect();
    const isVisible = positionSection.top < window.innerHeight && positionSection.bottom > 0;
    setShowButton(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

return (
    <div className="relative" ref={sectionRef}>
    <img src="./assets/img/bg-s2-1.svg" className="w-[130px] h-[249px] absolute right-0 top-12 -z-20 hidden md:block"/>
    <img src="./assets/img/bg-s2-2.svg" className="w-[130px] h-[249px] absolute left-0 top-[369px] -z-20 hidden md:block"/>

    <div className="max-w-[678px] h-auto pt-[75px] mx-auto flex flex-col justify-center items-center text-center px-4">
        <p className="text-[#0C96E2] text-[20px] font-medium">{smallTitle}</p>
        <h1 className="text-[40px] font-semibold">{header}</h1>
    </div>

    <div className="flex flex-col lg:flex-row justify-between gap-8 py-[70px] px-4 md:px-[70px] ">
        <Experience title1="Education" suptitle1={supTitle1} title2="Skills / Specializations" suptitle2={supTitle2} />
        <Experience title1="Experience" suptitle1={supTitle3} title2="Skills / Specializations" suptitle2={supTitle4} />
    </div>

    <button className={`fixed bottom-6 right-6 md:right-[70px] bg-blue-600 text-white rounded-[12px] shadow-lg cursor-pointer transition-opacity duration-1000 ${ showButton ? "opacity-100" : "opacity-0 pointer-events-none" } z-20`} onClick={scrollToTop}>
        <FaArrowUp className="w-[25px] h-[25px] m-[12.51px]" />
    </button>
    </div>
);
}

export default EducationAndExperience;

