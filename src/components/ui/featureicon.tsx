import { cn } from "@utils/index";
import React from "react";

interface FeatureIconProps {
  icon: React.ReactNode;
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon, className }) => {
  return (
    <div
      className={cn(
        `grid grid-cols-1 p-3 shrink-0 h-fit text-gray-700 bg-white border border-gray-200 shadow-sm grid-row-1 w-fit rounded-[10px]`,
        className
      )}
    >
      {icon}
    </div>
  );
};

export default FeatureIcon;
