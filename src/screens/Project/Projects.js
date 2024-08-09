import {
  Add,
  Calendar,
  DocumentDownload,
  DocumentUpload,
  ElementEqual,
  Layer,
  Message2,
  RowHorizontal,
  SearchNormal1,
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
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../utils/helperFunctions";
import CreatableSelect from "react-select/creatable";
import api from "../../api";
import { enqueueSnackbar } from "notistack";


const Projects = () => {
  const [isOpenImportModal, setIsOpenImportModal] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGrid, setIsGrid] = useState(true);
  const [users, setUsers] = useState([]);
  const [formValue, setFormValue] = useState({
    name:"",
    description:"",
  })


  console.log("user State", users.newValuesArr);

  const getUsersQuery = useQuery(["user"], () => getUsers(), {
    keepPreviousData: true,
    refetchOnWindowFocus: "always",
  });
 const handleChange = (newValue) => {
    const newValuesArr = newValue ? newValue.map(item => item.value) : [];
    setUsers( {newValuesArr} );
  };
  const handleInputChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value });
  };



  const getProjectQuery = useQuery(["project"], () => getProject(), {
    keepPreviousData: true,
    refetchOnWindowFocus: "always",
  });

  async function getProject() {
    try {
      const response = await api.getProjects();
      console.log("projectsss===>", response);

      return response;
    } catch (error) {
      return error;
    }
  }

  console.log("project getttt====>" , getProjectQuery?.data)
 
  const countArray = (getUsersQuery?.data?.data?.data || []).map((user, index) => {
    return { label: user.name, value: user.id };
  });

  console.log("countarray", countArray ?? []);

  const toggleGrid = () => {
    setIsGrid(!isGrid);
  };

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
  function clearForm (){
    setFormValue({name: "", description: ""})
  }

  async function createProject() {
    setIsLoading(true)
    try {
      const response = await api.createProject({
        name: formValue.name,
        description: formValue.description,
        user: users.newValuesArr
      });
      console.log("createusers===>", response);
      enqueueSnackbar(response?.message, { variant: "success" });
      setIsCreateModal(false)
      clearForm()
       getProjectQuery.refetch()
     setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      enqueueSnackbar(error?.message, { variant: "error" });
    }
  }

  return (
    <div className="p-[20px] min-h-screen bg-[#F2F2F2] ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-full w-full bg-[#ffff] ">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                Project /{" "}
              </p>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; Manage projects
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
                  Import Project
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
                      Download Sample Project CSV File
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

            <button
              onClick={() => toggleCreateModal()}
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">
                Add New
              </p>

              <Add variant="Linear" color="#667185" size="16" />
            </button>
            <Modal
              isCentered
              isOpen={isCreateModal}
              onClose={closeCreateModal}
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
                  Create New Project{" "}
                </ModalHeader>
                <ModalCloseButton size={"sm"} />
                <Divider color="#98A2B3" />
                <ModalBody
                  py={{ base: "20px", md: "24px" }}
                  px={{ base: "16px", md: "24px" }}
                  className="pt-[20px] md:pt-[24px] px-[16px] md:px-[24px] pb-[30px] md:pb-[40px]"
                >
                  <div className="mb-[24px]">
                    <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                      Name
                    </label>
                    <div className=" relative  mt-[16px]  flex items-center">
                      <input
                        type="text"
                        placeholder="Project Name"
                        className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                        required
                        autoComplete="on"
                        autoFocus
                        name="name"
                        id="full-name"
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
                      Description
                    </label>
                    <div className=" relative  mt-[16px]  flex items-center">
                      <textarea
                        type="text"
                        placeholder="Add Description"
                        className="w-full h-[137px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px] placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                        required
                        autoComplete="on"
                      
                        name="description"
                        id=""
                        value={formValue.description}
                        onChange={(e) => handleInputChange(e)}
                        autoCapitalize="off"
                        autoCorrect="off"
                        spellCheck="false"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                      Users
                    </label>
                    <CreatableSelect
                      // onInputChange={(e) => {
                      //   setUsers(e);
                      //   console.log("console===>",e);
                      // }}
                      onChange={handleChange}
                      isMulti
                      name="colors"
                      options={countArray?.length > 0 ? countArray : []}
                      className="w-full   text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          border: state.isFocused
                            ? "0.2px solid #D0D5DD"
                            : "0.2px solid #F05800",
                          borderRadius: "8px",
                          boxShadow: "none",
                          "&:hover": {
                            border: "0.2px solid #F05800",
                          },
                        }),
                      }}
                      classNamePrefix="react-select"
                    />
                  </div>
                </ModalBody>
                <Divider />
                <ModalFooter gap={"16px"}>
                  <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
                    Cancel
                  </button>
                  <button onClick={createProject} className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                    {isLoading ? (
                      <ClipLoader color={"white"} size={20} />
                    ) : (
                      <> Create </>
                    )}
                  </button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
            <div className="flex items-center gap-[8px]">
              <button onClick={toggleGrid}>
                <RowHorizontal
                  variant="Linear"
                  color={!isGrid ? "#667185" : "#F05800"}
                  size="20"
                />
              </button>
              <button onClick={toggleGrid}>
                <ElementEqual
                  variant="Linear"
                  color={isGrid ? "#667185" : "#F05800"}
                  size="20"
                />
              </button>
            </div>
          </div>
        </div>
        <ul className="border-b border-b-[#E4E7EC]    grid grid-cols-2  sm:grid-cols-4 justify-between items-center ">
          <li className="flex items-center gap-[5px] md:gap-[10px] border-r border-[#E4E7EC] p-[10px] md:p-[20px]">
            <p className=" text-[14px] md:text-[16px]  text-[#F05800] font-medium leading-[20px]">
              All
            </p>
            <div className="h-[28px] w-[30px] md:h-[32px] md:w-[39px] rounded-[6px] flex justify-center items-center bg-[#FEEEE6] ">
              <p className="text-[14px] md:text-[16px]   text-[#F05800] font-semibold leading-[20px] md:leading-[24px]">
                12
              </p>
            </div>
          </li>
          <li className="flex items-center gap-[5px] md:gap-[10px] border-r border-[#E4E7EC] p-[10px] md:p-[20px]">
            <p className=" text-[14px] md:text-[16px] text-[#98A2B3] ] font-medium leading-[20px]">
              Ongoing
            </p>
            <div className="h-[32px] w-[39px] rounded-[6px] flex justify-center items-center bg-[#F7F9FC] ">
              <p className="text-[14px] md:text-[16px] text-[#667185]  font-semibold leading-[20px] md:leading-[24px]">
                12
              </p>
            </div>
          </li>
          <li className="flex items-center gap-[5px] md:gap-[10px] border-r border-[#E4E7EC] p-[10px] md:p-[20px]">
            <p className=" text-[14px] md:text-[16px] text-[#98A2B3] ] font-medium leading-[20px]">
              On Hold
            </p>
            <div className="h-[32px] w-[39px] rounded-[6px] flex justify-center items-center bg-[#F7F9FC] ">
              <p className="text-[14px] md:text-[16px] text-[#667185]  font-semibold leading-[20px] md:leading-[24px]">
                12
              </p>
            </div>
          </li>
          <li className="flex items-center gap-[5px] md:gap-[10px] p-[10px] md:p-[20px]">
            <p className=" text-[14px] md:text-[16px] text-[#98A2B3] ] font-medium leading-[20px]">
              Finished
            </p>
            <div className="h-[32px] w-[39px] rounded-[6px] flex justify-center items-center bg-[#F7F9FC] ">
              <p className="text-[14px] md:text-[16px] text-[#667185]  font-semibold leading-[20px] md:leading-[24px]">
                12
              </p>
            </div>
          </li>
        </ul>

        {isGrid ? <ProjectGrid data={getProjectQuery?.data?.data} refetch={getProjectQuery.refetch()} /> : <ProjectTable  data={getProjectQuery?.data?.data} refetch={getProjectQuery.refetch()} />}
      </div>
    </div>
  );
};

export default Projects;
