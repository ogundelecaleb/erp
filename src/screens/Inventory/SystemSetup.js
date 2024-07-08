import { ArrowRight, ArrowRight2 } from "iconsax-react";
import React, { useState } from "react";
import TaskSetup from "../../components/project/TaskSetup";
import BugSetup from "../../components/project/BugSetup";
import CategorySetup from "../../components/inventory/CategorySetup";
import PurchaseSetup from "../../components/inventory/PurchaseSetup";
import TaxSetup from "../../components/inventory/TaxSetup";
import UnitSetup from "../../components/inventory/UnitSetup";

const InventorySystemSetup = () => {
  const [staged, setStaged] = useState("Item Category");

  const Stages = [
    { id: 1, name: "Item Category" },
    { id: 2, name: "Purchase Category" },
    { id: 3, name: "Tax" },
    { id: 4, name: "Unit" },
  ];
  return (
    <div className="p-[20px] bg-[#F2F2F2] h-screen ">
      {/* <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-full w-full bg-[#ffff] ">
        <p>ProjectSetup</p>
      </div> */}
      <div className="flex justify-between gap-[30px]">
        <div className="w-[411px] rounded-lg overflow-hidden ">
          {Stages &&
            Stages.map((stage, index) => (
              <button
                onClick={() => setStaged(stage.name)}
                className={`py-[18px] w-full px-[28px] flex-between overflow-hidden ${
                  stage.name === staged
                    ? "bg-[#F05800] text-[#fff] "
                    : "bg-[#fff] text-[#000000]"
                } `}
              >
                {stage?.name}
                <ArrowRight2 variant="Linear" size="20" />
              </button>
            ))}
        </div>
        {staged === "Item Category" ? <CategorySetup /> :staged === "Purchase Category" ?  <PurchaseSetup />: staged === "Tax" ?  <TaxSetup />: staged === "Unit" ?  <UnitSetup /> : ""}
      </div>
    </div>
  )
}

export default InventorySystemSetup