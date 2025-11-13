import type { JSX } from "react"

export interface InfornationCardProps{
      icon:JSX.Element,
      title:string,
      data:string
} 

const ContectInfornationCard = ({icon, title, data}:InfornationCardProps) => {
  return (
    <div className=" flex items-center text-center lg:text-start sm:flex-row flex-col gap-5 px-6">
      <p className=" text-[#0C96E299] text-5xl ">{icon}</p>
      <div className="flex justify-start flex-col  gap-4">
        <p className=" text-[#92929D] text-[16px] font-normal">{title}</p>
        <h5 className="text-[16px] font-medium">{data}</h5>
      </div>
    </div>
  )
}

export default ContectInfornationCard
