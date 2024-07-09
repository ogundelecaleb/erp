import React, { useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";

const CompanyDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      {" "}
      <div>
        <div className=" w-full overflow-auto bg-[#fff] p-[10px] md:p-[20px] ">
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className=" w-full md:w-[50%]">
              <div className="flex-between mb-[8px] md:mb-[16px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   ">
                  Employee ID<sup className="text-[#F44336]">*</sup>
                </label>

                <button className="text-[14px] text-[#F44336] leading-[20px]">
                  Generate
                </button>
              </div>

              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Enter employee ID"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Hours Per Day
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Hours Per Day"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Annual Salary
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Annual Salary"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Branch <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
                  >
                    <option value="Medium">Select Branch</option>
                    <option value="Low">Female</option>
                  </select>
                </div>
              </div>

              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Department <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
                  >
                    <option value="Medium">Select Department</option>
                    <option value="Low">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Days Per Week<sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Days Per Week"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Fixed Salary
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
            </div>
          </div>

          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Designation <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
                  >
                    <option value="Medium">Select Designation</option>
                    <option value="Low">Female</option>
                  </select>
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Date Joined <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="date"
                    placeholder="Enter "
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Hours Per Month{" "}
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Hours Per Month"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Rate Per Day{" "}
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Rate Per Day"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
            </div>
          </div>
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Role <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
                  >
                    <option value="Medium">Select Role</option>
                    <option value="Low">Female</option>
                  </select>
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                 Employee Code <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Confirm password"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
            </div>

            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                 Days Per Month<sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Days Per Month"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
Rate Per Hour                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Rate Per Hour"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
            </div>
          </div>
        </div>
      </div>
      <div className="border-[0.8px]  border-[#E4E7EC] mb-[20px] mt-[20px]" />
      <div className=" flex-item  justify-end">
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
  );
};

export default CompanyDetails;
