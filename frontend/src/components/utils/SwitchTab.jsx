import { useState } from "react";

function SwitchTab({tabs, onTabChange}) {
    const [selectedTab, setSelectedTab] = useState(0)

    const [left, setLeft] = useState(0)
    const activeTab = (tab, index) => {
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedTab(index)
        }, 300);
        onTabChange(tab,index)
    }
    
  return (
    <div className='h-8 md:h-12 bg-[#1e4d91] backdrop-blur-md rounded-full p-1'>
        <div className='flex items-center relative h-6 md:h-10'>
            {tabs.map((tab,index) =>(
                <span key={index}
                onClick={() => activeTab(tab,index)} 
                className={`h-full flex items-center justify-center w-[60px] md:w-[100px] text-white text-base relative z-10 cursor-pointer
                rounded-full transition-all ease-in 
                ${selectedTab === index? 'text-black font-semibold bg-white duration-300 transition ' : ''}`}>
                    {tab}
                </span>
            ))}
            <span className='h-12 w-[100px] rounded-xl absolute left-0' style={{left}}></span>
        </div>
    </div>
  )
}

export default SwitchTab