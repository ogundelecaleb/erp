import {
    Add,
    Book,
    Calendar,
    CloseCircle,
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
 
  import { Link, useNavigate } from "react-router-dom";
  import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from "chart.js";
  import { Doughnut, Line } from "react-chartjs-2";
  import faker from "faker";
  import { TaskAnalytics } from "../../components/Data";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  
  export const options = {
    responsive: true,
    maintainAspectRatio: true,
    width: "100%",
    plugins: {
      // legend: {
      //   position: 'top',
      // },
      // title: {
      //   display: true,
      //   text: 'Chart.js Line Chart',
      // },
    },
  };
  
  const labels = ["January", "February", "March", "April", "May", "June", "July"];

  export const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const MonthlyAttendance = () => {
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
         
          <div className="p-[10px] md:p-[16px] lg:p-[20px]">
            {" "}
            <div className="flex items-center gap-4">
              <input
                type="date"
                placeholder=""
                className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
              />
  
              <input
                type="date"
                placeholder=""
                className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
              />
              <select
                    type="text"
                    placeholder=""
                    className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
                    <option value="">Select Type</option>
                    <option value="Monthly Payslip">Monthly Payslip</option>
                  </select>
                  <select
                    type="text"
                    placeholder=""
                    className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                   
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="">Select Department</option>
                    <option value="Monthly Payslip">Monthly Payslip</option>
                  </select>
  
              <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
                <FilterSearch variant="Linear" color="#4CAF50" size="20" />
              </buttion>
              <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
                <Trash variant="Linear" color="#F44336" size="20" />
              </buttion>
            </div>
          </div>
        </div>
        <div className=" rounded-[8px] w-full mt-[24px]  h-[500px] bg-white border-[0.8px]  border-[#D0D5DD]  ">
          <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg border-b-[0.8px]  border-[#D0D5DD]  ">
            <p className="text-[18px]  leading-[27px] text-[#000]  ">Project Status</p>
            
          </div>
          <div className="flex-center mt-5 h-[400px] ">
        <Line className="w-full" options={options} data={data} />
      </div>
      </div>
       
      </div>
    );
  };
  
  export default MonthlyAttendance;
  