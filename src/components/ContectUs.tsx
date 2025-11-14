import { forwardRef, useRef } from "react"
import { FiPhoneCall } from "react-icons/fi"
import { GrLocation } from "react-icons/gr"
import { MdOutlineMailOutline } from "react-icons/md"
import type { InfornationCardProps } from "./ContectInfornationCard"
import ContectInfornationCard from "./ContectInfornationCard"
import { TelegramSender } from "./TelegramSender"

const infornationCard:InfornationCardProps[] =[
    {
        icon: <FiPhoneCall />,
        title:"Call me",
        data:"+963981401383"
    },{
        icon: <MdOutlineMailOutline />,
        title:"Email me",
        data:"nayamatternaya@gmail.com"
    },{
        icon: <GrLocation />,
        title:"Address",
        data:"Al-Swaida_Syria"
    }]
const ContectUs = forwardRef<HTMLDivElement>((_, ref)=> {
    const formRef = useRef<HTMLFormElement>(null);
    const { sendMessage, loading, error, success } = TelegramSender();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formRef.current) {
        const formData = new FormData(formRef.current);
        const data = {
            name: formData.get("user_name") as string,
            email: formData.get("user_email") as string,
            phone: formData.get("user_phone") as string,
            message: formData.get("message") as string,
        };
        sendMessage(data);
        formRef.current.reset();
        }
    };

    
    return (
        <section ref={ref} className="lg:px-[70px] px-[20px] pb-[94px]  min-h-[350px]">

            <div className="pb-14  text-center lg:text-start">
                <h5 className="text-[#0C96E2] font-medium text-[20px]">Contect</h5>
                <h2 className="text-[40px] font-semibold">
                    Let’s Discuss Your  <span className="text-[#0C96E2]">Project</span>
                </h2>
            </div>
            
            <div className="flex gap-[60px] flex-wrap">

            <div className="flex flex-col gap-20 lg:mx-0 mx-auto ">
                {infornationCard.map((card,index)=>(
                    <ContectInfornationCard 
                        key={index}
                        icon={card.icon}
                        data={card.data}
                        title={card.title}
                    />
                ))}
            </div>

            <div className="w-full lg:max-w-[780px] min-h-[330px]">
                <form ref={formRef} onSubmit={handleSubmit}  className=" dark:text-dark-mainText lg:grow  w-full min-h-[330px]    ">

                    <div className=" w-full flex flex-col lg:flex-row justify-center items-center gap-6  ">
                        <input type="text" name="user_name" placeholder="Full name" required className="dark:shadow-[0_4px_7px_0_#ffffff33] shadow-[0_4px_7px_0_#00000033] outline-0  w-full lg:w-1/2 rounded-md  border-[0.3px] border-solid border-[#BEC0BF] h-[60px] pl-7 text-[#92929D]"/>
                        <input type="text" name="user_email" placeholder="Your email" required className="dark:shadow-[0_4px_7px_0_#ffffff33] shadow-[0_4px_7px_0_#00000033] outline-0  w-full lg:w-1/2 rounded-md border-[0.3px] border-solid border-[#BEC0BF] h-[60px] pl-7 text-[#92929D]" />
                    </div>

                    <input type="text" name="user_phone" placeholder="Phone number" required className=" dark:shadow-[0_4px_7px_0_#ffffff33] shadow-[0_4px_7px_0_#00000033] outline-0  block my-7 w-full rounded-md border-[0.3px] border-solid border-[#BEC0BF] h-[60px] pl-7 text-[#92929D]"/>
                    <textarea  name="message" placeholder="Massage" required className=" dark:shadow-[0_4px_7px_0_#ffffff33] shadow-[0_4px_7px_0_#00000033] outline-0 block w-full rounded-md border-[0.3px] border-solid border-[#BEC0BF] h-[180px] p-7 mb-5  text-[#92929D]"/>
                    <button type="submit" disabled={loading} className="my-9  w-[160px] mx-auto lg:mx-0 h-[50px] bg-[#0C96E2] text-white rounded-lg flex justify-center items-center hover:scale-105 cursor-pointer hover:bg-[#0C96E299]">
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && <p className="text-green-500">It's Done</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    
                </form>

            </div>
            </div>
        </section>
    )
})

export default ContectUs
