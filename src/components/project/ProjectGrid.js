import React, { useState } from 'react'
import { resultData } from "../Data";
import {
    Add,
    Calendar,
    Clipboard,
    DocumentDownload,
    DocumentUpload,
    Edit,
    ElementEqual,
    Eye,
    Layer,
    Message2,
    More,
    Trash,
    UserAdd,
  } from "iconsax-react";
  import {
    SearchNormal1,
    Calendar2,
    MobileProgramming,
 

    CloseCircle,
    Maximize4,
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
import { IoShareSocialOutline } from 'react-icons/io5';
import {  Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import ModalLeft from '../ModalLeft';
import { enqueueSnackbar } from 'notistack';
import api from '../../api';



const ProjectGrid = ({data}) => {
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [formValue, setFormValue] = useState({
    name: "",
    description: "",
    start_date: "",
    due_date: "",
    status: "",
    budget: "",
    id: ""
  });

  async function editProject() {
    setIsLoading(true)
    try {
      const response = await api.updateProject(formValue.id,{
        name: formValue.name,
        description: formValue.description,
        start_date: formValue.start_date,
        due_date: formValue.due_date,
        status: formValue.status,
        budget: formValue.budget,
      });
      console.log("update prject ===>", response);
      enqueueSnackbar(response?.message, { variant: "success" });
      HandleEditModalClose(false)
      clearForm()
      //refetch()
     setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      enqueueSnackbar(error?.message, { variant: "error" });
    }
  }
  function clearForm (){
    setFormValue({  name: "",
    description: "",
    start_date: "",
    due_date: "",
    status: "",
    budget: "",
    id: ""})
  }


  const handleInputChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  function HandleEditModalClose() {
    setIsEditOpen(false);
  }

  function ToggleEditModal(result) {
    setIsEditOpen(!isEditOpen);
    setFormValue({
      ...formValue,
      name: result.name,
      description: result.description,
      start_date: result.start_date,
      due_date: result.due_date,
      status: result.status,
      budget: result.budget,
      id: result.id,
    });
  }



  return (
    <div className="overflow-auto">
          <div className="bg-[#F9FAFB] p-[10px] md:p-[16px] h-full overflow-auto lg:p-[20px] grid grid-cols-2  md:grid-cols-4 gap-[20px] ">
            {!data
              ? ""
              : data.map((result) => (
                  <div className="shadow shadow-[#F0F2F5]/32 px-[16px] py-[16px] md:py-[20px] bg-white rounded-[8px]">
                    <div className="flex justify-between items-center mb-[10px] md:mb-[16px]">
                      <button
                        className={`rounded-[20px] md:rounded-[40px] w-[60px] md:w-[74px] py-[2px] md:py-[4px] ${
                          result.status === "On Hold"
                            ? "bg-[rgb(255,245,230)] text-[#FF9800]"
                            : result.status === "Ongoing"
                            ? "bg-[#F9FAFB] text-[#667185]"
                            : "bg-[#EDF7EE] text-[#4CAF50]"
                        }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                      >
                        <p>{result?.status}</p>
                      </button>
                      <Menu>
                            <MenuButton bg={"none"} >
                            <button className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] rounded-[8px] hover:bg-[#F7F9FC] flex justify-center items-center">
                        <img
                          src="./assets/3dot.png"
                          className="h-[16px] w-[16px] md:h-[20px] md:w-[20px]"
                          alt="3 dots"
                        />
                      </button>
                            </MenuButton>
                            <MenuList maxW="32" className="">
                              <MenuItem
                                onClick={() =>
                                  navigate("/projectdetails", {
                                    state:{ result}
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

                              <MenuItem onClick={()=> ToggleEditModal(result)} w="full" color="#bf0d0d" mb="10px">
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

                    <div>
                      <p className="text-[14px] md:text-[16px]  text-[#000]  font-semibold leading-[20px] md:leading-[24px] tracking-[0.2px] mb-[18px]">
                        {result?.name}
                      </p>

                      <p className="text-[12px] md:text-[14px] text-[#667185]  font-normal leading-[18px] md:leading-[20px]">
                        {result?.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-[8px] mt-[16px] md:mt-[20px]">
                      <Calendar variant="Linear" color="#667185" size="20" />
                      <p className="text-[12px] md:text-[14px] text-[#667185]  font-normal leading-[18px] md:leading-[20px]">
                        {result?.end_date}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-[8px] mt-[16px] md:mt-[20px] text-[12px] md:text-[14px] text-[#667185]  font-normal">
                      <img
                        src={"./assets/userimage.png" ||result?.image}
                        alt="participant"
                        className="w-[24px] h-[24px] rounded-full "
                      />

                      <div className="flex items-center gap-[8px]">
                        <div className="flex items-center gap-[4px]">
                          <p>{result?.submit}</p>
                          <Layer variant="Linear" color="#667185" size="16" />
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <p>{result?.comment}</p>
                          <Message2
                            variant="Linear"
                            color="#667185"
                            size="16"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>


           {/* Edit Modal */}
        <ModalLeft isOpen={isEditOpen} onClose={HandleEditModalClose}>
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
                <button className=" ">
                  <CloseCircle variant="Linear" color="#667185" size="20" />
                </button>
              </div>
            </div>

            <div className="p-[12px] md:p-[20px] xl:p-[24px]">
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Project Title
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Hiring Individual Positions"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="name"
                    id="name"
                    value={formValue.name}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Project Description
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <textarea
                    type="text"
                    placeholder="Add Description"
                    className="w-full h-[137px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px] placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="description"
                    id="full-name"
                    value={formValue.description}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>

              <div className="flex-item flex-col md:flex-row w-full gap-5">
                {" "}
                <div className="mb-[24px] w-[60%]">
                  <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                    Budget
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <input
                      type="text"
                      placeholder="$ 0.00"
                      className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                      required
                      autoComplete="on"
                      autoFocus
                      name="budget"
                      id=""
                      value={formValue.budget}
                      onChange={(e) => handleInputChange(e)}
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                  </div>
                </div>
                <div className="mb-[24px] w-full md:w-[40%]">
                  <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                    Status
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <select
                      type="text"
                      placeholder=""
                      className="w-full h-[48px] pl-[16px] px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                      required
                      autoComplete="on"
                      name="status"
                      id="full-name"
                      value={formValue.status}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="">Select Status</option>
                      <option value="High">On Hold</option>
                      <option value="Medium">Ongoing</option>
                      <option value="Low">Completed</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex-item flex-col md:flex-row w-full gap-5 mb-[24px]">
                {" "}
                <div className="w-full md:w-[50%]">
                  <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                    Start Date
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <Calendar
                      size="16"
                      color="#98A2B3"
                      className="absolute left-[8px]"
                    />
                    <input
                      type="date"
                      placeholder=""
                      className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                      required
                      autoComplete="on"
                      name="start_date"
                      id="full-name"
                      value={formValue.start_date}
                      onChange={(e) => handleInputChange(e)}
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[50%]">
                  <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                    Due date
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <Calendar
                      size="16"
                      color="#98A2B3"
                      className="absolute left-[8px]"
                    />
                    <input
                      type="date"
                      placeholder="Project Name"
                      className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                      required
                      autoComplete="on"
                      name="due_date"
                      id="full-name"
                      value={formValue.due_date}
                      onChange={(e) => handleInputChange(e)}
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                  </div>
                </div>
              </div>
              

              <div className="py-[20px] border-t border-b-[#E4E7EC] flex-item  justify-end">
                <div className="flex-item gap-2">
                  {" "}
                  <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
                    Cancel
                  </button>
                  <button onClick={editProject} className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                    {isLoading ? (
                      <ClipLoader color={"white"} size={20} />
                    ) : (
                      <> Save changes</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalLeft>
        </div>
  )
}

export default ProjectGrid