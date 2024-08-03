import React, { useRef, useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";

const PersonalDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    dob: "",
    gender: "",
    phone: "",
    address: "",
    branch_id: "",
    department_id: "",
    designation_id: "",
    role: "",
    user_id: "",
    name: "",
    email: "",
    password: "",
    document: [""],
    payment_requires_work_advice: "",
    passport_country: "",
    passport: "",
    location_type: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    company_doj: "",
    account_holder_name: "",
    account_number: "",
    bank_name: "",
    bank_identifier_code: "",
    branch_location: "",
    tax_payer_id: "",
    hours_per_day: "",
    annual_salary: "",
    days_per_week: "",
    fixed_salary: "",
    hours_per_month: "",
    rate_per_day: "",
    days_per_month: "",
    rate_per_hour: "",
  });
  const [document, setDocument] = useState(null);

  const handleInputChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setDocument(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (document) {
      // You can handle the file upload here, like sending it to a server
      console.log("Selected file:", document);
    } else {
      console.log("No file selected");
    }
  };
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      {" "}
      <div>
        <div className=" w-full overflow-auto bg-[#fff] p-[10px] md:p-[20px] ">
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className=" w-full md:w-[50%]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Name <sup className="text-[#F44336]">*</sup>
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="name"
                  value={formValue.name}
                  onChange={(e) => handleInputChange(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>

            <div className="w-full md:w-[50%] ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Location <sup className="text-[#F44336]">*</sup>
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  name="location"
                  value={formValue.location}
                  onChange={(e) => handleInputChange(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                >
                  <option value="Medium">Select location type</option>
                  <option value="Residential">Residential</option>
                  <option value="Postal">Postal</option>
                  <option value="Work Address">Work Address</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Email <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="email"
                    value={formValue.email}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Gender <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="gender"
                    value={formValue.gender}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  State<sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter state"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="state"
                    value={formValue.state}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  City <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="city"
                    value={formValue.city}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Date of Birth <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="date"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="dob"
                    value={formValue.dob}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Gender <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
                    <option value="Medium">Male</option>
                    <option value="Low">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Country<sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter country"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="country"
                    value={formValue.country}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Zip Code<sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="zipcode"
                    value={formValue.zipcode}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Password <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter password"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="password"
                    value={formValue.password}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Confirm Password <sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Confirm password"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="password"
                    value={formValue.password}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>

            <div className="flex-item fl w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full  ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  House Address<sup className="text-[#F44336]">*</sup>
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Enter house address"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    name="address"
                    value={formValue.address}
                    onChange={(e) => handleInputChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden h-full w-full bg-[#ffff] p-[10px] md:p-[20px] mb-[20px] mt-[20px] ">
        <div className="flex flex-col justify-start gap-[20px] mb-[24px]">
          <div className="flex-item flex-col justify-start md:flex-row w-full md:w-[50%] gap-[20px] ">
            <div className=" w-full md:w-[50%] ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Account Holder Name <sup className="text-[#F44336]">*</sup>
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  name="account_holder_name"
                  value={formValue.account_holder_name}
                  onChange={(e) => handleInputChange(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className=" w-full md:w-[50%] ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Account Number <sup className="text-[#F44336]">*</sup>
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Enter Phone Number "
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  name="account_number"
                  value={formValue.account_number}
                  onChange={(e) => handleInputChange(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
            <div className=" w-full md:w-[50%] ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Bank<sup className="text-[#F44336]">*</sup>
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Enter bank"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  name="bank_name"
                  value={formValue.bank_name}
                  onChange={(e) => handleInputChange(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className=" w-full md:w-[50%] ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Tax Payer ID <sup className="text-[#F44336]">*</sup>
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Tax Payer ID"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  name="tax_payer_id"
                  value={formValue.tax_payer_id}
                  onChange={(e) => handleInputChange(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden h-full w-full bg-[#ffff] p-[10px] md:p-[20px] mb-[20px] ">
        <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
          <div className=" w-full md:w-[50%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Upload Certificate
            </label>
            <div className="py-[18px] lg:py-[24px] px-[16px] md:px-[20px]   border-[0.6px]  border-[#98A2B3] border-dashed rounded-[8px] flex-item gap-2 md:gap-4 ">
              <button
                onClick={handleButtonClick}
                className="h-[48px] w-[48px] rounded-full  hover:bg-[#b0b8c4] bg-[#98A2B3] flex-center"
              >
                <input
                  type="file"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  accept=".pdf,.docx"
                  className="hidden z-10 w-full h-full"
                />
                <RiUploadCloud2Line />
              </button>
              <div className="flex flex-col justify-between flex-1 h-full">
                {document ? (
                  <div>
                    <p className=" text-[14px] md:text-base  text-[#000] leading-[20px] font-medium text-left ">
                      {document.name}
                    </p>
                    <p className="text-[14px]  text-[#667185] leading-[20px] font-medium ">
                      File Size: {(document.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                ) : (
                  <>
                    <p className=" text-[14px] md:text-base  text-[#000] leading-[20px] font-medium text-left ">
                      Upload your document
                    </p>
                    <p className="text-[14px]  text-[#667185] leading-[20px] font-medium ">
                      Max 5 MB
                    </p>
                  </>
                )}
              </div>

              <button className="border-[0.2px]   w-[79px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                {!isLoading ? (
                  <ClipLoader color={"white"} size={20} />
                ) : (
                  <> Upload </>
                )}
              </button>
            </div>
          </div>

          <div className="w-full md:w-[50%] ">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Upload CV{" "}
            </label>
            <div className="py-[18px] lg:py-[24px] px-[16px] md:px-[20px]   border-[0.6px]  border-[#98A2B3] border-dashed rounded-[8px] flex-item gap-2 md:gap-4 ">
              <button className="h-[48px] w-[48px] rounded-full  hover:bg-[#b0b8c4] bg-[#98A2B3] flex-center">
                <RiUploadCloud2Line />
              </button>
              <div className="flex flex-col justify-between flex-1 h-full">
                <p className=" text-[14px] md:text-base  text-[#000] leading-[20px] font-medium text-left ">
                  Upload your document
                </p>
                <p className="text-[14px]  text-[#667185] leading-[20px] font-medium ">
                  Max 5 MB
                </p>
              </div>

              <button className="border-[0.2px]   w-[79px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                {!isLoading ? (
                  <ClipLoader color={"white"} size={20} />
                ) : (
                  <> Upload </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
          <div className=" w-full md:w-[50%]">
            <div className="flex-between mb-[8px] md:mb-[16px]">
              <label className="text-[14px] text-[#667185] leading-[20px]  ">
                Upload Photo{" "}
              </label>
            </div>

            <div className="py-[18px] lg:py-[24px] px-[16px] md:px-[20px]   border-[0.6px]  border-[#98A2B3] border-dashed rounded-[8px] flex-item gap-2 md:gap-4 ">
              <button className="h-[48px] w-[48px] rounded-full  hover:bg-[#b0b8c4] bg-[#98A2B3] flex-center">
                <RiUploadCloud2Line />
              </button>
              <div className="flex flex-col justify-between flex-1 h-full">
                <p className=" text-[14px] md:text-base  text-[#000] leading-[20px] font-medium text-left ">
                  Upload your document
                </p>
                <p className="text-[14px]  text-[#667185] leading-[20px] font-medium ">
                  Max 5 MB
                </p>
              </div>

              <button className="border-[0.2px]   w-[79px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                {!isLoading ? (
                  <ClipLoader color={"white"} size={20} />
                ) : (
                  <> Upload </>
                )}
              </button>
            </div>
          </div>

          <div className=" w-full md:w-[50%] ">
            <div className="flex-between mb-[8px] md:mb-[16px]">
              <label className="text-[14px] text-[#667185] leading-[20px]  ">
                Upload Result
              </label>
            </div>
            <div className="py-[18px] lg:py-[24px] px-[16px] md:px-[20px] border-[0.6px]  border-[#98A2B3] border-dashed rounded-[8px] flex-item gap-2 md:gap-4 ">
              <button className="h-[48px] w-[48px] rounded-full  hover:bg-[#b0b8c4] bg-[#98A2B3] flex-center">
                <RiUploadCloud2Line />
              </button>
              <div className="flex flex-col justify-between flex-1 h-full">
                <p className=" text-[14px] md:text-base  text-[#000] leading-[20px] font-medium text-left ">
                  Upload your document
                </p>
                <p className="text-[14px]  text-[#667185] leading-[20px] font-medium ">
                  Max 5 MB
                </p>
              </div>

              <button className="border-[0.2px]   w-[79px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                {!isLoading ? (
                  <ClipLoader color={"white"} size={20} />
                ) : (
                  <> Upload </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[0.8px]  border-[#E4E7EC] mb-[20px]" />
      <div className=" flex-item  justify-end">
        <div className="flex-item gap-2">
          {" "}
          <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
            Cancel
          </button>
          <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
            {!isLoading ? (
              <ClipLoader color={"white"} size={20} />
            ) : (
              <> Save changes</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
