import React from "react";
import { Activities } from "../Data";
import { Menu } from "iconsax-react";

const ProjectActivities = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-[8px] w-full h-[38vh] p-[4px] md:p-[10px] xl:p-[24px] overflow-auto">
      {Activities &&
        Activities.map((action) => (
          <div className="flex gap-3 mb-[24px] md:mb-[32px]" >
            <Menu variant="Bold" color="#292D32" size="12" className="self-end mb-[4px]" />
            <div className="flex-1">
              {" "}
              <p className=" text-[14px]  text-[#000] leading-[20px] font-medium text-left mb-[12px] ">
                {action.name}
              </p>
              <p className=" text-[14px]  text-[#667185] leading-[20px] font-medium text-left  ">
                {action.note}
              </p>
            </div>

            <p className=" text-[14px]  text-[#667185] leading-[20px] font-medium text-left self-end ">
              {action.time}
            </p>
          </div>
        ))}
    </div>
  );
};

export default ProjectActivities;
