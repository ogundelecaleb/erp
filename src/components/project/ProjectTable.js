import React from "react";
import { ProjectData } from "../Data";
import {
  Add,
  Calendar,
  Chart,
  ChartCircle,
  Clipboard,
  DocumentText,
  Edit,
  Eye,
  Happyemoji,
  More,
  Profile2User,
  Trash,
  UserAdd,
} from "iconsax-react";
import { IoShareSocialOutline } from "react-icons/io5";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const ProjectTable = ({ isLoading, isPreviousData }) => {
  const navigate = useNavigate();
  return (
    <div class="flex flex-col overflow-x-auto">
      <div class="sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full  sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table className="min-w-full mb-6">
              <thead className="bg-light-gray">
                <tr className="">
                  <th
                    scope="col"
                    className=" border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center">
                      <ChartCircle variant="Linear" color="#98A2B3" size="18" />{" "}
                      <p>Name</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      <DocumentText
                        variant="Linear"
                        color="#98A2B3"
                        size="18"
                      />{" "}
                      <p>Description</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      <Happyemoji variant="Linear" color="#98A2B3" size="18" />{" "}
                      <p>Status</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      <Calendar variant="Linear" color="#98A2B3" size="18" />{" "}
                      <p>Due Date</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      <Profile2User
                        variant="Linear"
                        color="#98A2B3"
                        size="18"
                      />{" "}
                      <p>People</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] py-[12px]  text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      <Add variant="Linear" color="#98A2B3" size="18" />{" "}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading && !isPreviousData && <div>Loading...</div>}
                {!isLoading && ProjectData.length === 0 && (
                  <tr>
                    <td className="text-center" colspan="6">
                      <img
                        src="./nodata.gif"
                        className="mx-auto mt-6 h-[70px] "
                        alt=""
                      />
                      <h3 className="text-[30px] leading-[35px]  text-[#1A202C] font-extrabold mb-[6px]">
                        No Project
                      </h3>
                    </td>
                  </tr>
                )}
                {ProjectData &&
                  ProjectData?.map((result) => (
                    <tr key={result.id} className="mb-2 hover:bg-light-gray">
                      <td className="whitespace-nowrap py-[6px]  px-5 border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                        {result.heading}
                      </td>
                      <td className=" py-[6px] max-w-[300px] px-3 md:px-5 border-t border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                        <p className="line-clamp-2 ">{result.summary}</p>
                      </td>

                      <td className="whitespace-nowra py-[6px] px-3 md:px-5 border-t border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] text-[16px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                        {" "}
                        <button
                          className={`rounded-[20px] md:rounded-[40px] w-[60px] md:w-[74px] py-[2px] md:py-[4px] mx-auto ${
                            result.status === "On Hold"
                              ? "bg-[rgb(255,245,230)] text-[#FF9800]"
                              : result.status === "Ongoing"
                              ? "bg-[#F9FAFB] text-[#667185]"
                              : "bg-[#EDF7EE] text-[#4CAF50]"
                          }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                        >
                          <p>{result?.status}</p>
                        </button>
                      </td>
                      <td className=" py-[6px] px-3 md:px-5 border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] text-[16px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                        {" "}
                        {result.time}
                      </td>
                      <td className=" py-[6px] px-3 md:px-5 border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC] text-[16px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                        {" "}
                        <img
                          src={result?.image}
                          alt="participant"
                          className="w-[68px] h-[24px] "
                        />
                      </td>

                      <td className=" px-2 md:px-4 py-[24px] border-r-[0.8px] border-b-[0.8px] border-[#E4E7EC]  ">
                        <div>
                          <Menu>
                            <MenuButton bg={"none"} as={Button}>
                              <button
                                //onClick={() => handleTransacModalOpen(result)}
                                className="   rounded-sm flex justify-center items-center  hover:bg-[#CBD5E0]  "
                              >
                                <More
                                  variant="Linear"
                                  color="#98A2B3"
                                  size="24"
                                />{" "}
                              </button>
                            </MenuButton>
                            <MenuList maxW="32" className="">
                              <MenuItem
                                onClick={() =>
                                  navigate("/projectdetails", {
                                    state: result,
                                  })
                                }
                                w="full"
                                color="#718096"
                                mb="10px"
                              >
                                <Eye
                                  variant="Linear"
                                  color="#98A2B3"
                                  size="16"
                                  className="mr-2"
                                />{" "}
                                <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                                  View
                                </p>
                              </MenuItem>

                              <MenuItem w="full" color="#bf0d0d" mb="10px">
                                <Edit
                                  variant="Linear"
                                  color="#98A2B3"
                                  size="16"
                                  className="mr-2"
                                />{" "}
                                <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                                  Edit
                                </p>
                              </MenuItem>
                              <MenuItem w="full" color="#bf0d0d" mb="10px">
                                <UserAdd
                                  variant="Linear"
                                  color="#98A2B3"
                                  size="16"
                                  className="mr-2"
                                />{" "}
                                <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                                  Invite Users
                                </p>
                              </MenuItem>
                              <MenuItem w="full" color="#bf0d0d" mb="10px">
                                <IoShareSocialOutline
                                  color="#98A2B3"
                                  size="16"
                                  className="mr-2"
                                />{" "}
                                <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                                  Share to Clients
                                </p>
                              </MenuItem>
                              <MenuItem w="full" color="#bf0d0d" mb="10px">
                                <Clipboard
                                  color="#98A2B3"
                                  size="16"
                                  className="mr-2"
                                />{" "}
                                <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                                  Duplicate
                                </p>
                              </MenuItem>
                              <MenuItem w="full" color="#bf0d0d" mb="10px">
                                <Trash
                                  color="#F44336"
                                  size="16"
                                  className="mr-2"
                                />{" "}
                                <p className="text-[12px] md:text-[14px] text-[#F44336]  font-normal leading-[18px] md:leading-[20px]">
                                  Delete
                                </p>
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
