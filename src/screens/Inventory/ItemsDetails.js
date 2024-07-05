import React, { useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import {
  Calendar2,
  CloseCircle,
  DocumentDownload,
  DocumentUpload,
  Import,
  Maximize4,
  NoteText,
  Paperclip2,
  SearchNormal1,
  Status,
  Task,
} from "iconsax-react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import {
  Grid,
  Flex,
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
import {
  Add,
  Calendar,
  Chart,
  ChartCircle,
  Clipboard,
  DocumentText,
  Edit,
  Eye,
  Happyemoji,
  More,
  Profile2User,
  Trash,
  UserAdd,
} from "iconsax-react";
import ModalLeft from "../../components/ModalLeft";
import TaskTab from "../../components/project/TaskTab";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { TaskAnalytics } from "../../components/Data";
import Vendors from "../../components/inventory/Vendors";
import Purchase from "../../components/inventory/Purchase";
import {
  LogTime,
  PriceDetails,
  Reports,
  WarehouseDetails,
} from "../../components/inventory/InvetoryDetails";

const ItemsDetails = () => {
  const [isOpenImportModal, setIsOpenImportModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);

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
    <div className="p-[20px] bg-[#F2F2F2]  ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden h-full w-full bg-[#ffff]  mb-[20px]">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                Inventory /
              </p>
              <Link to="/inventorymanagement">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Manage inventory /
                </p>
              </Link>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; New item
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[16px] ">
            <select
              type="text"
              placeholder="Select User"
              className="max-w-[137px] h-[36px]  px-5 py-[8px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
              required
              autoComplete="on"
              autoFocus
              name="role"
              id="role"
            >
              <option value="Medium">Products</option>
              <option value="Low">Services</option>
              <option value="Low">Parts</option>
            </select>
          </div>
        </div>
        <div className=" w-full overflow-auto bg-[#fff] p-[10px] md:p-[20px] ">
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className=" w-full md:w-[50%] flex-center  border-[0.2px] border-[#98a2b3] rounded-[8px] py-[11px] ">
              {" "}
              <img
                src="./assets/fridge.png"
                className="h-[160px]  md:h-[269px] "
                alt="product"
              />
            </div>
            <div className=" w-full md:w-[50%]   border-[0.2px] border-[#98a2b3] rounded-[8px] p-[14px] md:p-[20px]">
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] mb-[24px] ">
                Order Summary
              </p>
              <ul>
                <li className="flex-between mb-[14px] md:mb-[20px]">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Name:
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                    Refrigerator
                  </p>
                </li>
                <li className="flex-between mb-[14px] md:mb-[20px]">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    SKU:
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    BCOO8ACC
                  </p>
                </li>
                <li className="flex-between mb-[14px] md:mb-[20px]">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Quantity:
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    117
                  </p>
                </li>
                <li className="flex-between mb-[14px] md:mb-[20px]">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Tax:
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    CGST SGST
                  </p>
                </li>
                <li className="flex-between ">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                    Description:
                  </p>

                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                    Giving information on its origins.{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className=" w-full md:w-[60%]  ">
              <div className="w-full">
                <Vendors />
              </div>
              <div className="w-full">
                <Purchase />
              </div>
            </div>
            <div className=" w-full md:w-[40%]    ">
              <PriceDetails />
              <WarehouseDetails />
              <Reports />
              <LogTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsDetails;
