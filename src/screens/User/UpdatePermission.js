import React from "react";

const UpdatePermission = () => {
  return (
    <div className="p-[20px] bg-[#F2F2F2] h-screen ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-full w-full bg-[#ffff] ">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block  md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                User Management
              </p>

              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; / Role
              </p>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; / Update permision
              </p>
            </div>
            <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
          </div>
        </div>
        <div className="pt-[16px] md:pt-[24px] px-[8px] md:px-14px xl:px-[20px]">
          <p className="text-[#475367] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  mb-[12px] ">
            Name
          </p>
          <input
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[##98A2B3] border-[0.6px] rounded-[6px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name=""
                    id="full-name"
                    value={"Staff"}
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
        </div>
      </div>
    </div>
  );
};

export default UpdatePermission;
