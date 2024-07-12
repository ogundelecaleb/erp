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
  
  const Warning = () => {
    const navigate = useNavigate();
    const [isViewModal, setIsViewModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isOpenImportModal, setIsOpenImportModal] = useState(false);
    const [isCreateModal, setIsCreateModal] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
  
    function HandleEditModalClose() {
      setIsEditOpen(false);
    }
  
    function ToggleEditModal() {
      setIsEditOpen(!isEditOpen);
    }
  
    const toggleCreate = () => {
      setIsCreate(!isCreate);
    };
    const closeCreateModal = () => {
      setIsCreate(false);
    };
  
    function ToggleDeleteModal(id) {
      setIsDeleteModal(!isDeleteModal);
    }
    function closeDeleteModal() {
      setIsDeleteModal(false);
    }
  
    const toggleCreateModal = () => {
      setIsCreateModal(!isCreateModal);
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
                <Link to="/hradmin/award">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    &nbsp; HR Admin /{" "}
                  </p>
                </Link>
  
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  &nbsp; Warning
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
                onClick={() => toggleCreate()}
                className="flex items-center gap-[8px] "
              >
                <p className="text-[14px] text-[#667185] leading-[20px]">
                  Ceate warning
                </p>
  
                <Add variant="Linear" color="#667185" size="16" />
              </button>
            </div>
          </div>
  
          <div class="sm:-mx-6 lg:-mx-8 ">
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
                        Warning By
                        </div>
                      </th>
  
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                        Warning To
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                         Subject
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                        Warning Date
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                        Description
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
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#000] font-medium text-left  ">
                        Ogundele Caleb
                      </td>
  
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      Caleb Caleb
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      Discipline
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      07-07-2024
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      Discipline
                      </td>
                     
                      <td className="whitespace-nowrap py-[16px] flex-item gap-2 bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                        <button>
                          <Edit
                            onClick={() => ToggleEditModal()}
                            variant="Linear"
                            color="#667185"
                            size="24"
                          />
                        </button>
  
                        <button>
                          {" "}
                          <Trash
                            onClick={() => ToggleDeleteModal()}
                            variant="Linear"
                            color="#F44336"
                            size="24"
                          />
                        </button>
  
                        <Modal
                          isCentered
                          isOpen={isDeleteModal}
                          onClose={closeDeleteModal}
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
                                Delete Warning
                              </p>
  
                              <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
                                Are you sure you want to delete this warning? This
                                action cannot be undone.
                              </p>
                            </ModalBody>
                            <ModalFooter gap={"16px"}>
                              <button
                                onClick={closeDeleteModal}
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
                      </td>
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  
        {/* Create Modal */}
        <ModalLeft isOpen={isCreate} onClose={closeCreateModal}>
          <div>
            <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
              <div className="flex items-center gap-[16px]">
                <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
                <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
                <div className="flex items-center">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Create New Warning
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={closeCreateModal} className=" ">
                  <CloseCircle variant="Linear" color="#667185" size="20" />
                </button>
              </div>
            </div>
  
            <div className="p-[12px] md:p-[20px] xl:p-[24px]">
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Warning By
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder="Name"
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
                  >
                    <option value="">Select Employee</option>
                    <option value="Monthly Payslip">Monthly Payslip</option>
                  </select>
                </div>
              </div>
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Warning To
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="">Select emeployee</option>
                    <option value="Monthly Payslip">Monthly Payslip</option>
                  </select>
                </div>
              </div>
  
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
             Subject
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Warning Subject"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Warning Date{" "}
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="date"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
            
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Description
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <textarea
                    type="text"
                    placeholder="Enter description"
                    className="w-full h-[164px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="py-[20px] border-t border-b-[#E4E7EC] flex-item  justify-end">
                <div className="flex-item gap-2">
                  {" "}
                  <button
                    onClick={closeCreateModal}
                    className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black"
                  >
                    Cancel
                  </button>
                  <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                    {!isLoading ? (
                      <ClipLoader color={"white"} size={20} />
                    ) : (
                      <> Create</>
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
                    Edit Warning
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={HandleEditModalClose} className=" ">
                  <CloseCircle variant="Linear" color="#667185" size="20" />
                </button>
              </div>
            </div>
  
            <div className="p-[12px] md:p-[20px] xl:p-[24px]">
            <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Warning By
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder="Name"
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
                  >
                    <option value="">Select Employee</option>
                    <option value="Monthly Payslip">Monthly Payslip</option>
                  </select>
                </div>
              </div>
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Warning To
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="">Select employee</option>
                    <option value="Monthly Payslip">Monthly Payslip</option>
                  </select>
                </div>
              </div>
  
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                 Subject
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Warning Subject"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Warning Date{" "}
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="date"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
            
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Description
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <textarea
                    type="text"
                    placeholder="Enter description"
                    className="w-full h-[164px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
  
              <div className="py-[20px] border-t border-b-[#E4E7EC] flex-item  justify-end">
                <div className="flex-item gap-2">
                  {" "}
                  <button
                    onClick={HandleEditModalClose}
                    className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black"
                  >
                    Cancel
                  </button>
                  <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                    {!isLoading ? (
                      <ClipLoader color={"white"} size={20} />
                    ) : (
                      <> Create</>
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
  
  export default Warning;
  