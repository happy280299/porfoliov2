import React from "react";

export interface SkillItemProps {
  name: string;
  icon: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => {
  return (
    <div className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 min-w-[161px]">
      <div className="group-hover:scale-110 transition-transform duration-300 mb-4">
        <img
          alt={name}
          loading="lazy"
          width={24}
          height={24}
          decoding="async"
          className="w-8 h-8"
          src={icon}
        />
      </div>
      <p className="text-xs font-medium group-hover:text-amber-400 transition-colors duration-300">
        {name}
      </p>
    </div>
  );
};

export default SkillItem;
