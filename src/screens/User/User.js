import {
  Add,
  Book,
  Calendar,
  CloseCircle,
  DocumentDownload,
  DocumentUpload,
  ElementEqual,
  Layer,
  Maximize4,
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
  Switch,
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
import { Link } from "react-router-dom";
import UserTable from "../../components/user/UserTable";
import api from "../../api";
import { useQuery } from "@tanstack/react-query";
import { getRoles } from "../../utils/helperFunctions";
import { enqueueSnackbar } from "notistack";

const User = () => {
  const [isOpenImportModal, setIsOpenImportModal] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [enableLogin, setEnableLogin] = useState(false);
  const [isGrid, setIsGrid] = useState(true);
  const [formValue, setFormValue] = useState({name: "",email: "",role: "", phone: "", password: ""})

  const grantQuery = useQuery(["roles"], () => getRoles(), {
    keepPreviousData: true,
    refetchOnWindowFocus: "always",
  });

  // let grantData = grantQuery?.data?.data || [];

  console.log("rolless ===>>", grantQuery?.data);
  const getUsersQuery = useQuery(["users"], () => getUsers(), {
    keepPreviousData: true,
    refetchOnWindowFocus: "always",
  });

  async function getUsers() {
    try {
      const response = await api.getUsers();
      console.log("users===>", response);

      return response;
    } catch (error) {
      return error;
    }
  }
  function clearForm (){
    setFormValue({name: "", email: "", role: "", phone: "", password: ""})
  }

  // const handleInputChange = (e) => {
  //   setFormValue({...formValue, [e.target.name]: e.target.value });
  // };
  async function createUsers() {
    setIsLoading(true)
    try {
      const response = await api.createUser({
        name: formValue.name,
        email: formValue.email,
        role: formValue.role,
        mobile_no: formValue.phone,
        password: formValue.password,
      });
      console.log("createusers===>", response);
      enqueueSnackbar(response?.message, { variant: "success" });
      setIsCreateModal(false)
      clearForm()
      getUsersQuery.refetch()
     setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      enqueueSnackbar(error?.message, { variant: "error" });
    }
  }

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

  return (
    <div className="p-[20px] bg-[#F2F2F2] ">
      <div className="border-[0.2px] border-[#98a2b3] min-h-screen rounded-[8px]  bg-[#ffff] overflow-x-auto  ">
        <div className="border-b border-b-[#E4E7EC] h-full p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                User Management /{" "}
              </p>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; User
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
            <Link to="/loghistory" className="flex items-center gap-[8px] ">
              <p className="text-[14px] text-[#667185] leading-[20px]">Log</p>

              <Book variant="Linear" color="#667185" size="16" />
            </Link>
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
                  Import Customers
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
                      Download Sample Customer CSV File
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

            <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
            <div className="flex items-center gap-[8px]">
              <button onClick={toggleGrid}>
                <RowHorizontal
                  variant="Linear"
                  color={isGrid ? "#667185" : "#F05800"}
                  size="20"
                />
              </button>
              <button onClick={toggleGrid}>
                <ElementEqual
                  variant="Linear"
                  color={!isGrid ? "#667185" : "#F05800"}
                  size="20"
                />
              </button>
            </div>
          </div>
        </div>

        {isGrid ? <UserGrid  data={getUsersQuery?.data?.data?.data}/> : <UserTable data={getUsersQuery?.data?.data?.data} />}
      </div>

      {/* Edit Modal */}
      <ModalLeft isOpen={isCreateModal} onClose={closeCreateModal}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Create User
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
                Name
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  value={formValue.name}
                  onChange={(e) => {setFormValue({...formValue, name: e.target.value})}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Email
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  value={formValue.email}
                  onChange={(e) => {setFormValue({...formValue, email: e.target.value})}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className="mb-[24px] w-full ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Role
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder="Select role"
                  className="w-full h-[48px] pl-[16px] px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="role"
                  id="role"
                  value={formValue.role}
                  onChange={(e) => {setFormValue({...formValue, role: e.target.value})}}
                >
                  <option value="">Selecte Role</option>
                  {grantQuery?.data?.data  &&
                    grantQuery?.data?.data.data.map((result) => (
                      <option value={result?.id}>{result?.name}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Phone Number
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="+23481232122"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name=""
                  id="full-name"
                  value={formValue.phone}
                  onChange={(e) => {setFormValue({...formValue, phone: e.target.value})}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
              <p className=" text-[12px]   text-[#FF9800] leading-[20px] font-medium text-left mt-1 ">
                Please add mobile number with country code (ex. +234)
              </p>
            </div>
            <div className="flex-item gap-4 mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]  ">
                Enable Login
              </label>
              <Switch
                colorScheme="orange"
                onChange={() => setEnableLogin(!enableLogin)}
              />
            </div>

            {enableLogin && (
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Password
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter user password"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name=""
                    id="full-name"
                    value={formValue.password}
                    onChange={(e) => {setFormValue({...formValue, password: e.target.value})}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            )}

            <div className="py-[20px] border-t border-b-[#E4E7EC] flex-item  justify-end">
              <div className="flex-item gap-2">
                {" "}
                <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
                  Cancel
                </button>
                <button onClick={createUsers} className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                  {isLoading ? (
                    <ClipLoader color={"white"} size={20} />
                  ) : (
                    <> Create user</>
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

export default User;
