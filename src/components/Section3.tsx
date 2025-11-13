import type { RefObject } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Section3Props {
    title: string;
    paragraph: string;
    spanParagraph: string;
    btn: string;
    contactRef: RefObject<HTMLDivElement | null>;
}

function Section3({ title, paragraph, spanParagraph, btn, contactRef }: Section3Props) {
const scrollToContact = () => {
    if (contactRef.current) {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
};

return (
    <div className="relative w-full min-h-[365px] px-8 sm:px-8 md:px-16 py-16 md:py-24">
    <img
        src="./assets/img/img-s3.png"
        className="w-full h-full  absolute top-0 left-0 z-0 px-5 "
        alt="Background"
    />
    <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-center gap-6">
        <div className="w-full md:w-2/3 md:text-start text-center" >
        <h1 className="text-3xl sm:text-4xl font-medium text-white pb-2">{title}</h1>
        <p className="text-white text-base sm:text-lg leading-relaxed">
            {paragraph}
            <span className="font-bold"> {spanParagraph}</span>
        </p>
        </div>
        <button
        onClick={scrollToContact}
        className="flex items-center justify-center gap-2 w-fit px-5 py-3 rounded-md text-white bg-[#0C96E2] hover:bg-[#0a7dc1] transition"
        >
        {btn}
        <FaArrowRight />
        </button>
    </div>
    </div>
);
}

export default Section3;
