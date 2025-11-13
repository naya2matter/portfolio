import { useContext, useState, type Dispatch, type RefObject, type SetStateAction } from "react";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { ModeContext } from "../Pages/HomeBage";

type SectionRefs = {
    home: RefObject<HTMLDivElement|null>;
    about: RefObject<HTMLDivElement|null>;
    education: RefObject<HTMLDivElement|null>;
    projects: RefObject<HTMLDivElement|null>;
    contact: RefObject<HTMLDivElement|null>;
};

type SectionId = keyof SectionRefs;

interface Items {
    id: SectionId;
    content: string;
}

interface NavItems {
    logo: string;
    items: Items[];
    setMode: Dispatch<SetStateAction<Boolean>>;
    sectionRefs: SectionRefs;
    activeSection: string;
    scrollToSection: (id: SectionId) => void;
}

function NavBar({ logo, items, scrollToSection, setMode, activeSection}: NavItems) {
const mode = useContext(ModeContext);
const [menuOpen, setMenuOpen] = useState(false);

return (
    <div className="w-full px-[30px] py-4 flex justify-between items-center fixed top-0 z-30 bg-white dark:bg-dark-mainBackground dark:text-dark-mainText shadow-md">
    <h1 className="font-semibold text-2xl">{logo}</h1>

    <ul className="hidden md:flex items-center gap-9">
        {items.map((item) => (
        <li key={item.id} 
            className={`font-medium text-[16px] cursor-pointer transition 
            ${ activeSection == item.id ? "text-blue-600" : ""}`} 
            onClick={() =>  {
                scrollToSection(item.id);
                setMenuOpen(false);}}
        >
            {item.content}
        </li>
        ))}
    </ul>

    <div className="flex items-center gap-4">
        <button className="cursor-pointer" onClick={() => setMode((prev) => !prev)}>
            {mode ? <CiLight className="w-[26px] h-[26px]" /> : <FaMoon className="w-[26px] h-[26px]" />}
        </button>

        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes  className="w-[26px] h-[26px]" /> : <FaBars  className="w-[26px] h-[26px]"/>}
        </button>
    </div>

    {menuOpen && (
        <ul className="absolute top-[65px] left-0 w-full bg-white dark:bg-dark-mainBackground text-center py-4 space-y-4 md:hidden shadow-lg">
        {items.map((item) => (
            <li key={item.id} 
                className={`font-medium text-[16px] cursor-pointer 
                ${activeSection === item.id ? "text-blue-600" : ""}`}
                onClick={() => {scrollToSection(item.id);
                                setMenuOpen(false);}}
            >
            {item.content}
            </li>
        ))}
        </ul>
    )}
    </div>
);
}

export default NavBar;
