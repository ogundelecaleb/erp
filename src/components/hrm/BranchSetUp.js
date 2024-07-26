import { Add, Menu, Trash } from "iconsax-react";
import React, { useState } from "react";
import { TaskSetupData } from "../Data";
import { ClipLoader } from "react-spinners";
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
import api from "../../api";
import { enqueueSnackbar } from "notistack";
import { createBranch } from "../../api/apicalls";
import { useQuery } from "@tanstack/react-query";

const BranchSetUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [formValue, setFormValue] = useState({
    name: "",
    description: "",
    type: "",
  });
  const [isCreateModal, setIsCreateModal] = useState(false);
  // const handleChange = (newValue) => {
  //   const newValuesArr = newValue ? newValue.map(item => item.value) : [];
  //   setUsers( {newValuesArr} );
  // };
  const handleInputChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const toggleCreateModal = () => {
    setIsCreateModal(!isCreateModal);
  };

  const closeCreateModal = () => {
    setIsCreateModal(false);
  };
  const getProjectQuery = useQuery(["cat"], () => getBranchs(), {
    keepPreviousData: true,
    refetchOnWindowFocus: "always",
  });

  async function getBranchs() {
    try {
      const response = await api.getCategory();
      console.log("getBranch===>", response);

      return response;
    } catch (error) {
      return error;
    }
  }
  async function createBranch() {
    setIsLoading(true);
    try {
      const response = await api.createBranch({
        name: formValue.name,
        type: formValue.type,
      });
      console.log("createBranch===>", response);
      enqueueSnackbar(response?.message, { variant: "success" });
      setIsCreateModal(false);
      clearForm();
      getProjectQuery.refetch();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar(error?.message, { variant: "error" });
    }
  }

  async function deleteBranch(id) {
    setDeleteId(id);
    setIsLoading(true);
    try {
      const response = await api.deleteBranch(id);
      console.log("delete prject ===>", response);
      enqueueSnackbar(response?.message, { variant: "success" });

      getProjectQuery.refetch();
      //refetch()
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar(error?.message, { variant: "error" });
    }
  }

  const clearForm = () => {
    setFormValue({
      name: "",
      description: "",
      type: "",
    });
  };
  return (
    <div className="w-[65%]">
      <div className="rounded-lg overflow-hidden ">
        <div className="flex-between bg-white p-3">
          <div className="">
            <p className=" text-[16px] md:text-lg  text-[#000] leading-[24px] font-medium text-left ">
              Items
            </p>
          </div>
          <buttion
            onClick={toggleCreateModal}
            className="h-[40px] w-[40px] flex justify-center items-center bg-[#F0F2F5] rounded-md"
          >
            <Add variant="Bold" color="#F05800" size="20" />
          </buttion>
        </div>
        <div class="overflow-x-auto rounded-lg">
          <table className="min-w-full mb-6 border-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC] rounded-lg">
            <thead className="bg-light-gray">
              <tr className="">
                <th
                  scope="col"
                  className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                >
                  <div className="flex px-5   gap-[6px] md:gap-[12px] items-center">
                    <Menu variant="Bold" color="#667185" size="20" />
                  </div>
                </th>
                <th
                  scope="col"
                  className=" px-5  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                >
                  <div className="flex  gap-[6px] md:gap-[12px] items-center my-0">
                    Branch
                  </div>
                </th>

                <th
                  scope="col"
                  className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                >
                  <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                    Actions
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <div>Loading...</div>}
              {!isLoading &&
                getProjectQuery?.data?.data?.product_categories?.length ===
                  0 && (
                  <tr>
                    <td className="text-center" colspan="5">
                      <img
                        src="./nodata.gif"
                        className="mx-auto mt-6 h-[70px] "
                        alt=""
                      />
                      <h3 className="text-[30px] leading-[35px]  text-[#1A202C] font-extrabold mb-[6px]">
                        No Branch
                      </h3>
                    </td>
                  </tr>
                )}
              {getProjectQuery?.data?.data?.product_categories &&
                getProjectQuery?.data?.data?.product_categories?.map(
                  (result) => (
                    <tr key={result.name} className="mb-2 hover:bg-light-gray">
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        <Menu variant="Bold" color="#667185" size="20" />
                      </td>

                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        <input
                          className="w-[180px] md:w-[292px] border-[0.2px] p-2 rounded-md border-[#98A2B3]"
                          value={result.name}
                        />
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        <button onClick={() => deleteBranch(result.id)}>
                          {" "}
                          {isLoading && deleteId === result.id ? (
                            <ClipLoader color={"#F44336"} size={20} />
                          ) : (
                            <Trash variant="Bold" color="#F44336" size="20" />
                          )}
                        </button>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex-item justify-end pt-5 border-t-[0.2px] border-[#98A2B3]">
        <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
          {!isLoading ? (
            <ClipLoader color={"white"} size={20} />
          ) : (
            <> Save changes</>
          )}
        </button>
      </div>

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
            Create New Branch{" "}
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
                  placeholder="Branch Name"
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
                Type
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="type"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  name="type"
                  value={formValue.type}
                  onChange={(e) => handleInputChange(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            {/* <div className="mb-[24px]">
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
                  </div> */}
          </ModalBody>
          <Divider />
          <ModalFooter gap={"16px"}>
            <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
              Cancel
            </button>
            <button
              onClick={createBranch}
              className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white"
            >
              {isLoading ? (
                <ClipLoader color={"white"} size={20} />
              ) : (
                <> Create </>
              )}
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BranchSetUp;
