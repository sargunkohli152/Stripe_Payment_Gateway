import React, { useState } from "react";

function PlanCard({yearType, isSelected, onChange, plan }) {
  const [selectedTab, setSelectedTab] = useState(false);

  const handleClick = () => {
    setSelectedTab(true);
    onChange(plan.planName);
  };


  console.log(plan)

  return (
    <div onClick={()=> handleClick()}>
      <div className="cursor-pointer transition-all ease-in 300 flex flex-col gap-2">
        <div className={`flex justify-center items-center relative mb-8 py-10 px-7 bg-[#1e4d91] ${isSelected=== plan.planName ? '' : 'bg-opacity-25'}  text-white`}>
          <span className="font-bold p-[-1px]">
          {plan.planName}
          </span>
          {isSelected === plan.planName && (
            <div
              className="absolute bottom-[-10px] right-[50%] left-[50%] w-0 h-0 
              border-l-[8px] border-l-transparent
              border-t-[11px] border-[#1e4d91]
              border-r-[8px] border-r-transparent "
            ></div>
          )}
        </div>
        <div className="flex justify-center items-center flex-col gap-10">
          <div className={`${isSelected=== plan.planName ? 'text-[#1e4d91]': 'text-gray'}flex flex-col gap-3`}>
            <span className={`${isSelected=== plan.planName ? 'text-[#1e4d91]': 'text-gray-500'} font-semibold text-lg`}>
               {
                yearType ? plan.yearlyPrice :  plan.monthlyPrice
               }
                </span>
            <hr className="h-1 w-full" />
          </div>
          <div className={`flex flex-col gap-3`}>
            <span className={`${isSelected=== plan.planName ? 'text-[#1e4d91]': 'text-gray-500'} font-semibold text-lg`}>
                {plan.videoQuality}
                </span>
            <hr className="h-1" />
          </div>
          <div className={`${isSelected=== plan.planName ? 'text-[#1e4d91]': 'text-gray'}flex flex-col gap-3`}>
            <span className={`${isSelected=== plan.planName ? 'text-[#1e4d91]': 'text-gray-500'} font-semibold text-lg`}>
                {plan.resolution}
                </span>
            <hr className="h-1" />
          </div>
          <div className={`${isSelected=== plan.planName ? 'text-[#1e4d91]': 'text-gray'}flex flex-col gap-3 w-44 text-center`}>
            <span className={`${isSelected=== plan.planName ? 'text-[#1e4d91]': 'text-gray-500'} font-semibold text-lg`}>{plan.devicesToWatch}</span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
