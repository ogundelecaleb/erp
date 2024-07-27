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

export function CustomerInfo() {
  return (
    <div className=" w-full    border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden mb-[24px]">
      <div className=" w-full    border-b-[0.2px] border-[#98a2b3]  p-[14px] md:p-[20px] ">
        <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
          Customer Info
        </p>
      </div>
      <ul className="  p-[14px] md:p-[20px]">
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Name:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
            Ogundele Caleb
          </p>
        </li>
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Email Address:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
            ogundelecaleb13@gmail.com
          </p>
        </li>
        <li className="flex-between ">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Phone Number:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
            09099999999
          </p>
        </li>
      </ul>
    </div>
  );
}

export function AddressInfo() {
  return (
    <div className=" w-full    border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden mb-[24px]">
      <div className=" w-full    border-b-[0.2px] border-[#98a2b3]  p-[14px] md:p-[20px] ">
        <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
          Address Info
        </p>
      </div>
      <ul className="  p-[14px] md:p-[20px]">
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Address:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
            12 ogba road, fagba junction, Ikeja
          </p>
        </li>
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Country:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
            Nigeria
          </p>
        </li>
        <li className="flex-between ">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Zip code:
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
            100001
          </p>
        </li>
      </ul>
    </div>
  );
}

export function CompanyInfo() {
  return (
    <div className=" w-full    border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden mb-[24px]">
      <div className=" w-full    border-b-[0.2px] border-[#98a2b3]  p-[14px] md:p-[20px] ">
        <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
          Company Info
        </p>
      </div>
      <div className="flex-item gap-[24px] md:gap-[32px] flex-col md:flex-row p-[14px] md:p-[20px]">
        {" "}
        <ul className="w-full md:w-[50%]  ">
          <li className="flex-between mb-[14px] md:mb-[20px]">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Address:{" "}
            </p>

            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
              12 ogba road, fagba junction, Ikeja
            </p>
          </li>
          <li className="flex-between mb-[14px] md:mb-[20px]">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Country:{" "}
            </p>

            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
              Nigeria
            </p>
          </li>
          <li className="flex-between ">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Zip code:
            </p>

            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
              100001
            </p>
          </li>
        </ul>
        <ul className="w-full md:w-[50%]  ">
          <li className="flex-between mb-[14px] md:mb-[20px]">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Address:{" "}
            </p>

            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
              12 ogba road, fagba junction, Ikeja
            </p>
          </li>
          <li className="flex-between mb-[14px] md:mb-[20px]">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Country:{" "}
            </p>

            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
              Nigeria
            </p>
          </li>
          <li className="flex-between ">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Zip code:
            </p>

            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
              100001
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

