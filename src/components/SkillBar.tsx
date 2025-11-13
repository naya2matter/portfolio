import React from "react";

export type SkillBarProps = {
    name: string;
    level: number;
    animate: boolean; 
};

const SkillBar: React.FC<SkillBarProps> = ({ name, level,animate }) => {
    return (
        <div className="mb-4 transition-all duration-1000 ">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700  dark:text-dark-mainText">{name}</span>
            <span className="text-sm font-medium text-blue-600  dark:text-dark-mainText">
            {animate ? `${level}%` : "0%"}
            </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
            style={{ width: animate ? `${level}%` : "0%" }}
            ></div>
        </div>
        </div>
    );
};

export default SkillBar;
