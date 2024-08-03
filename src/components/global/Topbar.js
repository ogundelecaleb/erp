import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { clearUserData } from "../../utils/utils";
import { ArrowDown, ArrowDown2, Logout } from "iconsax-react";
import Moment from "moment";
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
  Text,Menu, MenuButton, MenuList, MenuItem 
} from "@chakra-ui/react";



const Topbar = ({ setIsSidebar }) => {
  const [logo, setLogo] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let userData = localStorage.getItem("authData");
  userData = JSON.parse(userData);

  const handleIsModalClose = () => {
    setIsModalOpen(false);
  };
  function formatDate(datetimeStr) {
    const date = Moment(datetimeStr);
    const formattedDate = date.format("dddd, Do MMMM, YYYY");
    return formattedDate;
  }
  function formatTime(datetimeStr) {
    const date = Moment(datetimeStr);
    const formattedTime = date.format("h:mm a");
    return formattedTime;
  }

  return (
    <div className="flex w-full items-center justify-between px-6 gap-[16px] py-2 border-l-[0.2px] border-[#D0D5DD]">
      <div className="flex items-center">
        <button
          class="h-10 w-10 bg-[#FAFAFA] hover:bg-[#eeeded] flex justify-center items-center rounded-md lg:hidden mr-2"
          onClick={setIsSidebar}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20"
              stroke="#1A202C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#1A202C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="#1A202C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="flex items-center gap-[16px]">
          <div className="flex items-center">
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              {formatDate(new Date())}
            </p>
          </div>
          <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
            {formatTime(new Date())}
          </p>
        </div>
        <h4 className="text-[20px] text-[#1a202c] font-bold hidden md:block">
          {location.pathname === "/dashboard"
            ? "Dashboard"
            : location.pathname === "/transaction"
            ? "Transactions"
            : location.pathname === "/settlement"
            ? "Settlements"
            : location.pathname === "/merchant"
            ? "Team"
            : location.pathname === "/apikey"
            ? "API Credentials"
            : location.pathname === "/businessProfile"
            ? "Business Profile"
            : location.pathname === "/settlementAccount"
            ? "Settlement Account"
            : location.pathname === "/name"
            ? "Name"
            : location.pathname === "/userAdmin"
            ? "User Admin"
            : location.pathname === "/isActive"
            ? "IsActive"
            : location.pathname === "/accountDetails"
            ? "Account Details"
            : location.pathname === "/paymentlink"
            ? "Payment Link"
            : location.pathname === "/currency"
            ? "Currency"
            : location.pathname === "/security"
            ? "Security"
            : ""}
        </h4>{" "}
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex  gap-[12px] p-[8px] bg-gray-100/50  items-center rounded-[18px]">
          <button
            class="bg-[#FAFAFA] rounded-md  items-center lg:pl-[8px] lg:pr-[16px] pl-[6px] pr-[14px] py-2 flex cursor-pointer "
            onClick={() => {
              clearUserData();
              if (isModalOpen === false) {
                setIsModalOpen(true);
              } else {
                setIsModalOpen(false);
              }
            }}
          >
            <Logout variant="Bold" size={24} color="#F44336" />
          </button>

          <div className="flex items-center">
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              {userData?.user?.name}
            </p>
            <Menu>
                    <MenuButton bg={"none"} as={Button}>
                      <button className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] rounded-[8px] hover:bg-[#F7F9FC] flex justify-center items-center">
                      <ArrowDown2 size={16} color="#667185"/>
                      </button>
                    </MenuButton>
                    <MenuList maxW="32" className="">
                    <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Eaglion’s Workspace
            </p>
                     </MenuList>
                  </Menu>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
