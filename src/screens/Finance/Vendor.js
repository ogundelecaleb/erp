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

const Vendor = () => {
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
            Finance & Accounting /{" "}
                </p>
              {/* <Link to="/usermanagement">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                &nbsp; 
                  Vendor /{" "}
                </p>
              </Link> */}
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp;  Vendor
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
                Import
              </p>

              <DocumentUpload variant="Linear" color="#667185" size="16" />
            </button>
          <button
               onClick={() => toggleCreate()}
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">
                Create Vendor
              </p>

              <Add variant="Linear" color="#667185" size="16" />
            </button>
            <Modal
              isCentered
              isOpen={isOpenImportModal}
              onClose={closeImportModal}
              size="xl"
              style={{ borderRadius: 12 }}
              motionPreset="slideInBottom"
              className="rounded-[12px]"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader
                  py="4"
                  color="#000000"
                  className="text-[18px] md:text-[20px] text-[#000000] font-medium leading-[24px] md:leading-[24px]"
                >
                  Import Vendor
                </ModalHeader>
                <ModalCloseButton size={"sm"} />
                <Divider color="#98A2B3" />
                <ModalBody
                  pt={{ base: "20px", md: "24px" }}
                  px={{ base: "16px", md: "24px" }}
                  pb={{ base: "30px", md: "40px" }}
                  className="pt-[20px] md:pt-[24px] px-[16px] md:px-[24px] pb-[30px] md:pb-[40px]"
                >
                  <p className="text-[14px] text-[#667185] leading-[20px] mb-[20px] ">
                    Select CSV File
                  </p>

                  <input
                    className="flex mb-[20px] h-9 w-full rounded-md  border-input bg-background  text-sm shadow-sm text-[#667185] border-[0.2px] border-[#98A2B3] transition-colors file:border-0 file:border-r-[0.2px] file:h-9 file:bg-[#F9FAFB] file:text-[#667185] file:border-[#D0D5DD] file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-[#F05800] focus:border-[#F05800]  disabled:opacity-50"
                    id="csv"
                    name="csv"
                    type="file"
                  />

                  <div className="flex gap-[8px] items-center">
                    {" "}
                    <p className="text-[14px] underline text-[#667185] leading-[20px]  ">
                      Download Sample vendor CSV File
                    </p>
                    <DocumentDownload
                      color="#4CAF50"
                      variant="Bold"
                      size="20px"
                    />
                  </div>
                </ModalBody>
                <Divider />
                <ModalFooter gap={"16px"}>
                  <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
                    Cancel
                  </button>
                  <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                    {!isLoading ? (
                      <ClipLoader color={"white"} size={20} />
                    ) : (
                      <> Upload </>
                    )}
                  </button>
                </ModalFooter>
              </ModalContent>
            </Modal>

           
          </div>
        </div>
        <div className="overflow-x-auto">

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
                    Vendor ID
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
                    Contact
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                    Email
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                    Balance
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
                #CUST012222
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                  Ogundele Caleb
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                  08123456801
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                  ogundelecaleb@gmail.com
                  </td>
                  <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                  $50,000.00
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
                            navigate("/viewVendors", {
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

                        <MenuItem
                          onClick={() => ToggleEditModal()}
                          w="full"
                          color="#bf0d0d"
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
                                Delete Vendor
                              </p>

                              <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
                              Are you sure you want to delete this Vendor? This action cannot be undone.
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
      {/* Create Modal */}
    <ModalLeft isOpen={isCreate} onClose={closeCreateModal}>
      <div>
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
            <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                Create New Vendor
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
          <div className="flex-item gap-[24px] flex-col md:flex-row">
          <div className="mb-[24px] w-full md:w-[60%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
             Name
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="date"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>
          <div className="mb-[24px] w-full md:w-[40%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Contact
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter Contact"
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="contact"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>


          </div>
          <div className="mb-[24px] ">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
           Email Address
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="email"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>
          <div className="flex-item gap-[24px] flex-col md:flex-row">
          <div className="mb-[24px] w-full md:w-[60%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
             Country
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter Country"
                className="w-full h-[48px] pl-[24px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="country"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>
          <div className="mb-[24px] w-full md:w-[40%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
            Zip Code
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="zip-code"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>


          </div>
          <div className="flex-item gap-[24px] flex-col md:flex-row">
          <div className="mb-[24px] w-full md:w-[60%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
             State
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <select
                type="text"
                placeholder=""
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="state"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                >
                <option value="">Select State</option>
                <option value="Monthly Payslip">January</option>
              </select>
            </div>
          </div>
          <div className="mb-[24px] w-full md:w-[40%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              City
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter City"
                className="w-full h-[48px]  px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="city"
                id="city"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>


          </div>
         
          <div className="mb-[24px]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Address
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <textarea
                type="text"
                placeholder=""
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
                Edit Vendor
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
          <div className="flex-item gap-[24px] flex-col md:flex-row">
          <div className="mb-[24px] w-full md:w-[60%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
             Name
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="date"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>
          <div className="mb-[24px] w-full md:w-[40%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Contact
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter Contact"
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="contact"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>


          </div>
          <div className="mb-[24px] ">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
           Email Address
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="email"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>
          <div className="flex-item gap-[24px] flex-col md:flex-row">
          <div className="mb-[24px] w-full md:w-[60%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
             Country
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter Country"
                className="w-full h-[48px] pl-[24px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="country"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>
          <div className="mb-[24px] w-full md:w-[40%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
            Zip Code
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="zip-code"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>


          </div>
          <div className="flex-item gap-[24px] flex-col md:flex-row">
          <div className="mb-[24px] w-full md:w-[60%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
             State
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <select
                type="text"
                placeholder=""
                className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="state"
                id="full-name"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                >
                <option value="">Select State</option>
                <option value="Monthly Payslip">January</option>
              </select>
            </div>
          </div>
          <div className="mb-[24px] w-full md:w-[40%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              City
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <input
                type="text"
                placeholder="Enter City"
                className="w-full h-[48px]  px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="city"
                id="city"
                //   value={formData.date}
                //   onChange={(e) => handleChange(e)}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>


          </div>
         
          <div className="mb-[24px]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Address
            </label>
            <div className=" relative  mt-[16px]  flex items-center">
              <textarea
                type="text"
                placeholder=""
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

export default Vendor;
