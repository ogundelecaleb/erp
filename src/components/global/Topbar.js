import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { clearUserData } from "../../utils/utils";
import {
  Add,
  ArrowDown,
  ArrowDown2,
  Logout,
  Setting,
  Setting2,
  UserCirlceAdd,
  UserEdit,
} from "iconsax-react";
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
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import api from "../../api";


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
        <div className="md:flex items-center gap-[16px] hidden">
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
        <div className="flex  gap-[12px]  items-center rounded-[18px]">
          

          <div className="flex items-center">
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              {userData?.user?.name}
            </p>
            <Menu>
              <MenuButton bg={"none"} >
                <button className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] rounded-[8px] hover:bg-[#F7F9FC] flex justify-center items-center">
                  <ArrowDown2 size={16} color="#667185" />
                </button>
              </MenuButton>
              <MenuList
                maxW="289px"
                w="289px"
                className="border-[2px] p-[10px] md:p-[16px]"
              >
                <div className="flex-item gap-[16px]">
                  <div className="h-[28px] w-[28px] md:h-[32px] md:w-[32px] rounded-[4px] bg-[#F9FAFB] flex justify-center items-center">
                    {" "}
                    <p className="text-[#475367] text-[12px] md:text-[12px] xl:text-[12px] font-bold leading-[24px] ">
                      EA
                    </p>
                  </div>
                  <p className="text-[#000000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Eaglion’s Workspace
                  </p>
                </div>
                <div className="flex-item justify-between mb-[20px] mt-[12px]">
                  <button className="py-[5px] px-[12px] border-[0.2px] rounded-md border-[#98A2B3] w-[96px] flex-item gap-2">
                    <Setting2 size={13} color="#98A2B3" />{" "}
                    <p className="text-[#98A2B3] text-[10px]  xl:text-[12px] font-normal leading-[18px] ">
                      Settings
                    </p>
                  </button>
                  <button className="py-[5px] px-[12px] border-[0.2px] rounded-md border-[#98A2B3]  flex-item gap-2">
                    <UserCirlceAdd size={13} color="#98A2B3" />{" "}
                    <p className="text-[#98A2B3] text-[10px]  xl:text-[12px] font-normal leading-[18px] ">
                      Invite members
                    </p>
                  </button>
                </div>
                <div>
                  <p className="text-[#98A2B3] text-[10px]  xl:text-[12px] font-normal leading-[18px] ">
                    ogundelecaleb@gmail.com
                  </p>
                </div>
                <div className="flex-item gap-2">

                  <div className="h-[28px] w-[28px] md:h-[32px] md:w-[32px] rounded-[4px] bg-[#F9FAFB] flex justify-center items-center">
                    {" "}
                    <p className="text-[#475367] text-[12px] md:text-[12px] xl:text-[12px] font-bold leading-[24px] ">
                      EA
                    </p>
                  </div>
                  <p className="text-[#000000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Eaglion’s Workspace
                  </p>
                </div>
                <div className="flex-item gap-2">
                  <div className="h-[28px] w-[28px] md:h-[32px] md:w-[32px] rounded-[4px] bg-[#F9FAFB] flex justify-center items-center">
                    {" "}
                    <p className="text-[#475367] text-[12px] md:text-[12px] xl:text-[12px] font-bold leading-[24px] ">
                      EA
                    </p>
                  </div>
                  <p className="text-[#000000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Eaglion’s Workspace
                  </p>
                </div>
                <div className="py-[16px] border-t-[0.2px]  border-[#98A2B3] mt-[20px] ">
                  <button className="flex-item gap-2 ">
                    {" "}
                    <Add size={20} color="#98A2B3" />{" "}
                    <p className="text-[#98A2B3] text-[12px]  xl:text-[14px] font-normal leading-[18px] ">
                      Create new worksapce
                    </p>
                  </button>
                  <button className="flex-item gap-2 mt-[20px]">
                    {" "}
                    <UserEdit size={20} color="#98A2B3" />{" "}
                    <p className="text-[#98A2B3] text-[12px]  xl:text-[14px] font-normal leading-[18px] ">
                      Profile
                    </p>
                  </button>
                  <button  onClick={() => {
                  // navigate("/login");
                 
                  api.logout();
                  navigate("/login");
                  // setIsOpen(false);
                }} className="flex-item gap-2 mt-[20px]">
                    {" "}
                    <Logout size={20} color="#F44336" />{" "}
                    <p className="text-[#F44336] text-[12px]  xl:text-[14px] font-normal leading-[18px] ">
                     Log out
                    </p>
                  </button>
                </div>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
