import React, { useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import { AddressInfo, CompanyInfo, CustomerInfo } from "./Details";

const CustomerDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      {" "}
      <div>
        <div className=" w-full overflow-auto bg-[#fff] p-[10px] md:p-[20px] ">
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className=" w-full md:w-[50%]">
              <CustomerInfo />
            </div>
            <div className="w-full md:w-[50%] ">
              <AddressInfo />
            </div>
          </div>
          <div>
            <CompanyInfo />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
