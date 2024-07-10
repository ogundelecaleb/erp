import { AddSquare, CloseCircle, Maximize4 } from 'iconsax-react'
import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import ModalLeft from '../ModalLeft'

const BasicSalary = () => {
    const [isCreate, setIsCreate] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const toggleCreate = () => {
        setIsCreate(!isCreate)
    }
    const closeCreateModal = () => {
        setIsCreate(false)
    }
  return (
    <div className='mb-[24px]'> <div className=" w-full    border-[0.2px] border-[#98a2b3] rounded-[8px] ">
    <div className="p-[14px] md:p-[20px]  border-b-[0.2px] border-[#98a2b3] flex-between">
      {" "}
      <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
        Employee Salary
      </p>
      <button onClick={toggleCreate}>
        <AddSquare variant='Bold' size={24} color='#F44336'/>
      </button>
    </div>

    <ul className="p-[14px] md:p-[20px]">
      <li className="flex-between mb-[14px] md:mb-[20px] ">
        <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
          Payslip Type:
        </p>

        <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
          Monthly Payslip
        </p>
      </li>
      <li className="flex-between mb-[14px] md:mb-[20px]">
        <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
        Salary:
        </p>

        <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
        600,000.00
        </p>
      </li>
      <li className="flex-between mb-[14px] md:mb-[20px]">
        <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
         Account Type
        </p>

        <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
        Vant Bank        </p>
      </li>
     
    </ul>
  </div>

    {/* Create Modal */}
    <ModalLeft isOpen={isCreate} onClose={closeCreateModal}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                Set Basic Salary
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
               Payslip Type
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder="Name"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
                    <option value="">Select Payslip Type</option>
                    <option value="Monthly Payslip">Monthly Payslip</option>
                    </select>
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Salary
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
              <input
                    type="text"
                    placeholder="600,000.00"
                    className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="full-name"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
               Account Type
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder="Name"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
                    <option value="">Select Account Type</option>
                    <option value="Vant Bank">Vant Bank</option>
                    </select>
              </div>
            </div>


           
           
           

            <div className="py-[20px] border-t border-b-[#E4E7EC] flex-item  justify-end">
              <div className="flex-item gap-2">
                {" "}
                <button onClick={closeCreateModal} className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
                  Cancel
                </button>
                <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                  {!isLoading ? (
                    <ClipLoader color={"white"} size={20} />
                  ) : (
                    <> Create</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalLeft>
</div>
  )
}

export default BasicSalary