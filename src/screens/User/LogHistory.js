import {
  Add,
  Book,
  Calendar,
  CloseCircle,
  DocumentDownload,
  DocumentUpload,
  ElementEqual,
  Eye,
  FilterSearch,
  Layer,
  Maximize4,
  Message2,
  RowHorizontal,
  SearchNormal1,
  Trash,
} from "iconsax-react";
import {
  Grid,
  Flex,
  Button,
  Divider,
  Modal,
  Thead,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ProjectData } from "../../components/Data";
import { ClipLoader } from "react-spinners";
import { userList } from "../../components/Data";
import Select from "react-select";
import ProjectGrid from "../../components/project/ProjectGrid";
import ProjectTable from "../../components/project/ProjectTable";
import UserGrid from "../../components/user/UserGrid";
import ModalLeft from "../../components/project/ModalLeft";
import { Link } from "react-router-dom";

const LogHistory = () => {
  const [isViewModal, setIsViewModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);


  const toggleDelete = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };
  const HandleDeleteModalClose = () => {
    setIsDeleteOpen(false);
  };
  const result = [{ status: "Success" }];

  const closeViewModal = () => {
    setIsViewModal(false);
  };
  return (
    <div className="p-[20px] bg-[#F2F2F2] min-h-screen ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px]  bg-[#ffff] ">
        <div className="border-b border-b-[#E4E7EC] h-full p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <Link to="/usermanagement" >
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                User management /{" "}
              </p></Link>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; Log History
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
        </div>
        <div className="p-[10px] md:p-[16px] lg:p-[20px]">
          {" "}
          <div className="flex items-center gap-4">
            <select
              type="text"
              placeholder="All Users"
              className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
              required
              autoComplete="on"
              autoFocus
              name="full-name"
              id="full-name"
            >
              <option value="High">All Users</option>
              <option value="Medium">Admin</option>
              <option value="Low">Super Admins</option>
            </select>

            <input
              type="date"
              placeholder="Select Month"
              className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
            />

            <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <FilterSearch variant="Linear" color="#4CAF50" size="20" />
            </buttion>
            <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <Trash variant="Linear" color="#F44336" size="20" />
            </buttion>
          </div>
        </div>
      </div>
      <div class="sm:-mx-6 lg:-mx-8 mt-5">
        <div class="inline-block min-w-full  sm:px-6 lg:px-8">
          <div class="overflow-x-auto rounded-lg">
            <table className="min-w-full mb-6 border-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC] rounded-lg">
              <thead className="bg-light-gray">
                <tr className="">
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex px-5   gap-[6px] md:gap-[12px] items-center">
                      #
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Username{" "}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Role
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Last Login
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      IP Address
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Country
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Device
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      OS
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Action
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {isLoading && <div>Loading...</div>}
                {!isLoading && TaskSummaryData.length === 0 && (
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
                {TaskSummaryData &&
                  TaskSummaryData?.map((result) => ( */}
                <tr key="_" className="mb-2 hover:bg-light-gray">
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    1
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    Ogundele Caleb
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    Staff{" "}
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    05-03-2024 12:00 AM{" "}
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    ** ** ** ****
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    Nigeria{" "}
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    Desktop{" "}
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    Windows{" "}
                  </td>

                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                    {" "}
                    <div className="flex-center gap-2">
                      <Eye
                        onClick={() => setIsViewModal(true)}
                        variant="Linear"
                        color="#FF9800"
                        size="20"
                      />

                      <Trash
                        onClick={() => toggleDelete()}
                        variant="Linear"
                        color="#F44336"
                        size="20"
                      />
                    </div>
                  </td>
                </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* View Log Modal */}
      <ModalLeft isOpen={isViewModal} onClose={closeViewModal}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  View User Logs{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={closeViewModal} className=" ">
                <CloseCircle variant="Linear" color="#667185" size="20" />
              </button>
            </div>
          </div>

          <div className="p-[10px] md:p-[16px] lg:p-[24px] ">
            <div className="border-[#98A2B3] border-[0.2px] rounded-[12px] py-4 md:py-5 lg:py-6 px-4 md:px-5 lg:px-6 ">
              <ul className="grid grid-cols-2 md:grid-cols-3">
                <li className="">
                  <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                    Username
                  </p>
                  <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                    Ogundele Caleb
                  </p>
                </li>
                <li>
                  <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2  ">
                    User Role
                  </p>
                  <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                    Staff
                  </p>
                </li>
                <li>
                  <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px]  mb-1 md:mb-2  ">
                    Status
                  </p>
                  <button
                    className={`rounded-[20px] md:rounded-[40px] w-[60px] md:w-[74px] py-[2px] md:py-[4px] mx-auto
                           ${
                             result.status === "On Hold"
                               ? "bg-[rgb(255,245,230)] text-[#FF9800]"
                               : result.status === "Ongoing"
                               ? "bg-[#F9FAFB] text-[#667185]"
                               : "bg-[#EDF7EE] text-[#4CAF50]"
                           } 
                           text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                  >
                    <p>Success</p>
                  </button>
                </li>
              </ul>
            </div>

            <div className="border-[#98A2B3] border-[0.2px] rounded-[12px]  mt-4 md:mt-6 ">
              <div className="py-4 md:py-5 lg:py-6 px-2 md:px-4 border-[#98A2B3] border-b-[0.2px]   ">
                <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2  ">
                  More log history information
                </p>
              </div>
              <div className="py-4 md:py-5 lg:py-6 px-4 md:px-5 lg:px-6   ">
                <ul className="grid grid-cols-2 gap-[20px] md:gap-[30px] xl:gap-[44px]">
                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Country
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      Nigeria
                    </p>
                  </li>
                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Country Code
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      +234
                    </p>
                  </li>

                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Region
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      Africa
                    </p>
                  </li>
                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Region Name
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      West Africa
                    </p>
                  </li>

                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      City
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      Lagos
                    </p>
                  </li>
                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Zip
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      10001
                    </p>
                  </li>

                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Latitude
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      172.0.001
                    </p>
                  </li>
                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Longitude
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      105.658
                    </p>
                  </li>

                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Timezone
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      GMT + 1
                    </p>
                  </li>
                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      ISP
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      MTN NG
                    </p>
                  </li>

                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Org
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      MTN Telecommunication Ltd
                    </p>
                  </li>
                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      AS
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      AS45675454 MTN Ltd
                    </p>
                  </li>

                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      IP
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      14.224.131.236{" "}
                    </p>
                  </li>
                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Browser Language
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      VI
                    </p>
                  </li>

                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      Device Type
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      Desktop{" "}
                    </p>
                  </li>
                  <li className="">
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-medium leading-[24px]  m:leading-[27px] mb-1 md:mb-2 ">
                      OS
                    </p>
                    <p className="text-[#475367] text-[16px] md:text-[18px] font-normal leading-[24px]  m:leading-[27px] ">
                      Windows
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ModalLeft>

       {/* Delete Project */}
       <Modal
        isCentered
        isOpen={isDeleteOpen}
        onClose={HandleDeleteModalClose}
        size="md"
        style={{ borderRadius: 12 }}
        motionPreset="slideInBottom"
        className="rounded-[12px]"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            py="4"
            color="#000000"
            className="text-[18px]   font-medium leading-[24px] md:leading-[24px]"
          >
            <svg
              className="mx-auto"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="48" height="48" rx="24" fill="#FCC5C1" />
              <rect
                x="4"
                y="4"
                width="48"
                height="48"
                rx="24"
                stroke="#FEECEB"
                stroke-width="8"
              />
              <path
                d="M28 38C33.5 38 38 33.5 38 28C38 22.5 33.5 18 28 18C22.5 18 18 22.5 18 28C18 33.5 22.5 38 28 38Z"
                stroke="#F44336"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 24V29"
                stroke="#F44336"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.9961 32H28.0051"
                stroke="#F44336"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ModalHeader>
          <ModalCloseButton size={"sm"} />
          <ModalBody
            py={{ base: "20px", md: "24px" }}
            px={{ base: "16px", md: "24px" }}
            className=" px-[16px] md:px-[24px] pb-[30px] md:pb-[40px]"
          >
            <p className=" text-[16px] md:text-lg text-center  text-[#000] leading-[24px] font-medium  ">
              Delete Log
            </p>

            <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
            Are you sure you want to delete this log history? This action cannot be undone.
            </p>
          </ModalBody>
          <div gap={"16px"} className=" flex items-center justify-between  gap-[12px] px-[16px] md:px-[20px] pb-[20px]  ">
            <button
              onClick={HandleDeleteModalClose}
              className="border-[0.2px]  border-[#98A2B3] w-[50%] text-center  rounded-[8px] py-[12px] text-[14px] font-medium text-black"
            >
              Cancel
            </button>
            <button
              // onClick={handleDelete}
              className="border-[0.2px]  border-[#98A2B3]  w-[50%] bg-[#DE3D31] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white"
            >
              {isLoading ? (
                <ClipLoader color={"white"} size={20} />
              ) : (
                <> Delete </>
              )}
            </button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LogHistory;
