import { FilterSearch, SearchNormal1, Trash } from "iconsax-react";
import React, { useState } from "react";
import { TaskAnalytics } from "../../components/Data";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate, useRoutes } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import faker from "faker";
import ExpenseSummaryDetails from "../../components/finance/ExpenseSummary";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  width: "100%",
  plugins: {
    // legend: {
    //   position: 'top',
    // },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    //   {
    //     label: "Expense",
    //     data: labels.map(() => faker.datatype.number({ min: 0, max: 50000 })),
    //     backgroundColor: "rgba(112, 191, 115, 1)",
    //   },
    {
      label: "Expense",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#F44336",
    },
  ],
};

const ExpenseSummary = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="p-[20px] bg-[#F2F2F2] min-h-screen ">
      <div className="border-[0.2px] border-[#98a2b3] mb-[24px] rounded-[8px] flex-between  w-full bg-[#ffff] px-[18px] py-[12px] ">
        <div className="flex gap-2">
          <select
            type="text"
            placeholder="All Users"
            className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
            required
            autoComplete="on"
            autoFocus
            name="full-name"
            id="full-name"
          >
            <option value="High">All Users</option>
            <option value="Medium">Admin</option>
            <option value="Low">Super Admins</option>
          </select>
          <select
            type="text"
            placeholder="Status"
            className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
            required
            autoComplete="on"
            autoFocus
            name="full-name"
            id="full-name"
          >
            <option value="High">On Hold</option>
            <option value="Medium">Ongoing</option>
            <option value="Low">Finished</option>
          </select>

          <input
            type="date"
            className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
          />
          <input
            type="date"
            className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
          />
        </div>
        <div className="flex-item gap-2">
          <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
            <FilterSearch variant="Linear" color="#4CAF50" size="20" />
          </buttion>
          <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
            <Trash variant="Linear" color="#F44336" size="20" />
          </buttion>
        </div>
      </div>
      <div className="bg-white rounded-lg border-[0.2px] border-[#98a2b3] mt-[20px] h-[459px] w-full  mt">
        <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-b-[0.8px]  border-[#D0D5DD]">
          <p className="text-[18px]  leading-[27px] text-[#000]  ">
            Expense Summary Report
          </p>

          <ul className="flex-item gap-3">
          <select
            type="text"
            placeholder="Status"
            className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
            required
            autoComplete="on"
          
            name="f"
            id=""
          >
            <option value="Jan, 2023 - Dec, 2024">Jan, 2023 - Dec, 2024</option>
            <option value="Medium">Ongoing</option>
            <option value="Low">Finished</option>
          </select>
           
          </ul>
        </div>
        <div className="px-[16px] mt-5 h-[350px] flex justify-center ">
          <Bar optins={options} data={data} />
        </div>
      </div>
      <div className="flex justify-center mt-[20px] ">
        <ExpenseSummaryDetails />
      </div>
    </div>
  );
};

export default ExpenseSummary;
