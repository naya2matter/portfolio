import { useContext } from "react";
import { ModeContext } from "../Pages/HomeBage";

interface heroItems {
  title: string;
  suptitle: string;
  btn: string;
}

function Hero({ title, suptitle, btn }: heroItems) {
  const mode = useContext(ModeContext);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-dark-mainBackground dark:text-white">
      
      <img src="./assets/img/Lines.svg" className="absolute top-0 left-0 pt-48 z-0" alt="lines"/>

      <img src={mode ? "./assets/img/dark-image.png" : "./assets/img/BlurGradient.png"} className="absolute top-[200px] left-0 max-w-[502px] min-h-[377px] z-0" alt="bg" />

      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-[70px] pt-[130px] gap-8 relative z-10">
        <div className="max-w-[646px] text-center md:text-left">
          <h1 className="text-[40px] md:text-[55px] font-bold pb-2 ">
            <span className="text-[40px] md:text-[55px] font-normal">HEY!</span> {title}
          </h1>
          <p className="text-[16px] font-normal pb-[30px] max-w-[400px] mx-auto md:mx-0">{suptitle}</p>
          <a href="./assets/files/Naya-Radi-Matter-CV.pdf" download="My-CV.pdf">
            <button className="w-[155px] h-[50px] rounded-md cursor-pointer bg-[#FFFFFF99] dark:bg-[#0C96E299] font-semibold mb-3">
              {btn}
            </button>
          </a>
        </div>

        <img src="./assets/img/naya-photo.png" alt="naya image" className="w-[200px] md:w-[447px]   h-auto object-cover  " />
      </div>
    </div>
  );
}

export default Hero;
