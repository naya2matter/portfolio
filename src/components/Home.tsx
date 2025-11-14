
import AboutMe from "./AboutMe"
import EducationAndExperience from "./EducationAndExperience"
import Hero from "./Hero"
import Section3 from "./Section3"
import ContectUs from "./ContectUs";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../Pages/HomeBage"
import Projects from "./Projects";

type SectionRefs = Record<string, React.RefObject<HTMLDivElement | null>>;


function Home() {
  const mode = useContext(ModeContext)
  const sectionRefs = useOutletContext<SectionRefs>();
  const Paragraph="If you’re not happy with the design after the first draft,I’ll refund your deposit,"
  return (
    <div className=" relative">
      <div id="home" ref={sectionRefs.home} className=" dark:bg-dark-mainBackground dark:text-dark-mainText">
        <Hero title='I’m Naya, Full-Stack Developer' suptitle='Agency-quality Webflow websites with the personal touch of a freelancer.' btn='Download Cv'/>
      </div>
    
      <img src={mode ? "./assets/img/dark-line.png": "./assets/img/line-light-dot.png"} className=" dark:bg-dark-mainBackground w-full " />
      
      <div id="about" ref={sectionRefs.about} className=" dark:bg-dark-mainBackground dark:text-dark-mainText">
        <AboutMe title='About Me ' description='Get to know more about me, my background, and what drives me to create amazing digital experiences.' 
        skills={[{ name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "Javascript", level: 95 },
                { name: "React", level: 90 }]}
        />
      </div>
      
      <div  id="education" ref={sectionRefs.education}  className=" dark:bg-dark-mainBackground dark:text-dark-mainText">
        <EducationAndExperience smallTitle="Education And Experience" header="Education && Experience"/>
      </div>
      
      <div ref={sectionRefs.section3}  className=" dark:bg-dark-mainBackground dark:text-dark-mainText">
        <Section3 title="Try me out, risk free!" paragraph={Paragraph} spanParagraph="no questions asked" btn="Contect" contactRef={sectionRefs.contact}/>
      </div>

      <div id="projects" ref={sectionRefs.projects}  className=" dark:bg-dark-mainBackground dark:text-dark-mainText">
        <Projects/>
      </div>

      <div id="contact" ref={sectionRefs.contact}  className=" dark:bg-dark-mainBackground dark:text-dark-mainText">
        <ContectUs ref={sectionRefs.contact } />
      </div>
      
    </div>

  )
}

export default Home
