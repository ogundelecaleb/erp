import React from 'react'

const EmployeeSalary = () => {
  return (
    <div>
        <div className="px-[10px] md:px-[16px] xl:px-[20px] pt-[16px] md:pt-[18px] bg-white border border-[#98A2B38F]/50 ">
<ul>
    <li className="py-[10px] flex items-center justify-between border-b-[#E0E6ED]">
      <div className="w-[30%]">
        <p className="text-[14px] font-medium text-[#344054]">Employee Name</p>
      </div>
      <div className="w-[20%]">
        <p className="text-[14px] font-medium text-[#344054]">Salary</p>
      </div>
      <div className="w-[20%]">
        <p className="text-[14px] font-medium text-[#344054]">Actions</p>
      </div>
    </li>
   
</ul>

        </div>
    </div>
  )
}

export default EmployeeSalary