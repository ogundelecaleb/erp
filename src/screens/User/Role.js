import { Add, Edit, FilterSearch, SearchNormal1, Trash } from "iconsax-react";
import React, { useState } from "react";
import { TaskAnalytics } from "../../components/Data";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate, useRoutes, Link } from "react-router-dom";

const Role = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const Permission = [
    "user permission",
    "user permission",
    "user permission",
    "user permission",
    "user permission",
    "user permission",
    "user permission",
    "user permission",
  ];
  return (
    <div className="p-[20px] bg-[#F2F2F2] h-screen ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-full w-full bg-[#ffff] ">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block  md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                User Management
              </p>

              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; /Role
              </p>
            </div>
            <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
            <div className="flex items-center gap-[8px]">
              <SearchNormal1 variant="Linear" color="#667185" size="16" />
              <input
                className="w-full lg:w-[300px] py-[6px] text-[16px] text-[#344054] leading-[20px] placeholder:text-[#98A2B3] placeholder:text-[12px] border border-transparent  focus:outline-none focus:ring-[#F05800] focus:border-b-[#F05800] "
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center gap-[16px] ">
            {" "}
            <button
              // onClick={() => toggleCreateModal()}
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">
                Create Role
              </p>

              <Add variant="Linear" color="#667185" size="16" />
            </button>
          </div>
        </div>
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full  sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table className="min-w-full mb-6 border-b-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC]">
                <thead className="bg-[#F9FAFB]">
                  <tr className="">
                    <th
                      scope="col"
                      className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] pl-[18px] md:pl-[24px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                    >
                      <div className="flex justify-left gap-[6px] md:gap-[12px] items-center">
                        Role
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] pl-[18px] md:pl-[24px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                    >
                      <div className="flex justify-left gap-[6px] md:gap-[12px] items-center">
                        Permission
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] pl-[18px] md:pl-[24px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                    >
                      <div className="flex justify-left gap-[6px] md:gap-[12px] items-center my-0">
                        Action
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={"_"} className="mb-2 hover:bg-light-gray">
                    <td className="whitespace-nowrap py-[16px] bg-white  pl-[18px] md:pl-[24px]  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-center  ">
                      Clients
                    </td>
                    <td className="whitespace-nowrap py-[16px] max-w-[802px] bg-white pl-[18px] md:pl-[24px]  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium grid grid-cols-4 gap-2  ">
                      {Permission &&
                        Permission.map((permision, index) => (
                          <button className="border py-1 px-[14px] text-[#F05800] border-[#F05800] rounded-[40px] text-md font-medium">
                            {permision}
                          </button>
                        ))}
                    </td>
                    <td className=" py-[16px] bg-white  pl-[18px] md:pl-[24px]  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium">
                      <div className="flex-item">
                      <Link to="/updatepermission">
                        {" "}
                        <Edit
                          // onClick={() => ToggleEditModal()}
                          variant="Linear"
                          color="#667185"
                          size="20"
                        />
                      </Link>
                      <Trash
                        // onClick={() => ToggleDeleteModal()}
                        variant="Linear"
                        color="#F44336"
                        size="20"
                      />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
