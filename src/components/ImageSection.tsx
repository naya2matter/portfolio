import { BsArrowsFullscreen } from "react-icons/bs";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface Props {
    image: string;
    title: string;
    imageScreen?:string,
    showOverlayButtons?: boolean; 
    onFullscreen?: () => void;
    onDetailsClick?: () => void;
    }

const ImageSection = ({ image, title, showOverlayButtons = false, onFullscreen }: Props) => {
const imageRef = useRef<HTMLDivElement>(null);
const handleFullscreenClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (onFullscreen) onFullscreen();
};


    return (
        <div className="relative w-full h-full rounded-[8px] overflow-hidden shadow-md"   ref={imageRef}>
        <img src={image} alt={title} className="w-full h-full object-cover rounded-[8px] " />
        <div className="bg-[#00000080] w-full h-full absolute top-0 z-20 opacity-0 rounded-[8px] hover:opacity-100 duration-300 flex justify-center items-center gap-3.5">
            <button  className=" text-white mx-2 cursor-pointer" onClick={handleFullscreenClick}>
                <BsArrowsFullscreen size={20} />
            </button>
            {showOverlayButtons && (
                <Link
                    to={`/details/${title}`}
                    className="text-white mx-2"
                    onClick={(e) => e.stopPropagation()}
                >
                    <LuCircleArrowOutUpRight size={28} className="text-white" />
                </Link>
            )}

        </div>
        </div>
    );
    };

export default ImageSection;
