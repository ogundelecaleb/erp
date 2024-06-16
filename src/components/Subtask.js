import { Calendar, Trash } from "iconsax-react";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { ClipLoader } from "react-spinners";

const Subtask = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
    const newItem = { ...formData };
    setItems([...items, newItem]);
    setFormData({
      name: "",
      date: "",
    });
  };
  return (
    <div>
      <div className="flex-between pb-[24px] md:pb-[32px] border-b-[0.8px]  border-[#E4E7EC]">
        {" "}
        <p className=" text-[16px] md:text-lg  text-[#000] leading-[24px] font-medium text-left ">
          Subtask
        </p>
        <button
          onClick={() => setShowForm(!showForm)}
          type="button"
          className="flex items-center gap-2 rounded-lg bg-[#F7F9FC]  py-[12px] px-[20px] m:px-[24px] text-sm text-[#667185] transition-colors hover:bg-[#e8eef6]"
        >
          <span>Add Subtask</span>
          <FiPlus color="667185" size={"20"} />
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="flex-item flex-col md:flex-row gap-4 md:gap-5 py-[24px] md:py-[32px] border-b-[0.8px] ">
            <div className="w-[50%]">
              <label className="text-[14px] md:text-[16px] text-[#000] leading-[20px] font-medium   mb-[8px] md:mb-[16px]">
                Name
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Project Name"
                  className=" w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="name"
                  id="full-name"
                  value={formData.name}
                  onChange={handleChange}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className="w-[50%]">
              <label className="text-[14px] md:text-[16px] text-[#000] leading-[20px] font-medium   mb-[8px] md:mb-[16px]">
                Due date
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <Calendar
                  size="16"
                  color="#98A2B3"
                  className="absolute left-[8px]"
                />
                <input
                  type="date"
                  placeholder="Project Name"
                  className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="date"
                  id="full-name"
                  value={formData.date}
                  onChange={(e) => handleChange(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end pt-[24px] gap-3 md:pt-[32px] ">
            <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
              Cancel
            </button>
            <button className="border-[0.2px]  border-[#98A2B3] w-[160px] hover:bg-[#f05800c6] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
              {isLoading ? (
                <ClipLoader color={"white"} size={20} />
              ) : (
                <> Save Substack </>
              )}
            </button>
          </div>
        </form>
      )}

      <ul className="py-[24px] md:py-[32px]">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-[8px] md:p-[11px]  mb-[20px] flex-item gap-[8px] md:gap-[16px] border-[0.2px] border-[#98A2B3] bg-white shadow-xl rounded-lg shadow-[#F0F2F5]"
          >
            <div className="h-[20px] w-[20px] rounded-full bg-[#F05800] flex justify-center items-center">
              <TiTick size={"14"} color="#fff" />
            </div>

            <p className=" text-[16px] md:text-lg  text-[#667185] leading-[24px] font-medium text-left flex-1">
              {item.name}
            </p>

            <button
              onClick={() =>
                setItems((pv) => pv.filter((items) => items.name !== item.name))
              }
              className="h-[42px] w-[44px] rounded-[6px]  hover:bg-[#f26056] bg-[#F44336] flex-center"
            >
              <Trash variant="Linear" color="#FFF" size="24" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subtask;
