import { ArrowRight, ArrowRight2 } from "iconsax-react";
import React, { useState } from "react";
import TaskSetup from "../../components/project/TaskSetup";
import BugSetup from "../../components/project/BugSetup";

const ProjectSetup = () => {
  const [staged, setStaged] = useState("Task Stage");

  const Stages = [
    { id: 1, name: "Task Stage" },
    { id: 2, name: "Bug Stage" },
  ];
  return (
    <div className="p-[20px] bg-[#F2F2F2] h-screen ">
      {/* <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-full w-full bg-[#ffff] ">
        <p>ProjectSetup</p>
      </div> */}
      <div className="flex justify-between gap-[30px]">
        <div className="w-[411px] rounded-lg overflow-hidden">
          {Stages &&
            Stages.map((stage, index) => (
              <button
                onClick={() => setStaged(stage.name)}
                className={`py-[18px] w-full px-[28px] flex-between ${
                  stage.name === staged
                    ? "bg-[#F05800] text-[#fff] "
                    : "bg-[#fff] text-[#000000]"
                } `}
              >
                {stage?.name}
                <ArrowRight2 variant="Linear" size="20" />
              </button>
            ))}
        </div>
        {staged === "Task Stage" ? <TaskSetup /> : <BugSetup />}
      </div>
    </div>
  );
};

export default ProjectSetup;
