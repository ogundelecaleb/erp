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

const ViewProposals = () => {
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
    <div>
      {" "}
      <div className="border-t border-l border-[#E4E7EC] h-full p-[16px] md:p-[20px] block md:flex justify-between items-center ">
        <div className="flex items-center gap-[16px]">
          <div className="flex items-center">
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              Finance & Accounting /{" "}
            </p>
            <Link to="/customers">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                &nbsp; Customer /{" "}
              </p>
            </Link>
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              &nbsp; Proposal
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
            onClick={() => toggleImportModal()}
            className="flex items-center gap-[8px] "
          >
            <p className="text-[14px] text-[#667185] leading-[20px]">
              Convert to invoice
            </p>

            <DocumentUpload variant="Linear" color="#667185" size="16" />
          </button>
          <button
            //  onClick={() => toggleCreate()}
            className="flex items-center gap-[8px] "
          >
            <p className="text-[14px] text-[#667185] leading-[20px]">
              Copy proposal
            </p>

            <Add variant="Linear" color="#667185" size="16" />
          </button>
        </div>
      </div>
      <div className="p-[20px] bg-[#F2F2F2] min-h-screen ">
        <div className="border-[0.2px] border-[#98a2b3] rounded-[8px]  bg-[#ffff] ">
          <div className="border-b border-b-[#E4E7EC] h-full p-[16px] md:p-[20px] block md:flex justify-between items-center ">
            <div className="">
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Proposal Details
              </p>
            </div>
            <div className="flex items-center gap-[16px] ">
              <button
                onClick={() => navigate("/createpurchase")}
                className="flex items-center gap-[8px] "
              >
                <p className="text-[14px] text-[#667185] leading-[20px]">
                  Resend proposal
                </p>

                <DocumentForward variant="Linear" color="#667185" size="16" />
              </button>
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <button
                onClick={() => toggleImportModal()}
                className="flex items-center gap-[8px] "
              >
                <p className="text-[14px] text-[#667185] leading-[20px]">
                  Download
                </p>

                <DocumentForward variant="Linear" color="#667185" size="16" />
              </button>
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
            </div>
          </div>

          <div>
            <div className="px-[10px] md:px-[20px] py-[20px] m:py-[32px] flex md:justify-between flex-col md:flex-row gap-[20px]">
              <div className="flex gap-[16px]">
                <img
                  src="./assets/qr.png"
                  alt="QR"
                  className="h-[100px] md:h-[160px] w-[100px] md:w-[160px]"
                />
                <ul>
                  <li>
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                      Purchase ID:
                    </p>
                  </li>
                  <li>
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      #PUR00001
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex gap-[16px]">
                <ul>
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Billed To:
                  </p>
                  <li>
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      Ogundele Caleb{" "}
                    </p>
                  </li>
                  <li>
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      55 Ogba Avenue{" "}
                    </p>
                  </li>
                  <li>
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      Ogba, Ikeja{" "}
                    </p>
                  </li>
                  <li>
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      Lagos{" "}
                    </p>
                  </li>

                  <li className="mt-[20px]">
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      Tax Number: 10001{" "}
                    </p>
                  </li>
                  <li>
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      #PUR00001
                    </p>
                  </li>
                </ul>
                <ul>
                  <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Issue Date
                  </p>
                  <li>
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      06-12-2023{" "}
                    </p>
                  </li>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Status:
                  </p>
                  <li>
                    <p className="text-[#4CAF50] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      Paid
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="overflow-x-auto">

            <div class="sm:-mx-6 lg:-mx-8 mt-5">
              <div class="inline-block min-w-full  sm:px-6 lg:px-8">
                <div class="overflow-x-auto rounded-lg">
                  <table className="min-w-full mb-6 border-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC] rounded-lg">
                    <thead className="bg-light-gray">
                      <tr className="">
                        <th
                          scope="col"
                          className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                        >
                          <div className="flex px-5   gap-[6px] md:gap-[12px] items-center">
                            #
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                        >
                          <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                            Item Type
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                        >
                          <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                            Item
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                        >
                          <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                            Quantity
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                        >
                          <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                            Rate
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                        >
                          <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                            Discount
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                        >
                          <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                            Tax
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                        >
                          <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                            Desc
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                        >
                          <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                            Price
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
                            1
                          </p>
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                          Product
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                          Refrigerator
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                          100
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                          Electronics
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                          Piece
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                          117{" "}
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                          Product
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                          110,000.00
                        </td>
                      </tr>
                      <tr key="_" className="mb-2 hover:bg-light-gray">
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
                      </tr>
                      {/* ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>

            <div className="flex justify-end mt-[24px] px-[16px] md:px-[20px]">
              <div className=" max-w-[460px] w-full mb-[24px]   border-[0.2px] border-[#98a2b3] rounded-[8px] p-[14px] md:p-[20px] bg-white">
                <ul>
                  <li className="flex-between mb-[14px] md:mb-[20px]">
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                      Sub Total ($)
                    </p>

                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                      1,000.00
                    </p>
                  </li>
                  <li className="flex-between mb-[14px] md:mb-[20px]">
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                      Discount ($)
                    </p>

                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      0.00
                    </p>
                  </li>
                  <li className="flex-between mb-[14px] md:mb-[20px]">
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                      CGST ($){" "}
                    </p>

                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      50.00
                    </p>
                  </li>
                  <li className="flex-between mb-[14px] md:mb-[20px]">
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                      SGST ($){" "}
                    </p>

                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      50.00
                    </p>
                  </li>
                  <li className="flex-between ">
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                      Total Amount ($){" "}
                    </p>

                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                      50.00
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[0.2px] border-[#98a2b3] rounded-[8px]  bg-[#ffff] mt-5 ">
          <div className="border-b border-b-[#E4E7EC] h-full p-[16px] md:p-[20px] block md:flex justify-between items-center ">
            <div className="">
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Attachment
              </p>
            </div>
            <div className="flex items-center gap-[16px] ">
              <button
                onClick={() => navigate("/createpurchase")}
                className="flex items-center gap-[8px] "
              >
                <p className="text-[14px] text-[#667185] leading-[20px]">
                  Upload attachment
                </p>

                <DocumentForward variant="Linear" color="#667185" size="16" />
              </button>
            </div>
          </div>
          <div class="sm:-mx-6 lg:-mx-8 ">
            <div class="inline-block min-w-full  sm:px-6 lg:px-8">
              <div class="overflow-x-auto rounded-lg">
                <table className="min-w-full  border-[0.2px]  border-[#D0D5DD] rounded-lg overflow-hidden">
                  <thead className="bg-[#F9FAFB]">
                    <tr className="">
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex px-5   gap-[6px] md:gap-[12px] items-center">
                          #
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                          File Name
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                          File Size
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                          Date Created
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="my-0">
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
                        Purchase img
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        200 kb
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        02 - 07 - 2024
                      </td>

                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                        <Trash color="#F44336" size="16" className="mr-2" />{" "}
                      </td>
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProposals;
