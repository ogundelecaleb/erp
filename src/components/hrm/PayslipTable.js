import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { Link, useNavigate } from "react-router-dom";
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
  import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";


const PayslipTable = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);


    const toggleDelete = () => {
        setIsDeleteOpen(!isDeleteOpen);
      };
      const HandleDeleteModalClose = () => {
        setIsDeleteOpen(false);
      };

      const result = { status: "Paid" };

  return (
    <div> <div class="sm:-mx-6 lg:-mx-8 mt-5">
    <div class="inline-block min-w-full  sm:px-6 lg:px-8">
      <div class="overflow-x-auto rounded-lg">
        <table className="min-w-full mb-6 border-[0.2px]  border-[#D0D5DD] rounded-lg overflow-hidden">
          <thead className="bg-[#F9FAFB]">
            <tr className="">
              <th
                scope="col"
                className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
              >
                <div className="flex px-5   gap-[6px] md:gap-[12px] items-center">
                Employee ID
                </div>
              </th>
              <th
                scope="col"
                className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
              >
                <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                Name
                </div>
              </th>
              <th
                scope="col"
                className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
              >
                <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                Payroll Type                </div>
              </th>
              <th
                scope="col"
                className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
              >
                <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                Salary
                </div>
              </th>

              <th
                scope="col"
                className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
              >
                <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                Net Salary                </div>
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
               
                <p className="text-[#667185] text-[12px] md:text-[14px]  font-medium leading-[22px] ">
                #Emp012222                </p>
              </td>
              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
              Ogundele Caleb              </td>
              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
              Monthly Payslip              </td>
              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
              600,000.00              </td>
              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
              500,000.00
              </td>
              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                <button
                      className={`rounded-[20px] md:rounded-[40px] w-[60px] md:w-[74px] py-[2px] md:py-[4px] mx-auto ${
                        result?.status === "On Hold"
                          ? "bg-[rgb(255,245,230)] text-[#FF9800]"
                          : result?.status === "Ongoing"
                          ? "bg-[#F9FAFB] text-[#667185]"
                          : "bg-[#EDF7EE] text-[#4CAF50]"
                      }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                    >
                      <p>{result.status}</p>
                    </button>
              </td>
            

              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
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
                      onClick={() =>
                        navigate("/employee/viewpayslip", {
                        //   state: result,
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
                            Delete Item
                          </p>

                          <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
                          Are you sure you want to delete this item? This action cannot be undone.
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
  </div></div>
  )
}

export default PayslipTable