import {
    Add,
    Book,
    Calendar,
    CloseCircle,
    Courthouse,
    DocumentDownload,
    DocumentUpload,
    Edit,
    Edit2,
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
  
  const Project = () => {
    const navigate = useNavigate();
    const [isViewModal, setIsViewModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
  
    const toggleDelete = () => {
      setIsDeleteOpen(!isDeleteOpen);
    };
    const HandleDeleteModalClose = () => {
      setIsDeleteOpen(false);
    };
    const toggleCreate = () => {
      setIsCreate(!isCreate);
    };
    const closeCreateModal = () => {
      setIsCreate(false);
    };
    const result = [{ status: "Success" }];
    return (
      <div className=" w-full overflow-auto bg-[#fff] min-h-[80vh] p-[10px] md:p-[20px] ">
        {" "}
        <div className=" w-full    border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden ">
          <div className=" w-full  bg-white   border-b-[0.2px] border-[#98a2b3]  p-[14px] md:p-[20px] ">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
              Project
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
                        Name
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                        Stage
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                        Start Date
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] px-5  gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                        End Date
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
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      Website Launch
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      Finished
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      19-05-2023
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      19-05-2023
                      </td>
                    
                      <td className=" py-[6px] max-w-[300px] px-3 md:px-5 border-t  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                        <p className="line-clamp-2 text-[#667185] ">
                          {" "}
                          keeping your cash flow healthy and Project reporting
                          accurate.
                        </p>
                      </td>
  
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        <div className="flex-item gap-2 md:gap-3">
                          <button
                           //onClick={toggleCreate}
                           >
                            <Eye
                              variant="Linear"
                              color="#98A2B3"
                              size="16"
                              className="mr-2"
                            />{" "}
                          </button>
                         
                        </div>
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
                   Edit Project
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
                    Date
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <input
                      type="date"
                      placeholder=""
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
                    Amount
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <p className="absolute left-[16px] text-[#D0D5DD] pr-2 border-r border-[#D0D5DD]">$</p>
                    <input
                      type="text"
                      placeholder="20000"
                      className="w-full h-[48px] pl-[38px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
            
              <div className="flex-item gap-[24px] flex-col md:flex-row">
                <div className="mb-[24px] w-full md:w-[60%]">
                  <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                    Account
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <select
                      type="text"
                      placeholder=""
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
                      >
                      <option value="">Select Account</option>
                      <option value="Monthly Payslip">Vantapp</option>
                    </select>
                  </div>
                </div>
                <div className="mb-[24px] w-full md:w-[40%]">
                  <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                   Customer
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <select
                      type="text"
                      placeholder="Enter "
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
                      >
                      <option value="">Select Customer</option>
                      <option value="Monthly Payslip">Ogundele Caleb</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex-item gap-[24px] flex-col md:flex-row">
                <div className="mb-[24px] w-full md:w-[60%]">
                  <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                    Category
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
                      <option value="">Select Category</option>
                      <option value="Monthly Payslip">Product sales</option>
                    </select>
                  </div>
                </div>
                <div className="mb-[24px] w-full md:w-[40%]">
                  <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Reference
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <input
                      type="text"
                      placeholder="reference"
                      className="w-full h-[48px]  px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                      required
                      autoComplete="on"
                      autoFocus
                      name="ref"
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
                  Description
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
      </div>
    );
  };
  
  export default Project;
  