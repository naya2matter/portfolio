import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"
import { RiTelegram2Fill } from "react-icons/ri"

const Footer = () => {
    return (
        <div className="w-full   lg:px-[70px] px-6 py-10  dark:bg-dark-mainBackground dark:text-dark-mainText">
        <div className=" border-t-1  " >
            <div className="pt-10 flex lg:justify-between items-center flex-col lg:flex-row justify-center gap-2.5">
                <p>@ 2025. All Rights Reserved</p>
                <p>Develpoment by Naya</p>
                <div className="flex justify-center items-center gap-3.5">
                    <a href="https://www.facebook.com/naya.matter" target="blank">
                        <FaFacebook className="text-[#0C96E2]"size={25}/>
                    </a>
                    <a href="https://www.instagram.com/naya.matter" target="blank">
                        <AiFillInstagram className="text-[#0C96E2]" size={25}/>
                    </a>
                    <a href="https://t.me/nayamatter" target="blank">
                        <RiTelegram2Fill className="text-[#0C96E2]" size={25}/>
                    </a>
                </div>
            </div>
        
        </div>
        </div>
    )
}

export default Footer
