import { ArrowDown2 } from "iconsax-react";
import React from "react";
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
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import faker from "faker";
import { TaskAnalytics } from "../../components/Data";

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

const labels = ["01", "02", "03", "04", "05", "06", "07"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "#F05800",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(243, 121, 51, 1)",
    // },
  ],
};

export const staffData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "rgba(112, 191, 115, 1)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(243, 121, 51, 1)",
    // },
  ],
};

export const dataPie = {
  labels: ["Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 11, 8, 15, 12, 14,],
      backgroundColor: [
        "rgba(255, 173, 51, 1)",
        "rgba(243, 121, 51, 1)",
        "rgba(112, 191, 115, 1)",
        "rgba(246, 105, 94, 1)",
        "rgba(255, 223, 176, 1)",
        "rgba(71, 83, 103, 1)",
        "rgba(107, 64, 0, 1)",
      ],
      borderColor: [
        "rgba(255, 173, 51, 1)",
        "rgba(243, 121, 51, 1)",
        "rgba(112, 191, 115, 1)",
        "rgba(246, 105, 94, 1)",
        "rgba(255, 223, 176, 1)",
        "rgba(71, 83, 103, 1)",
        "rgba(107, 64, 0, 1)",
      ],
      borderWidth: 1,
      spacing: 3,
      borderJoinStyle: "round",
      borderRadius: 3,
    },
  ],
};


export const ClientData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "#FF9800",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(243, 121, 51, 1)",
    // },
  ],
};

const CrmReport = () => {
  return (
    <div className="p-[20px] bg-[#F2F2F2]  ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-full w-full bg-[#ffff] ">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                CRM
              </p>

              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; / Lead
              </p>
            </div>
            <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
          </div>

          <div className="flex items-center gap-[16px] ">
            <button
              // onClick={() => toggleImportModal()}
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">Deal</p>

              <ArrowDown2 variant="Linear" color="#667185" size="16" />
            </button>
          </div>
        </div>
        <div className="px-3 md:px-5">
          <div className="bg-white rounded-lg border-[0.2px] border-[#98a2b3] mt-[20px] h-[459px] w-full  mt">
            <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-b-[0.8px]  border-[#D0D5DD]">
              <p className="text-[18px]  leading-[27px] text-[#000]  ">
                Leads Per Month
              </p>
              <button className="px-[16px] py-[4px] bg-[rgb(249,250,251)] shadow text-white text-[14px]  leading-[20px] flex-item gap-2  rounded-[16px]">
                <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                  May, 2024
                </p>{" "}
              </button>
            </div>
            <div className="px-[16px] mt-5 h-[350px] flex justify-center ">
              <Bar options={options} data={data} />
            </div>
          </div>
          <div className="bg-white rounded-lg border-[0.2px] border-[#98a2b3] mt-[20px] h-[459px] w-full  mt">
            <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-b-[0.8px]  border-[#D0D5DD]">
              <p className="text-[18px]  leading-[27px] text-[#000]  ">
              Leads (staff) Per Month              </p>
              <button className="px-[16px] py-[4px] bg-[rgb(249,250,251)] shadow text-white text-[14px]  leading-[20px] flex-item gap-2  rounded-[16px]">
                <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                  May, 2024
                </p>{" "}
              </button>
            </div>
            <div className="px-[16px] mt-5 h-[350px] flex justify-center ">
              <Bar options={options} data={staffData} />
            </div>
          </div>
          <div className="bg-white rounded-lg border-[0.2px] border-[#98a2b3] mt-[20px] h-[459px] w-full  mt">
            <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-b-[0.8px]  border-[#D0D5DD]">
              <p className="text-[18px]  leading-[27px] text-[#000]  ">
              Leads (client) Per Month
              </p>
              <button className="px-[16px] py-[4px] bg-[rgb(249,250,251)] shadow text-white text-[14px]  leading-[20px] flex-item gap-2  rounded-[16px]">
                <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                  May, 2024
                </p>{" "}
              </button>
            </div>
            <div className="px-[16px] mt-5 h-[350px] flex justify-center ">
              <Bar options={options} data={ClientData} />
            </div>
          </div>

          <div className="flex-item flex-col md:flex-row gap-[20px] mt-4 mb-4">
          <div className=" rounded-[8px] w-full md:w-[50%] h-[375px] border-[0.8px]  border-[#D0D5DD]  ">
              <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg border-b-[0.8px]  border-[#D0D5DD]  ">
                <p className="text-[18px]  leading-[27px] text-[#000]  ">
                This Week Leads Conversions
                </p>
              </div>
              <div className="flex-center mt-5 h-[250px] ">
                {/* <Doughnut
                  data={pieData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    rotation: -90,
                    circumference: 180,
                    // heigth:"600px",
                    plugins: {
                      legend: {
                        position: "top",
                        labels: {
                          pointStyle: "square",
                          usePointStyle: true,
                          // fullSize: false,
                          pointStyleWidth: 10,
                          font: {
                            size: 10,
                          },
                        },
                      },
                    },
                  }}
                /> */}
                <Pie data={dataPie}  options={{
                    plugins: {
                      legend: {
                        position: "right",
                        labels: {
                          pointStyle: "rect",
                          usePointStyle: true,
                          // fullSize: false,
                          pointStyleWidth: 10,
                          font: {
                            size: 10,
                          },
                        },
                      },
                    },
                  }} />
              </div>
            </div>
            <div className=" rounded-[8px] w-full md:w-[50%] h-[375px] border-[0.8px]  border-[#D0D5DD]  ">
              <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-b-[0.8px]  border-[#D0D5DD] ">
                <p className="text-[18px]  leading-[27px] text-[#000]  ">
                  Source Conversion
                </p>
              </div>
              <div className="px-[16px] mt-5 h-[300px] ">
                {" "}
                <Bar options={options} data={data} />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmReport;
