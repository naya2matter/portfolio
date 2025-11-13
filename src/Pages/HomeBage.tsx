import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { createContext, useEffect, useRef, useState } from "react"
import Footer from "../components/Footer"


export const ModeContext = createContext<Boolean>(false)

function HomeBage() {
  const [mode , setMode]= useState<Boolean>(false)

  const sectionRefs = {
      home: useRef<HTMLDivElement>(null),
      about: useRef<HTMLDivElement>(null),
      education: useRef<HTMLDivElement>(null),
      projects: useRef<HTMLDivElement>(null), 
      contact: useRef<HTMLDivElement>(null),
  }
  type SectionId = keyof typeof sectionRefs;

  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (id: SectionId) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };


  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionRefs) as SectionId[];
      for (const id of sections) {
        const ref = sectionRefs[id].current;
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  


  return (
    <div className={`font-poppins ${mode ? 'dark' : ''}`} >
    <ModeContext.Provider value={mode} >
      <NavBar logo="Naya" items={[{id:'home',content:'Home'},{id:'about',content:'About me'}, {id:'education' , content:'Education'},{id:'projects', content:'Projects'},{id:'contact', content:'Contact'}]}  
              sectionRefs={sectionRefs}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
              setMode={setMode}
              />
      <Outlet context={sectionRefs} />
      <Footer/>
    </ModeContext.Provider>
    </div>
  )
}

export default HomeBage
