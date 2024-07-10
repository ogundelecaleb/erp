import React, { useState } from 'react'
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
  import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import PayslipTable from '../../components/hrm/PayslipTable';

const Payslip = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

  return (
    <div> <div className="border-[0.2px] border-[#98a2b3] rounded-[8px]  bg-[#ffff] mt-[24px] ">
    <div className="border-b border-b-[#E4E7EC] h-full p-[16px] md:p-[20px] block md:flex justify-between items-center ">
      <div className="flex items-center gap-[16px]">
        <div className="flex items-center">
        <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              HRM /{" "}
            </p>
          <Link to="/employee">
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              Employee /{" "}
            </p>
          </Link>
          <Link to="">
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              Payroll /{" "}
            </p>
          </Link>
          <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            &nbsp; Payslip
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
      
      </div>
    </div>
    <div className="p-[10px] md:p-[16px] lg:p-[20px]">
      {" "}
      <div className="flex items-center gap-4">
        <select
          type="text"
          placeholder="Select Item Type"
          className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
          required
          autoComplete="on"
          autoFocus
          name="full-name"
          id="full-name"
        >
          <option value="High">Select Month</option>
          <option value="Medium">January</option>
          <option value="Low">Febuary</option>
        </select>

        <select
          type="text"
          placeholder="Select"
          className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
          required
          autoComplete="on"
          autoFocus
          name="full-name"
          id="full-name"
        >
          <option value="High">Select Yearly</option>
          <option value="Medium">2020</option>
          <option value="Low">2021</option>
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
  <PayslipTable/>
  </div>
  )
}

export default Payslip