import {
  Add,
  Book,
  Calendar,
  CloseCircle,
  Courthouse,
  DocumentDownload,
  DocumentForward,
  DocumentUpload,
  Edit,
  ElementEqual,
  Eye,
  FilterSearch,
  Layer,
  Maximize4,
  Message2,
  More,
  Repeat,
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
import ModalLeft from "../../components/ModalLeft";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const ViewPayslip = () => {
  const navigate = useNavigate();
  const [isViewModal, setIsViewModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isOpenImportModal, setIsOpenImportModal] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);

  const toggleCreateModal = () => {
    setIsCreateModal(!isCreateModal);
  };

  const closeCreateModal = () => {
    setIsCreateModal(false);
  };

  const toggleImportModal = () => {
    setIsOpenImportModal(!isOpenImportModal);
  };
  const closeImportModal = () => {
    setIsOpenImportModal(false);
  };

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
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                HRM /{" "}
              </p>
              <Link to="/employee">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Employee /{" "}
                </p>
              </Link>
              <Link to="">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Payroll /{" "}
                </p>
              </Link>
              <Link to="/employee/payslip">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Payslip /{" "}
                </p>
              </Link>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; View Payslip
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
            <button
              onClick={() => navigate("/createpurchase")}
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">
                Download
              </p>

              <DocumentUpload variant="Linear" color="#667185" size="16" />
            </button>
            <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
            <button
              onClick={() => toggleImportModal()}
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">
                Share Via Email
              </p>

              <DocumentForward variant="Linear" color="#667185" size="16" />
            </button>
          </div>
        </div>

        <div>
          <div className="px-[10px] md:px-[20px] py-[20px] m:py-[32px] flex-between flex-row gap-[20px]">
            <div className="w-full md:w-[80%] xl:w-[70%] flex gap-[16px] xl:gap-[24px]">
              <ul className="w-[40%]">
                <li className="flex-item gap-1 mb-3">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Name :
                  </p>
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    Ogundele Caleb
                  </p>
                </li>
                <li className="flex-item gap-1 mb-3">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Position :
                  </p>
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    Employee
                  </p>
                </li>
                <li className="flex-item gap-1 mb-3">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Salary Date: :
                  </p>
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    07 - 07 -2024
                  </p>
                </li>
              </ul>

              <ul className="w-[60%]">
                <li className=" gap-1 mb-3">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Company’s Address:
                  </p>
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    20050 W 12 Mile Rd New York Michigan 10001{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="sm:-mx-6 lg:-mx-8 mt-5">
            <div class="inline-block min-w-full  sm:px-6 lg:px-8">
              <div class="overflow-x-auto rounded-lg">
                <table className="min-w-full mb-6 border-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC] rounded-lg">
                  <thead className="bg-[#F9FAFB]">
                    <tr className="">
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex px-5   gap-[6px] md:gap-[12px] items-center">
                          Earning
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                          Title
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                          Type
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                          Amount
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
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium flex-item gap-2  ">
                        <p className="text-[#667185] text-[12px] md:text-[14px]  font-medium leading-[22px] ">
                          Basic Salary
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        Allowance
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        Fixed
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        1,000,000.00
                      </td>
                    </tr>
                    {/* <tr key="_" className="mb-2 hover:bg-light-gray">
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium flex-item gap-2  ">
                        Total:
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  "></td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  "></td>

                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        100
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        20000000
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        Piece
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        117{" "}
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        Product
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        110,000.00
                      </td>
                    </tr> */}
                    {/* ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="sm:-mx-6 lg:-mx-8 mt-5">
            <div class="inline-block min-w-full  sm:px-6 lg:px-8">
              <div class="overflow-x-auto rounded-lg">
                <table className="min-w-full mb-6 border-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC] rounded-lg">
                  <thead className="bg-[#F9FAFB]">
                    <tr className="">
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex px-5   gap-[6px] md:gap-[12px] items-center">
                          Deduction
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                          Title
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                          Type
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                          Amount
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
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium flex-item gap-2  ">
                        <p className="text-[#667185] text-[12px] md:text-[14px]  font-medium leading-[22px] ">
                          Loan
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        Allowance
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        Fixed
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        1,000,000.00
                      </td>
                    </tr>
                    {/* <tr key="_" className="mb-2 hover:bg-light-gray">
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium flex-item gap-2  ">
                        Total:
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  "></td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  "></td>

                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        100
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        20000000
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        Piece
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        117{" "}
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        Product
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        110,000.00
                      </td>
                    </tr> */}
                    {/* ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-[24px] px-[16px] md:px-[20px]">
            <div className=" max-w-[460px] w-full mb-[24px]   border-[0.2px] border-[#98a2b3] rounded-[8px] p-[14px] md:p-[20px] bg-white">
              <ul>
                <li className="flex-between mb-[14px] md:mb-[20px]">
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Total Earning
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                    1,000.00
                  </p>
                </li>
                <li className="flex-between mb-[14px] md:mb-[20px]">
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Total Deduction{" "}
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    0.00
                  </p>
                </li>
                <li className="flex-between mb-[14px] md:mb-[20px]">
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] w-[40%]  ">
                    Taxable Earning = Total (Earning − Deduction)
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    50.00
                  </p>
                </li>
                <li className="flex-between mb-[14px] md:mb-[20px]">
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Tax = Total Earning × 20%
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    50.00
                  </p>
                </li>
                <li className="flex-between mb-[14px] md:mb-[20px]">
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Net Salary = Taxable Earning − Tax
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    50.00
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-[10px] pt-[10px] md:px-[16px] md:pt-[16px] xl:px-[20px] xl:pt-[20px] border-t-[0.8px] border-[#E4E7EC] ">
        <ul>
          <li className="flex-between mb-[14px] md:mb-[20px]">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Employee Signature:            </p>

            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
              1,000.00
            </p>
          </li>
          <li className="flex-between mb-[14px] md:mb-[20px]">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Paid by:            </p>

            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
              Ogundele
            </p>
          </li>
        </ul>
      </div>
      </div>

      
    </div>
  );
};

export default ViewPayslip;
