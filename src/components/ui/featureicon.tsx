import React from "react";

const FeatureIcon: React.FC = ({ icon }:{icon: React.ReactNode}) => {
  return (
    <div className="grid grid-cols-1 grid-row-1 p-3 text-gray-700 w-fit border border-gray-200 rounded-[10px] bg-white shadow-sm">
      {icon}
    </div>
  );
};

export default FeatureIcon;
