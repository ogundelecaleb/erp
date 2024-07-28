import {
  Add,
  Book,
  Calendar,
  CloseCircle,
  Courthouse,
  DocumentDownload,
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

import { ClipLoader } from "react-spinners";

import ModalLeft from "../../components/ModalLeft";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Proposal = () => {
  const navigate = useNavigate();
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
  return (
<div className=" w-full overflow-auto bg-[#fff] min-h-[80vh] p-[10px] md:p-[20px] ">      <div className=" w-full    border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden ">
        <div className=" w-full  bg-white   border-b-[0.2px] border-[#98a2b3]  p-[14px] md:p-[20px] ">
          <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
            Proposal
          </p>
        </div>

      <div class="sm:-mx-6 lg:-mx-8 ">
        <div class="inline-block min-w-full  sm:px-6 lg:px-8">
          <div class="overflow-x-auto ">
            <table className="min-w-full  border-[0.2px]  border-[#D0D5DD] rounded-br-lg rounded-bl-lg overflow-hidden">
              <thead className="bg-[#F9FAFB]">
                <tr className="">
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex px-5   gap-[6px] md:gap-[12px] items-center">
                      Proposal ID{" "}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                      Issue Date
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

                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                      Status
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
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
                    #PROP001111
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    06-10-2024
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    $1,552,500.0
                  </td>

                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    Approved
                  </td>

                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                    <Menu>
                      <MenuButton bg={"none"} as={Button}>
                        <div className="flex-center gap-2">
                          <img
                            src="./assets/3dot.png"
                            className="h-[16px] w-[16px] md:h-[20px] md:w-[20px]"
                            alt="3 dots"
                          />
                        </div>
                      </MenuButton>
                      <MenuList maxW="32" className="">
                        <MenuItem
                          onClick={() => navigate("/customers/viewproposals")}
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
                            View as proposal
                          </p>
                        </MenuItem>
                        <MenuItem
                        onClick={() => navigate("/customers/viewinvoice")}
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
                            View as invoice
                          </p>
                        </MenuItem>
                        <MenuItem
                                                 onClick={() => navigate("/customers/editproposals")}

                          w="full"
                          color="#718096"
                          mb="10px"
                        >
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

                        <MenuItem
                          onClick={toggleDelete}
                          w="full"
                          color="#bf0d0d"
                          mb="10px"
                        >
                          <Trash color="#F44336" size="16" className="mr-2" />{" "}
                          <p className="text-[12px] md:text-[14px] text-[#F44336]  font-normal leading-[18px] md:leading-[20px]">
                            Delete
                          </p>
                        </MenuItem>
                        <Modal
                          isCentered
                          isOpen={isDeleteOpen}
                          onClose={HandleDeleteModalClose}
                          size="md"
                          style={{ borderRadius: 12 }}
                          motionPreset="slideInBottom"
                          className="rounded-[12px]"
                        >
                          <ModalOverlay bg="blackAlpha.300" />
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
                                <rect
                                  x="4"
                                  y="4"
                                  width="48"
                                  height="48"
                                  rx="24"
                                  fill="#FCC5C1"
                                />
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
                                Delete Proposal
                              </p>

                              <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
                                Are you sure you want to delete this proposal? This
                                action cannot be undone.
                              </p>
                            </ModalBody>
                            <ModalFooter gap={"16px"}>
                              <button
                                onClick={HandleDeleteModalClose}
                                className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black"
                              >
                                Cancel
                              </button>
                              <button
                                // onClick={handleDelete}
                                className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white"
                              >
                                {isLoading ? (
                                  <ClipLoader color={"white"} size={20} />
                                ) : (
                                  <> Delete </>
                                )}
                              </button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </MenuList>
                    </Menu>
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
  );
};

export default Proposal;
