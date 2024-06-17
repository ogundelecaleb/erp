import {
  Add,
  Calendar,
  Calendar2,
  CloseCircle,
  Maximize4,
  Star,
} from "iconsax-react";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import ModalLeft from "./ModalLeft";
import { Seekbar } from 'react-seekbar';

const Milestone = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(0);

  const handleSeek = (position) => {
    setPosition(position);
  };

  function HandleCreateModalClose() {
    setIsCreateOpen(false);
  }

  function HandleEditModalClose() {
    setIsEditOpen(false);
  }

  function ToggleEditModal() {
    setIsEditOpen(!isEditOpen);
  }

  function ToggleCreateModal() {
    setIsCreateOpen(!isCreateOpen);
  }
  return (
    <div>
      <div className="bg-[#F9FAFB] rounded-[8px] w-full h-[38vh] p-[4px] md:p-[10px] xl:p-[24px] overflow-auto">
        <button className="mx-auto gap-2 px-[12px] md:px-[18px] py-[11px] flex-item border-[0.8px] border-[#D0D5DD] bg-white rounded-[40px] ">
          <Star color="#F05800" size={"24"} />
          <p className="whitespace-nowrap  text-[16px] md:text-base leading-[24px] md:leading-[27px] tracking-[0.2px] text-[#000] font-medium text-left  ">
            Project milestone
          </p>
        </button>
        <ul>
          <li>
            <div className="h-[32px] w-[0.8px] bg-[#D0D5DD] mx-auto" />

            <div className="border-[0.8px]  border-[#D0D5DD] bg-white rounded-2xl w-[90%] md:w-[500px] xl:w-[611px] mx-auto">
              <div className="px-[10px] md:px-[16px] py-[20px] flex-between border-b border-[#D0D5DD]">
                <p className="whitespace-nowrap  text-[16px] md:text-base leading-[24px] md:leading-[27px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                  Project milestone
                </p>
                <div className="flex-item gap-2">
                  <button onClick={ToggleEditModal} className="border-[#98A2B3] border bg-white hover:bg-slate-50 rounded-2xl px-[24px] py-[6px] text-[14px]  leading-[20px] text-[#667185]   ">
                    Edit
                  </button>
                  <button  className="border-[#98A2B3] border bg-white hover:bg-slate-50 rounded-2xl px-[24px] py-[6px] text-[14px]  leading-[20px] text-[#667185]   ">
                  Delete
                  </button>
                </div>
              </div>
              <div className="px-[10px] md:px-[16px] py-[20px] flex-between border-b border-[#D0D5DD]">
                <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                  Status:{" "}
                  <span className="text-[14px]  leading-[20px] text-[#FF9800]  ">
                    Incomplete
                  </span>
                </p>

                <div className="flex-item gap-1">
                  <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                    Progress:{" "}
                  </p>
                  <progress
                    value={60}
                    max={100}
                    className="rounded-lg"
                  ></progress>
                </div>

                <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                  Cost:{" "}
                  <span className="text-[14px]  leading-[20px] text-[#000]  ">
                    $2000
                  </span>
                </p>
              </div>
              <div className="px-[10px] md:px-[16px] py-[20px] flex-between ">
                <div className="flex-item gap-2">
                  <Calendar2 color="#667185" size={"22"} />{" "}
                  <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                    Start Date:{" "}
                    <span className="text-[14px]  leading-[20px] text-[#000]  ">
                      Jun 31, 2024
                    </span>
                  </p>{" "}
                </div>
                <div className="flex-item gap-2">
                  <Calendar2 color="#667185" size={"22"} />{" "}
                  <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                    Start Date:{" "}
                    <span className="text-[14px]  leading-[20px] text-[#000]  ">
                      Jun 31, 2024
                    </span>
                  </p>{" "}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="border-[0.2px] mt-3 rounded-br-[8px] rounded-bl-[8px] border-[#border-b border-[#98A2B3] py-[13px] flex-center">
        <div className="flex-item gap-2">
          <p className="text-[14px]  leading-[20px] text-[#000]  ">
            Do you want to create a new milestone?
          </p>{" "}
          <button onClick={ToggleCreateModal} className="px-[20px] py-[8px] bg-[#F05800] shadow text-white text-[14px]  leading-[20px] flex-item gap-2  rounded-[40px]">
            <Add size="22" color="#fff" /> <p>Create milestone</p>
          </button>
        </div>
      </div>

       {/* Create Modal */}
       <ModalLeft isOpen={isCreateOpen} onClose={HandleCreateModalClose}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Edit Milestone
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className=" ">
                <CloseCircle variant="Linear" color="#667185" size="20" />
              </button>
            </div>
          </div>

          <div className="p-[12px] md:p-[20px] xl:p-[24px]">
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Milestone Title
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Hiring Individual Positions"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full gap-5">
              {" "}
              <div className="mb-[24px] w-[60%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                 Cost
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="$ 0.00"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="mb-[24px] w-full md:w-[40%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Status
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder="Dashboard cards"
                    className="w-full h-[48px] pl-[16px] px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                  >
                    <option value="High">On Hold</option>
                    <option value="Medium">Ongoing</option>
                    <option value="Low">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full gap-5 mb-[24px]">
              {" "}
              <div className="w-full md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Start Date
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <Calendar
                    size="16"
                    color="#98A2B3"
                    className="absolute left-[8px]"
                  />
                  <input
                    type="date"
                    placeholder="Project Name"
                    className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="full-name"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Due date
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <Calendar
                    size="16"
                    color="#98A2B3"
                    className="absolute left-[8px]"
                  />
                  <input
                    type="date"
                    placeholder="Project Name"
                    className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="full-name"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
               Summary
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <textarea
                  type="text"
                  placeholder="Add Description"
                  className="w-full h-[137px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px] placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            


            <div className="py-[20px] border-t border-b-[#E4E7EC] flex-item  justify-end">
              <div className="flex-item gap-2">
                {" "}
                <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
                  Cancel
                </button>
                <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                  {!isLoading ? (
                    <ClipLoader color={"white"} size={20} />
                  ) : (
                    <> Save changes</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalLeft>

      {/* Edit Modal */}
      <ModalLeft isOpen={isEditOpen} onClose={HandleEditModalClose}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Edit Milestone
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className=" ">
                <CloseCircle variant="Linear" color="#667185" size="20" />
              </button>
            </div>
          </div>

          <div className="p-[12px] md:p-[20px] xl:p-[24px]">
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Milestone Title
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Hiring Individual Positions"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full gap-5">
              {" "}
              <div className="mb-[24px] w-[60%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                 Cost
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="$ 0.00"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="mb-[24px] w-full md:w-[40%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Status
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder="Dashboard cards"
                    className="w-full h-[48px] pl-[16px] px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                  >
                    <option value="High">On Hold</option>
                    <option value="Medium">Ongoing</option>
                    <option value="Low">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full gap-5 mb-[24px]">
              {" "}
              <div className="w-full md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Start Date
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <Calendar
                    size="16"
                    color="#98A2B3"
                    className="absolute left-[8px]"
                  />
                  <input
                    type="date"
                    placeholder="Project Name"
                    className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="full-name"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Due date
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <Calendar
                    size="16"
                    color="#98A2B3"
                    className="absolute left-[8px]"
                  />
                  <input
                    type="date"
                    placeholder="Project Name"
                    className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="full-name"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
               Summary
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <textarea
                  type="text"
                  placeholder="Add Description"
                  className="w-full h-[137px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px] placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
           Progress
              </label>


              <Seekbar position={position} duration={100000} onSeek={handleSeek} outerColor="#F9FAFB" innerColor="#F05800" hoverColor="#F05800" width={"100%"}/>;



            </div>


            <div className="py-[20px] border-t border-b-[#E4E7EC] flex-item  justify-end">
              <div className="flex-item gap-2">
                {" "}
                <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
                  Cancel
                </button>
                <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                  {!isLoading ? (
                    <ClipLoader color={"white"} size={20} />
                  ) : (
                    <> Save changes</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalLeft>
    </div>
  );
};

export default Milestone;
