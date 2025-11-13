export interface ExperienceProps {
    title1: string;
    suptitle1: string;
    title2: string;
    suptitle2: string;
}

function Experience({ title1, suptitle1, title2, suptitle2 }: ExperienceProps) {
return (
    <div className="max-w-[498px] min-h-[268px] flex  gap-0 md:gap-12 items-start">
    <img src="./assets/img/s2.png" className="w-full md:w-auto max-h-[350px] object-contain" alt="experience image"/>
    <div className="flex flex-col gap-10 text-left">
        <div>
        <h1 className="text-[25px] font-medium pb-[14px]">{title1}</h1>
        <p className=" text-[16px] text-[#98A2B3]">{suptitle1}</p>
        </div>
        <div>
        <h1 className="text-[25px] font-medium pb-[10px]">{title2}</h1>
        <p className=" text-[16px] text-[#98A2B3]">{suptitle2}</p>
        </div>
    </div>
    </div>
);
}

export default Experience;
