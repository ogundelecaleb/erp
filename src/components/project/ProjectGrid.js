import React from 'react'
import { ProjectData } from "../Data";
import {
    Add,
    Calendar,
    DocumentDownload,
    DocumentUpload,
    ElementEqual,
    Layer,
    Message2,
    RowHorizontal,
    SearchNormal1,
  } from "iconsax-react";


const ProjectGrid = ({data}) => {
  return (
    <div className="overflow-auto">
          <div className="bg-[#F9FAFB] p-[10px] md:p-[16px] h-full overflow-auto lg:p-[20px] grid grid-cols-2  md:grid-cols-4 gap-[20px] ">
            {!data
              ? ""
              : data.map((project) => (
                  <div className="shadow shadow-[#F0F2F5]/32 px-[16px] py-[16px] md:py-[20px] bg-white rounded-[8px]">
                    <div className="flex justify-between items-center mb-[10px] md:mb-[16px]">
                      <button
                        className={`rounded-[20px] md:rounded-[40px] w-[60px] md:w-[74px] py-[2px] md:py-[4px] ${
                          project.status === "On Hold"
                            ? "bg-[rgb(255,245,230)] text-[#FF9800]"
                            : project.status === "Ongoing"
                            ? "bg-[#F9FAFB] text-[#667185]"
                            : "bg-[#EDF7EE] text-[#4CAF50]"
                        }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                      >
                        <p>{project?.status}</p>
                      </button>

                      <button className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] rounded-[8px] hover:bg-[#F7F9FC] flex justify-center items-center">
                        <img
                          src="./assets/3dot.png"
                          className="h-[16px] w-[16px] md:h-[20px] md:w-[20px]"
                          alt="3 dots"
                        />
                      </button>
                    </div>

                    <div>
                      <p className="text-[14px] md:text-[16px]  text-[#000]  font-semibold leading-[20px] md:leading-[24px] tracking-[0.2px] mb-[18px]">
                        {project?.name}
                      </p>

                      <p className="text-[12px] md:text-[14px] text-[#667185]  font-normal leading-[18px] md:leading-[20px]">
                        {project?.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-[8px] mt-[16px] md:mt-[20px]">
                      <Calendar variant="Linear" color="#667185" size="20" />
                      <p className="text-[12px] md:text-[14px] text-[#667185]  font-normal leading-[18px] md:leading-[20px]">
                        {project?.end_date}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-[8px] mt-[16px] md:mt-[20px] text-[12px] md:text-[14px] text-[#667185]  font-normal">
                      <img
                        src={"./assets/userimage.png" ||project?.image}
                        alt="participant"
                        className="w-[24px] h-[24px] rounded-full "
                      />

                      <div className="flex items-center gap-[8px]">
                        <div className="flex items-center gap-[4px]">
                          <p>{project?.submit}</p>
                          <Layer variant="Linear" color="#667185" size="16" />
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <p>{project?.comment}</p>
                          <Message2
                            variant="Linear"
                            color="#667185"
                            size="16"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
  )
}

export default ProjectGrid